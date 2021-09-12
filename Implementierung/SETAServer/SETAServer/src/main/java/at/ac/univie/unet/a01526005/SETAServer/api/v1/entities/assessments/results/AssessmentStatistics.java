package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.Assessment;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.AssessmentTyp;

import java.time.LocalDateTime;

/**
 * Assessment with aggregated results.
 * Contains the amount of correct and incorrect szenarien
 */
public class AssessmentStatistics extends Assessment {
    private int korrekt;
    private int inkorrekt;

    public AssessmentStatistics(long assessmentID, AssessmentTyp typ, boolean abgeschlossen, LocalDateTime zeitpunkt, int korrekt, int inkorrekt) {
        super(assessmentID, typ, abgeschlossen, zeitpunkt);
        this.korrekt = korrekt;
        this.inkorrekt = inkorrekt;
    }

    public int getKorrekt() {
        return korrekt;
    }

    public int getInkorrekt() {
        return inkorrekt;
    }

    public static AssessmentStatistics fromAssessment(Assessment assessment, int korrekt, int inkorrekt) {
        return new AssessmentStatistics(assessment.getAssessmentID(), assessment.getTyp()
                , assessment.isAbgeschlossen(), assessment.getZeitpunkt(), korrekt, inkorrekt);
    }
}
