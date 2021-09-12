package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;


@Table
public class Kapitel {
    @Id
    private long kapitelnummer;
    private String titel;
    private String beschreibung;

    public Kapitel(int kapitelnummer, String titel, String beschreibung) {
        this.kapitelnummer = kapitelnummer;
        this.titel = titel;
        this.beschreibung = beschreibung;
    }

    public long getKapitelnummer() {
        return kapitelnummer;
    }

    public String getTitel() {
        return titel;
    }

    public String getBeschreibung() {
        return beschreibung;
    }
}
