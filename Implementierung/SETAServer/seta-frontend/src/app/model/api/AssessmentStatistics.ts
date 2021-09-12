import { AssessmentAbgeschlossen } from "./AssessmentAbgeschlossen";

export interface AssessmentStatistics extends AssessmentAbgeschlossen {
    korrekt: number, 
    inkorrekt: number
}