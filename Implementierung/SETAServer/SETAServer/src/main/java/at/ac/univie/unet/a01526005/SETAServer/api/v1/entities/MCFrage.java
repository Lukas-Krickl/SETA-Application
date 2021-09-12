package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Table("mc_szenario_view")
public class MCFrage extends Szenario {
    private String frage;
    private String bild_url;
    @Transient
    private List<Antwort> antworten;

    public MCFrage(long kapitelnummer, long themanummer, long szenarioID, String frage, String bild_url) {
        super(kapitelnummer, themanummer, szenarioID, "MCSzenario");
        this.frage = frage;
        this.bild_url = bild_url == null ? "" : bild_url;
    }

    @Table("MC_Antwort")
    public static class Antwort {
        @Id
        @Column("antwortID")
        private long antwortID;
        private String text;
        private boolean korrekt;

        public Antwort(long antwortID, String text, boolean korrekt) {
            this.antwortID = antwortID;
            this.text = text;
            this.korrekt = korrekt;
        }

        public long getAntwortID() {
            return antwortID;
        }

        public String getText() {
            return text;
        }

        public boolean isKorrekt() {
            return korrekt;
        }
    }

    public void setAntworten(List<Antwort> antworten) {
        this.antworten = antworten;
    }

    public String getFrage() {
        return frage;
    }

    public String getBild_url() {
        return bild_url;
    }

    public List<Antwort> getAntworten() {
        return antworten;
    }
}
