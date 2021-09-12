package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table
public class Thema {
    @Id
    private long themanummer;
    private String titel;

    public Thema(long themanummer, String titel) {
        this.themanummer = themanummer;
        this.titel = titel;
    }

    public long getThemanummer() {
        return themanummer;
    }

    public String getTitel() {
        return titel;
    }
}
