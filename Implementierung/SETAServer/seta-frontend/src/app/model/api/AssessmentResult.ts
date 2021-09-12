import { ApiSzenarioAntwort } from "./ApiSzenarioAntwort";
import { AssessmentAbgeschlossen } from "./AssessmentAbgeschlossen";

export interface AssessmentResult extends AssessmentAbgeschlossen {
    szenarien: ApiSzenarioAntwort[]
}