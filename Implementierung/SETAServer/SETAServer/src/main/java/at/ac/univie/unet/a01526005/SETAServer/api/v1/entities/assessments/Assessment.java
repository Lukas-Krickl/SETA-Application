package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

/**
 * Entity mapped to the Assessment table of the database
 * Database key comprises of the assessmentID and the typ
 */
@Table("Assessment")
public class Assessment {
    @Id
    @Column("assessmentID")
    private long assessmentID;
    private AssessmentTyp typ;
    private boolean abgeschlossen;
    private LocalDateTime zeitpunkt;

    public Assessment(long assessmentID, AssessmentTyp typ, boolean abgeschlossen, LocalDateTime zeitpunkt) {
        this.assessmentID = assessmentID;
        this.typ = typ;
        this.abgeschlossen = abgeschlossen;
        this.zeitpunkt = zeitpunkt;
    }

    public long getAssessmentID() {
        return assessmentID;
    }

    public AssessmentTyp getTyp() {
        return typ;
    }

    public boolean isAbgeschlossen() {
        return abgeschlossen;
    }

    public LocalDateTime getZeitpunkt() {
        return zeitpunkt;
    }
}
