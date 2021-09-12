package at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments;

import at.ac.univie.unet.a01526005.SETAServer.api.v1.entities.assessments.results.SzenarioErgebnis;

import java.util.List;

/**
 * Wrapper class to submit the user answers for a training
 * (Pruefung is submit with just a list of SzenarioErgebnis)
 */
public class TrainingSubmission {
    private List<SzenarioErgebnis> vortraining;
    private List<SzenarioErgebnis> nachtraining;

    public TrainingSubmission(List<SzenarioErgebnis> vortraining, List<SzenarioErgebnis> nachtraining) {
        this.vortraining = vortraining;
        this.nachtraining = nachtraining;
    }

    public List<SzenarioErgebnis> getVortraining() {
        return vortraining;
    }

    public List<SzenarioErgebnis> getNachtraining() {
        return nachtraining;
    }
}
