package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Kapitel;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.PruefungInitialisierung;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.TrainingInitialisierung;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.TrainingSubmission;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.SzenarioErgebnis;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.AssessmentRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.KapitelRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.SzenarioRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.services.AssessmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Controller class with endpoints regarding assessments
 */
@RestController
@RequestMapping("/api/v1")
public class AssessmentController {
    /**
     * amount of szenarien per assessment in a training
     */
    @Value("${training.szenarien_per_assessment}")
    private int szenarienPerAssessment;

    /**
     * amount of szenarien for each kapitel in one pruefung
     */
    @Value("${pruefung.szenarien_per_kapitel}")
    private int szenarienPerKapitel;

    private SzenarioRepository szenarioRepository;

    private AssessmentRepository assessmentRepository;

    private AssessmentServices assessmentServices;

    private KapitelRepository kapitelRepository;


    @Autowired
    public AssessmentController(SzenarioRepository szenarioRepository,
                                AssessmentRepository assessmentRepository,
                                AssessmentServices assessmentServices,
                                KapitelRepository kapitelRepository) {
        this.szenarioRepository = szenarioRepository;
        this.assessmentRepository = assessmentRepository;
        this.assessmentServices = assessmentServices;
        this.kapitelRepository = kapitelRepository;
    }

    /**
     * Endpoint to create and store a new training for the given user and kapitel
     *
     * @return a newly created training
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users/{benutzername}/assessments/trainings/kapitel/{kapitelnummer}")
    public TrainingInitialisierung startTraining(@PathVariable("benutzername") String benutzername
            , @PathVariable("kapitelnummer") long kapitelnummer) {

        //get collection of szenarien for training
        List<Long> szenarien = szenarioRepository.getSzenarienOfKapitel(kapitelnummer, szenarienPerAssessment * 2);
        Collections.shuffle(szenarien);

        // create and store a new training
        long assessmentID = assessmentRepository.insertTraining(benutzername);

        return new TrainingInitialisierung(assessmentID
                , szenarien.subList(0, szenarien.size() / 2)
                , szenarien.subList(szenarien.size() / 2, szenarien.size()));
    }

    /**
     * Endpoint to complete a previously started training with the given result
     */
    @PutMapping("/users/{benutzername}/assessments/trainings/{assessmentID}")
    public void completeTraining(@PathVariable("benutzername") String benutzername
            , @PathVariable("assessmentID") long assessmentID
            , @RequestBody TrainingSubmission ergebnis) {
        assessmentServices.completeTraining(benutzername, assessmentID, ergebnis);
    }

    /**
     * Endpoint to create a and store a new pruefung.
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users/{benutzername}/assessments/pruefungen")
    public PruefungInitialisierung startPruefung(@PathVariable("benutzername") String benutzername) {
        //retrieve all kapitel
        List<Kapitel> allKapitel = kapitelRepository.getAllKapitel();

        //select and shuffle szenarien for each kapitel
        List<Long> szenarien = new ArrayList<>();
        for (Kapitel kapitel : allKapitel) {
            szenarien.addAll(szenarioRepository
                    .getSzenarienOfKapitel(kapitel.getKapitelnummer(), szenarienPerKapitel));
        }
        Collections.shuffle(szenarien);

        //create and store pruefung
        long assessmentID = assessmentRepository.insertPruefung(benutzername);

        return new PruefungInitialisierung(assessmentID, szenarien);
    }

    /**
     * Endpoint to complete a previously created pruefung with the given result
     */
    @PutMapping("/users/{benutzername}/assessments/pruefungen/{assessmentID}")
    public void completePruefung(@PathVariable("benutzername") String benutzername
            , @PathVariable("assessmentID") long assessmentID
            , @RequestBody List<SzenarioErgebnis> ergebnis) {
        assessmentServices.completePruefung(benutzername, assessmentID, ergebnis);
    }

}
