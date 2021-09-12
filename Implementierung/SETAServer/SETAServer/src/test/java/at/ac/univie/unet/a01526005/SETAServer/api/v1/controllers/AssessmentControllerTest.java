package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Kapitel;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.PruefungInitialisierung;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.TrainingInitialisierung;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.AssessmentRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.KapitelRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.SzenarioRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.services.AssessmentServices;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class AssessmentControllerTest {
    private static SzenarioRepository szenarioRepositoryMock;

    private static AssessmentRepository assessmentRepositoryMock;

    private static AssessmentServices assessmentServicesMock;

    private static KapitelRepository kapitelRepositoryMock;

    private static AssessmentController controller;

    private static final int szenarienPerAssessment = 8;
    private static final int szenarienPerKapitel = 8;

    @BeforeAll
    static void beforeAll() {
        szenarioRepositoryMock = Mockito.mock(SzenarioRepository.class);
        assessmentRepositoryMock = Mockito.mock(AssessmentRepository.class);
        assessmentServicesMock = Mockito.mock(AssessmentServices.class);
        kapitelRepositoryMock = Mockito.mock(KapitelRepository.class);
        controller = new AssessmentController(szenarioRepositoryMock,
                assessmentRepositoryMock, assessmentServicesMock, kapitelRepositoryMock);
        ReflectionTestUtils.setField(controller, "szenarienPerAssessment", szenarienPerAssessment);
        ReflectionTestUtils.setField(controller, "szenarienPerKapitel", szenarienPerKapitel);
    }

    @Test
    void startTraining_returnsValidTraining() {
        long assessmentID = 123;
        List<Long> szenarioIDs = generateSzenarioIDS(szenarienPerAssessment*2);
        Mockito.when(szenarioRepositoryMock.getSzenarienOfKapitel( 1, szenarienPerAssessment*2))
                .thenReturn(szenarioIDs);
        Mockito.when(assessmentRepositoryMock.insertTraining("testUser"))
                .thenReturn(assessmentID);

        TrainingInitialisierung training = controller.startTraining("testUser", 1);
        assertNotNull(training);
        assertEquals(assessmentID, training.getAssessmentID());
        assertTrue(szenarioIDs.containsAll(training.getVortraining()));
        assertTrue(szenarioIDs.containsAll(training.getNachtraining()));
        int totalSzenarienReturned = training.getVortraining().size() +
                training.getNachtraining().size();
        assertEquals(szenarioIDs.size(), totalSzenarienReturned);
    }

    @Test
    void startPruefung_returnsValidPruefung() {
        long assessmentID = 123;
        List<Long> szenarioIDs = generateSzenarioIDS(szenarienPerKapitel);
        List<Kapitel> testKapitel = generateTestKapitel();

        Mockito.when(kapitelRepositoryMock.getAllKapitel()).thenReturn(testKapitel);
        Mockito.when(szenarioRepositoryMock.getSzenarienOfKapitel( 1, szenarienPerKapitel))
                .thenReturn(szenarioIDs);
        Mockito.when(szenarioRepositoryMock.getSzenarienOfKapitel( 2, szenarienPerKapitel))
                .thenReturn(szenarioIDs);
        Mockito.when(assessmentRepositoryMock.insertPruefung("testUser")).thenReturn(assessmentID);

        PruefungInitialisierung pruefung = controller.startPruefung("testUser");
        assertNotNull(pruefung);
        assertEquals(assessmentID, pruefung.getAssessmentID());
        assertTrue(szenarioIDs.containsAll(pruefung.getSzenarien()));
        assertEquals(testKapitel.size()*szenarienPerKapitel, pruefung.getSzenarien().size());
    }

    private List<Long> generateSzenarioIDS(int amount){
        ArrayList<Long> szenarioIDs = new ArrayList<>();
        for(long i = 0; i < amount; i++) {
            szenarioIDs.add(i);
        }
        return szenarioIDs;
    }

    private List<Kapitel> generateTestKapitel(){
        List<Kapitel> testKapitel = new ArrayList<>();
        testKapitel.add(new Kapitel(1, "Kapitel 1", "kapitel 1 description"));
        testKapitel.add(new Kapitel(2, "Kapitel 2", "kapitel 2 description"));
        return testKapitel;
    }
}