package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("benutzer_beantwortet_szenario")
public class SzenarioErgebnis {
    @Id
    @Column("szenarioID")
    private long szenarioID;
    private boolean korrekt;

    public SzenarioErgebnis(long szenarioID, boolean korrekt) {
        this.szenarioID = szenarioID;
        this.korrekt = korrekt;
    }

    public long getSzenarioID() {
        return szenarioID;
    }

    public boolean isKorrekt() {
        return korrekt;
    }
}
