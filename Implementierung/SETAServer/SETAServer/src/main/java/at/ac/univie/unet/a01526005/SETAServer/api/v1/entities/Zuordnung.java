package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Table("zuordnung_szenario_view")
public class Zuordnung extends Szenario {
    private String anweisung;
    @Transient
    private List<Eintrag> eintraege;

    public Zuordnung(long kapitelnummer, long themanummer, long szenarioID, String anweisung) {
        super(kapitelnummer, themanummer, szenarioID, "Zuweisung");
        this.anweisung = anweisung;
    }

    @Table("Eintrag")
    public static class Eintrag {
        @Id
        @Column("eintragID")
        private long eintragID;
        private String begriff;
        private String beschreibung;

        public Eintrag(long eintragID, String begriff, String beschreibung) {
            this.eintragID = eintragID;
            this.begriff = begriff;
            this.beschreibung = beschreibung;
        }

        public long getEintragID() {
            return eintragID;
        }

        public String getBegriff() {
            return begriff;
        }

        public String getBeschreibung() {
            return beschreibung;
        }
    }

    public void setEintraege(List<Eintrag> eintraege) {
        this.eintraege = eintraege;
    }

    public String getAnweisung() {
        return anweisung;
    }

    public List<Eintrag> getEintraege() {
        return eintraege;
    }
}
