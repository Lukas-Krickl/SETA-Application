package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.MCFrage;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.SzenarioRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class SzenarioControllerTest {
    private static SzenarioController szenarioController;
    private static SzenarioRepository repository;

    @BeforeAll
    static void beforeAll() {
        repository = Mockito.mock(SzenarioRepository.class);
        szenarioController = new SzenarioController(repository);
    }

    @Test
    void antwortenOrdered_shuffle_antwortenShuffled() {
        ArrayList<MCFrage.Antwort> antworten = new ArrayList<>();
        antworten.add(new MCFrage.Antwort(1, "text1", false));
        antworten.add(new MCFrage.Antwort(2, "text2", true));
        antworten.add(new MCFrage.Antwort(3, "text3", false));
        antworten.add(new MCFrage.Antwort(4, "text4", true));
        antworten.add(new MCFrage.Antwort(5, "text5", false));

        MCFrage szenario = new MCFrage(1, 1, 1, "frage1", "");
        szenario.setAntworten(new ArrayList<>(antworten));

        MCFrage shuffled = (MCFrage) ReflectionTestUtils
                .invokeMethod(szenarioController, "shuffleSzenarioAntworten", szenario);

        int similar = 0;
        for (int i = 0; i< antworten.size(); i++) {
            if (shuffled.getAntworten().get(i).getAntwortID() == antworten.get(i).getAntwortID()) {
                similar++;
            }
        }

        assertTrue(similar <4);
    }
}