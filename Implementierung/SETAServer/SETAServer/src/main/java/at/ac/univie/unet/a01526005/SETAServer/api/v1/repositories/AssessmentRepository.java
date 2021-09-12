package at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.AssessmentTyp;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.Assessment;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.SzenarioErgebnis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.data.relational.core.query.Criteria.where;

/**
 * Repository class to to access  Assessments from the database
 */
@Repository
public class AssessmentRepository {
    @Autowired
    private R2dbcEntityTemplate entityTemplate;

    /**
     * Creates 2 new uncompleted assessments (vortraining and nachtraining) with one assessmentID
     *
     * @param benutzername user who does the assessment
     * @return assessmentID of the newly created assessments
     */
    public Long insertTraining(String benutzername) {
        String sql = "INSERT Assessment (typ, benutzername) VALUES ('VORTRAINING', :benutzername);" +
                " INSERT Assessment (assessmentID, typ, benutzername) VALUES (LAST_INSERT_ID(), 'NACHTRAINING', :benutzername);" +
                " SELECT LAST_INSERT_ID() AS id ";

        return entityTemplate.getDatabaseClient()
                .sql(sql)
                .bind("benutzername", benutzername)
                .fetch()
                .one()
                .map(stringObjectMap -> ((BigInteger) stringObjectMap.get("id")).longValue())
                .block();
    }

    /**
     * Creates and stores a new pruefung
     * @param benutzername of the user for the pruefung
     * @return the assessmentID of the pruefung
     */
    public Long insertPruefung(String benutzername) {
        String sql = "INSERT Assessment (typ, benutzername) VALUES ('PRUEFUNG', :benutzername);" +
                " SELECT LAST_INSERT_ID() AS id ";

        return entityTemplate.getDatabaseClient()
                .sql(sql)
                .bind("benutzername", benutzername)
                .fetch()
                .one()
                .map(stringObjectMap -> ((BigInteger) stringObjectMap.get("id")).longValue())
                .block();
    }

    /**
     * Update the complete flag in the database
     * @return rows modified, should be 1 on success
     */
    public Mono<Integer> setAssessmentCompleted(String benutzername, long assessmentID, AssessmentTyp typ) {
        String sql = "UPDATE Assessment SET abgeschlossen=True " +
                "WHERE benutzername=:benutzername AND assessmentID=:assessmentID AND typ=:typ";
        return entityTemplate
                .getDatabaseClient()
                .sql(sql)
                .bind("benutzername", benutzername)
                .bind("assessmentID", assessmentID)
                .bind("typ", typ.name())
                .fetch()
                .rowsUpdated();
    }

    /**
     * Inserts results for each szenario for an assessment of an user
     * Inserts are done reactively and separate to encourage concurrency of the insert streams
     *
     * @return list of independent Monos containing amount of rows updated for each insert which
     * should be 1 if successful
     */
    public ArrayList<Mono<Integer>> insertAssessmentResults(String benutzername, long assessmentID
            , AssessmentTyp typ, List<SzenarioErgebnis> antworten) {
        String sql = "INSERT benutzer_beantwortet_szenario (benutzername, assessmentID, typ, szenarioID, korrekt)" +
                "VALUES (:benutzername, :assessmentID, :typ, :szenarioID, :korrekt)";


        ArrayList<Mono<Integer>> responses = new ArrayList<>();
        antworten.forEach(szenarioErgebnis -> {
                    responses.add(entityTemplate
                            .getDatabaseClient()
                            .sql(sql)
                            .bind("benutzername", benutzername)
                            .bind("assessmentID", assessmentID)
                            .bind("typ", typ.name())
                            .bind("szenarioID", szenarioErgebnis.getSzenarioID())
                            .bind("korrekt", szenarioErgebnis.isKorrekt())
                            .fetch()
                            .rowsUpdated());
                }
        );
        return responses;
    }

    /**
     * Accesses all stored assessments of type training
     * @param max maximum amount of trainings to return
     * @return assessments ordered from new to old
     */
    public List<Assessment> getAllTrainingsAssessments(String benutzername, Optional<Integer> max) {
        Query query = Query.query(where("benutzername")
                .is(benutzername)
                .and("typ")
                .in(AssessmentTyp.VORTRAINING.name(), AssessmentTyp.NACHTRAINING.name()))
                .sort(Sort.by("assessmentID").descending().and(Sort.by("typ").descending()));

        if (max.isPresent()) {
            //2 assessments per training
            max = Optional.of(max.get() * 2);
        }

        return getAllAssessments(max, query);
    }

    /**
     * Accesses all stored assessments of type pruefung
     * @param max maximum amount of trainings to return
     * @return assessments ordered from new to old
     */
    public List<Assessment> getAllPruefungsAssessments(String benutzername, Optional<Integer> max) {
        Query query = Query.query(where("benutzername")
                .is(benutzername)
                .and("typ")
                .in(AssessmentTyp.PRUEFUNG.name()))
                .sort(Sort.by("assessmentID").descending());

        return getAllAssessments(max, query);
    }

    /**
     * Executes the given query on the Assessment table of the database
     */
    private List<Assessment> getAllAssessments(Optional<Integer> max, Query query) {
        if (max.isPresent()) {
            query = query.limit(max.get());
        }

        return entityTemplate
                .select(query, Assessment.class)
                .collectList()
                .block();
    }

    /**
     * Access a specific assessment from the database
     */
    public Assessment getAssessment(String benutzername, long assessmentID, AssessmentTyp typ) {
        Assessment assessment = entityTemplate
                .select(Assessment.class)
                .matching(Query.query(where("benutzername")
                        .is(benutzername)
                        .and("assessmentID")
                        .is(assessmentID).and("typ").is(typ.name())))
                .one()
                .block();

        if (assessment == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "assessment not found");
        }
        return assessment;
    }

    /**
     * Access the results for each szenario within a specific assessment
     */
    public List<SzenarioErgebnis> getSzenarioResultsOfAssessment(String benutzername, long assessmentID, AssessmentTyp typ) {
        return entityTemplate
                .select(SzenarioErgebnis.class)
                .matching(Query.query(
                        where("benutzername")
                                .is(benutzername)
                                .and("assessmentID")
                                .is(assessmentID)
                                .and("typ")
                                .is(typ.name())))
                .all()
                .collectList()
                .block();
    }
}
