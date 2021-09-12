package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.MCFrage;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Zuordnung;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.SzenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;
import java.util.Random;

/**
 * Controller class with endpoints for retrieving szenarien
 */
@RestController
@RequestMapping("/api/v1")
public class SzenarioController {
    private SzenarioRepository repository;

    @Autowired
    public SzenarioController(SzenarioRepository repository) {
        this.repository = repository;
    }

    /**
     * Endpoint to retrieve a Szenario with the given id
     *
     * @return szenario of type {@link MCFrage} or {@link Zuordnung}
     */
    @GetMapping("/szenarien/{szenarioID}")
    public ResponseEntity<?> getSzenario(@PathVariable("szenarioID") long szenarioID) {
        Object szenario = repository.getSzenarioById(szenarioID);

        return ResponseEntity.ok(shuffleSzenarioAntworten(szenario));
    }

    /**
     * Returns a random szenario of the given kapitel
     */
    @GetMapping("/szenarien/uebung/kapitel/{kapitelnummer}")
    public ResponseEntity<?> getUebungsSzenario(@PathVariable("kapitelnummer") long kapitelnummer) {
        List<Long> szenarien = repository.getSzenarienOfKapitel(kapitelnummer);
        int randomSzenario = new Random().nextInt(szenarien.size());
        Object szenario = repository.getSzenarioById(szenarien.get(randomSzenario));
        return ResponseEntity.ok(shuffleSzenarioAntworten(szenario));
    }

    /**
     * shuffles the answeres of the given MCFrage or Zuordnung szenario
     * @return the szenario with shuffled answers
     */
    private Object shuffleSzenarioAntworten(Object szenario) {
        if (szenario instanceof MCFrage) {
            MCFrage mcFrage = (MCFrage) szenario;
            Collections.shuffle(mcFrage.getAntworten());
            return mcFrage;
        } else if (szenario instanceof Zuordnung) {
            Zuordnung zuordnung = (Zuordnung) szenario;
            Collections.shuffle(zuordnung.getEintraege());
            return zuordnung;
        }
        return szenario;
    }
}
