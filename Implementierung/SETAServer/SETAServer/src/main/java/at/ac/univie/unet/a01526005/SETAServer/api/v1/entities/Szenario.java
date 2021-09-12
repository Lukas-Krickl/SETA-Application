package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("Szenario")
public class Szenario {
    @Id
    @Column("szenarioID")
    private long szenarioID;
    private long kapitelnummer;
    private long themanummer;
    @Transient
    private final String TYP;

    public Szenario(long kapitelnummer, long themanummer, long szenarioID, String TYP) {
        this.kapitelnummer = kapitelnummer;
        this.themanummer = themanummer;
        this.szenarioID = szenarioID;
        this.TYP = TYP;
    }

    public long getKapitelnummer() {
        return kapitelnummer;
    }

    public long getThemanummer() {
        return themanummer;
    }

    public long getSzenarioID() {
        return szenarioID;
    }

    public String getTYP() {
        return TYP;
    }
}
