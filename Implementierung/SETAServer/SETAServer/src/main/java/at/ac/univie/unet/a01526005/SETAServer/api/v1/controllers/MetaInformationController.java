package at.ac.univie.unet.a01526005.SETAServer.api.v1.controllers;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Kapitel;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.Thema;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.KapitelRepository;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.repositories.SzenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller class with endpoints regarding meta information about kapitel, themen and szenarien
 */
@RestController
@RequestMapping("/api/v1")
public class MetaInformationController {
    @Autowired
    private KapitelRepository kapitelRepository;

    @Autowired
    private SzenarioRepository szenarioRepository;

    @GetMapping("/kapitel")
    public List<Kapitel> getAllKapitel() {
        return kapitelRepository.getAllKapitel();
    }

    @GetMapping("/kapitel/{kapitelnummer}")
    public Kapitel getKapitel(@PathVariable("kapitelnummer") int kapitelnummer) {
        return kapitelRepository.getKapitel(kapitelnummer);
    }

    @GetMapping("kapitel/{kapitelnummer}/themen")
    public List<Thema> getSzenarien(@PathVariable("kapitelnummer") int kapitelnummer) {
        return kapitelRepository.getThemen(kapitelnummer);
    }

    @GetMapping("kapitel/{kapitelnummer}/themen/{themanummer}/szenarien")
    public List<Long> getSzenarien(@PathVariable("kapitelnummer") int kapitelnummer
            , @PathVariable("themanummer") int themanummer) {
        return szenarioRepository.getSzenarienOfThema(kapitelnummer, themanummer);
    }
}
