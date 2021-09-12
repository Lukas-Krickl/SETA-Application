package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments;

import java.util.List;

/**
 * A newly created Training
 * Contains lists of szenarioIDs of szenarien for each assessment that should be
 * answered in that assessment
 */
public class TrainingInitialisierung {
    private long assessmentID;
    private List<Long> vortraining;
    private List<Long> nachtraining;

    public TrainingInitialisierung(long assessmentID, List<Long> vortraining, List<Long> nachtraining) {
        this.assessmentID = assessmentID;
        this.vortraining = vortraining;
        this.nachtraining = nachtraining;
    }

    public long getAssessmentID() {
        return assessmentID;
    }

    public List<Long> getVortraining() {
        return vortraining;
    }

    public List<Long> getNachtraining() {
        return nachtraining;
    }
}
