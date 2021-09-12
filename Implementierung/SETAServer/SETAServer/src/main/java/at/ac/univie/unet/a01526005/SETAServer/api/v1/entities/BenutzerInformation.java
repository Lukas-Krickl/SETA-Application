package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

/**
 * Entity mapping to the User table of the database
 */
@Table("User")
public class BenutzerInformation {
    @Id
    private String benutzername;
    private String vorname;
    private String nachname;
    private String rolle;

    public BenutzerInformation(String benutzername, String vorname, String nachname, String rolle) {
        this.benutzername = benutzername;
        this.vorname = vorname;
        this.nachname = nachname;
        this.rolle = rolle;
    }

    public String getBenutzername() {
        return benutzername;
    }

    public String getVorname() {
        return vorname;
    }

    public String getNachname() {
        return nachname;
    }

    public String getRolle() {
        return rolle;
    }
}
