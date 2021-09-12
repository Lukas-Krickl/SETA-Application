package at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.MCFrage;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Szenario;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Zuordnung;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.relational.core.query.Criteria.where;

/**
 * A repository class to access szenario data from the database
 */
@Repository
public class SzenarioRepository {
    @Autowired
    private R2dbcEntityTemplate entityTemplate;

    /**
     * @return a list of szenarioIDs of all szenarien within the given kapitel
     */
    public List<Long> getSzenarienOfKapitel(long kapitelnummer) {
        return entityTemplate.getDatabaseClient()
                .sql("SELECT szenarioID FROM Szenario WHERE kapitelnummer = ?")
                .bind(0, kapitelnummer)
                .fetch()
                .all()
                .map(stringObjectMap -> (Long) stringObjectMap.get("szenarioID"))
                .collectList()
                .block();
    }

    /**
     *
     * @param limit maximum amount of szenarien to return
     * @return a list of szenarioIDs of all szenarien within the given kapitel
     */
    public List<Long> getSzenarienOfKapitel(long kapitelnummer, int limit) {
        return entityTemplate.getDatabaseClient()
                .sql("SELECT szenarioID FROM Szenario WHERE kapitelnummer = ? LIMIT ?")
                .bind(0, kapitelnummer)
                .bind(1, limit)
                .fetch()
                .all()
                .map(stringObjectMap -> (Long) stringObjectMap.get("szenarioID"))
                .collectList()
                .block();
    }

    /**
     *
     * @return a list of szenarioIDs of all szenarien within the given thema
     */
    public List<Long> getSzenarienOfThema(long kapitelnummer, long themanummer) {
        return entityTemplate.getDatabaseClient()
                .sql("SELECT szenarioID FROM Szenario WHERE kapitelnummer = ? AND themanummer = ?")
                .bind(0, kapitelnummer)
                .bind(1, themanummer)
                .fetch()
                .all()
                .map(stringObjectMap -> (Long) stringObjectMap.get("szenarioID"))
                .collectList()
                .block();
    }

    /**
     * Retrieves the szenario with the given id from the database
     * Returns a MCFrage or a Zuordnung szenario
     * When the szenario with the given id doesn't exist, a ResponseStatusException with 404 is thrown
     *
     * @param szenarioID id of the sceenario to retrieve
     * @return A
     */
    public Object getSzenarioById(long szenarioID) {
        Optional<MCFrage> mcFrage = getMCFrageByID(szenarioID);
        if (mcFrage.isPresent()) {
            return mcFrage.get();
        } else {
            Optional<Zuordnung> zuordnung = getZuordnungByID(szenarioID);
            if (zuordnung.isPresent()) {
                return zuordnung.get();
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Szenario not found");
    }

    private Optional<MCFrage> getMCFrageByID(long szenarioID) {
        Optional<MCFrage> mcFrage = entityTemplate
                .select(MCFrage.class)
                .matching(Query.query(where("szenarioID").is(szenarioID)))
                .one()
                .blockOptional();

        mcFrage.ifPresent(frage -> frage.setAntworten(getMCAntworten(szenarioID)));
        return mcFrage;
    }

    private List<MCFrage.Antwort> getMCAntworten(long szenarioID) {
        return entityTemplate
                .select(MCFrage.Antwort.class)
                .matching(Query.query(where("szenarioID").is(szenarioID)))
                .all()
                .collectList()
                .block();
    }


    private Optional<Zuordnung> getZuordnungByID(long szenarioID) {
        Optional<Zuordnung> zuordnung = entityTemplate
                .select(Zuordnung.class)
                .matching(Query.query(where("szenarioID").is(szenarioID)))
                .one()
                .blockOptional();


        zuordnung.ifPresent(z -> z.setEintraege(getEintraege(szenarioID)));
        return zuordnung;
    }

    /**
     * Retrieves all eintraege from an zuordnungs szenario. Existence of the Zuordnung should be
     * verified before calling this method
     *
     * @param szenarioID of the Zuordnung
     * @return list of Eintraege of the zuordnung
     */
    private List<Zuordnung.Eintrag> getEintraege(long szenarioID) {
        return entityTemplate
                .select(Zuordnung.Eintrag.class)
                .matching(Query.query(where("szenarioID").is(szenarioID)))
                .all()
                .collectList()
                .block();
    }
}
