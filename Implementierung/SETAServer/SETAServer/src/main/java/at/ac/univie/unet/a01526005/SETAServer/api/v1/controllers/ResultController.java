package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.AssessmentTyp;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.Assessment;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.AssessmentResults;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.AssessmentStatistics;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.SzenarioErgebnis;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * A controller class with endpoints to retrieve results and statistics of previously
 * completed assessments
 */
@RestController
@RequestMapping("/api/v1")
public class ResultController {
    @Autowired
    private AssessmentRepository assessmentRepository;

    /**
     * Endpoint for the aggregated training szatistics of each assessment, that is part of a training
     * Assessments are ordered from new to old
     * @param maximumAmount optional uri parameter, specifies the maximum amount of trainings to return
     */
    @GetMapping("/users/{benutzername}/assessments/trainings")
    public List<AssessmentStatistics> getAllTrainingsResults(@PathVariable("benutzername") String benutzername
            , @RequestParam("max") Optional<Integer> maximumAmount) {

        List<Assessment> trainingAssessments = assessmentRepository
                .getAllTrainingsAssessments(benutzername, maximumAmount);

        return fillAssessmentWithStatistics(benutzername, trainingAssessments);
    }

    /**
     * endpoint to retrieve the detailed result of the given assessment
     * @return array of assessment results with vortraining at index 0 and nachtraining at 1
     */
    @GetMapping("/users/{benutzername}/assessments/trainings/{assessmentID}")
    public AssessmentResults[] getDetailedTrainingsResult(@PathVariable("benutzername") String benutzername
            , @PathVariable("assessmentID") long assessmentID) {

        //get vortraining
        Assessment vortraining = assessmentRepository
                .getAssessment(benutzername, assessmentID, AssessmentTyp.VORTRAINING);

        List<SzenarioErgebnis> vortrainingErgebnis = assessmentRepository
                .getSzenarioResultsOfAssessment(benutzername, assessmentID, AssessmentTyp.VORTRAINING);

        //get nachtraining
        Assessment nachtraining = assessmentRepository.
                getAssessment(benutzername, assessmentID, AssessmentTyp.NACHTRAINING);

        List<SzenarioErgebnis> nachtrainingErgebnis = assessmentRepository
                .getSzenarioResultsOfAssessment(benutzername, assessmentID, AssessmentTyp.NACHTRAINING);

        return new AssessmentResults[]{
                AssessmentResults.fromAssessment(vortraining, vortrainingErgebnis),
                AssessmentResults.fromAssessment(nachtraining, nachtrainingErgebnis)
        };
    }

    /**
     * Endpoint to retrieve all assessment statistics that are of type pruefung
     * @param max optional uri parameter, specifies the maximum amount of entries to return
     * @return
     */
    @GetMapping("/users/{benutzername}/assessments/pruefungen")
    public ArrayList<AssessmentStatistics> getAllPruefungsResults(@PathVariable("benutzername") String benutzername
            , @RequestParam Optional<Integer> max) {

        List<Assessment> assessments = assessmentRepository.getAllPruefungsAssessments(benutzername, max);
        return fillAssessmentWithStatistics(benutzername, assessments);
    }

    /**
     * Endpoint to retrieve the detailed result of the given pruefungs assessment
     */
    @GetMapping("/users/{benutzername}/assessments/pruefungen/{assessmentID}")
    public AssessmentResults getDetailedPruefungsResult(@PathVariable("benutzername") String benutzername
            , @PathVariable("assessmentID") long assessmentID) {
        Assessment pruefung = assessmentRepository.getAssessment(benutzername, assessmentID, AssessmentTyp.PRUEFUNG);
        List<SzenarioErgebnis> ergebnis = assessmentRepository
                .getSzenarioResultsOfAssessment(benutzername, assessmentID, AssessmentTyp.PRUEFUNG);
        return AssessmentResults.fromAssessment(pruefung, ergebnis);
    }

    /**
     * aggregate the results of the assessments to the Assessment statistics
     */
    private ArrayList<AssessmentStatistics> fillAssessmentWithStatistics(String benutzername, List<Assessment> assessments) {
        ArrayList<AssessmentStatistics> statistics = new ArrayList<>();
        for (Assessment assessment : assessments) {
            List<SzenarioErgebnis> szenarien = assessmentRepository
                    .getSzenarioResultsOfAssessment(benutzername, assessment.getAssessmentID(), assessment.getTyp());

            int[] countKorrektInkorrekt = countKorrektAndInkorrektSzenarien(szenarien);
            statistics.add(AssessmentStatistics.fromAssessment(assessment
                    , countKorrektInkorrekt[0], countKorrektInkorrekt[1]));
        }
        return statistics;
    }

    /**
     * counts the amount of korrekt and inkorrekt szenarien
     *
     * @param szenarien szenarien of an assessment
     * @return array of size 2 with [korrekt, inkorrekt] counted szenarien
     */
    private int[] countKorrektAndInkorrektSzenarien(List<SzenarioErgebnis> szenarien) {
        int[] count = {0, 0};

        for (SzenarioErgebnis ergebnis : szenarien) {
            count[ergebnis.isKorrekt() ? 0 : 1]++; //because an if statement is just to long ;) #theartofcoding
        }
        return count;
    }

}
