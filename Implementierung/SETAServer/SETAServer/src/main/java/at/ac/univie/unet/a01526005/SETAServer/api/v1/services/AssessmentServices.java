package at.ac.univie.unet.a01526005.SETAServer.api.v1.services;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.AssessmentTyp;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.TrainingSubmission;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.SzenarioErgebnis;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

@Service
public class AssessmentServices {

    @Autowired
    private AssessmentRepository assessmentRepository;

    /**
     * Tries to set the first assessment of the training to complete anf if it fails a exception is thrown.
     * After checking that given ids are valid the inserts proceed, with updating the second assessment and
     * inserting user answers for both
     *
     * @param benutzername username
     * @param assessmentID assessment to complete
     * @param ergebnis     answers sent by the user
     */
    public void completeTraining(String benutzername, long assessmentID, TrainingSubmission ergebnis) {
        Integer assessmentRowsUpdated = assessmentRepository
                .setAssessmentCompleted(benutzername, assessmentID, AssessmentTyp.VORTRAINING)
                .block();

        if (assessmentRowsUpdated == null || assessmentRowsUpdated != 1) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "benutzername or assessmentID not found");
        }

        ArrayList<Mono<Integer>> rowsModified = new ArrayList<>();

        rowsModified.add(assessmentRepository
                .setAssessmentCompleted(benutzername, assessmentID, AssessmentTyp.NACHTRAINING));

        rowsModified.addAll(assessmentRepository.insertAssessmentResults(benutzername, assessmentID
                , AssessmentTyp.VORTRAINING, ergebnis.getVortraining()));
        rowsModified.addAll(assessmentRepository.insertAssessmentResults(benutzername, assessmentID
                , AssessmentTyp.NACHTRAINING, ergebnis.getNachtraining()));

        for (Mono<Integer> response : rowsModified) {
            Integer rowsInserted = response.block();
            if (rowsInserted == null || rowsInserted != 1) {
                throw new RuntimeException("Could not store answer for assessment");
            }
        }
    }

    /**
     * Tries to set the assessment of to complete and if it fails a exception is thrown.
     * After checking that given ids are valid, the inserts proceed with
     * inserting user answers
     *
     * @param benutzername username
     * @param assessmentID assessment to complete
     * @param ergebnis     answers sent by the user
     */
    public void completePruefung(String benutzername, long assessmentID, List<SzenarioErgebnis> ergebnis) {
        //set assessment to completed
        Integer assessmentRowsModified = assessmentRepository
                .setAssessmentCompleted(benutzername, assessmentID, AssessmentTyp.PRUEFUNG)
                .block();

        //check for errors and then proceed
        if (assessmentRowsModified == null || assessmentRowsModified != 1) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "benutzername or assessmentID not found");
        }

        // insert szenario answers
        ArrayList<Mono<Integer>> resultInserts = assessmentRepository
                .insertAssessmentResults(benutzername, assessmentID, AssessmentTyp.PRUEFUNG, ergebnis);

        for (Mono<Integer> response : resultInserts) {
            Integer rowsInserted = response.block();
            if (rowsInserted == null || rowsInserted != 1) {
                throw new RuntimeException("Could not store answer for assessment");
            }
        }
    }

}
