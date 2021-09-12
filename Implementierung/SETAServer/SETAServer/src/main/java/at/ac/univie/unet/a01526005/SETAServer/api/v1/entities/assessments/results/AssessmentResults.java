package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.Assessment;
import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.AssessmentTyp;

import java.time.LocalDateTime;
import java.util.List;

/**
 * A completed assessment with all results of the user answered szenarien
 */
public class AssessmentResults extends Assessment {
    private List<SzenarioErgebnis> szenarien;

    public AssessmentResults(long assessmentID, AssessmentTyp typ, boolean abgeschlossen, LocalDateTime zeitpunkt, List<SzenarioErgebnis> szenarien) {
        super(assessmentID, typ, abgeschlossen, zeitpunkt);
        this.szenarien = szenarien;
    }

    public static AssessmentResults fromAssessment(Assessment assessment, List<SzenarioErgebnis> szenarien) {
        return new AssessmentResults(assessment.getAssessmentID(), assessment.getTyp()
                , assessment.isAbgeschlossen(), assessment.getZeitpunkt(), szenarien);
    }

    public List<SzenarioErgebnis> getSzenarien() {
        return szenarien;
    }
}
