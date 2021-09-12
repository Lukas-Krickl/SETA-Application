package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments;

import java.util.List;

/**
 * A newly created pruefung. Contains the id of the assessment and a list of szenarioIDs
 * that should be completed in this pruefung
 */
public class PruefungInitialisierung {
    private long assessmentID;
    private List<Long> szenarien;

    public PruefungInitialisierung(long assessmentID, List<Long> szenarien) {
        this.assessmentID = assessmentID;
        this.szenarien = szenarien;
    }

    public long getAssessmentID() {
        return assessmentID;
    }

    public List<Long> getSzenarien() {
        return szenarien;
    }
}
