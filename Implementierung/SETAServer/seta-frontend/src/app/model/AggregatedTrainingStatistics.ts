import { AssessmentStatistics } from "./api/AssessmentStatistics";

export interface AggregatedTrainingStatistics {
    vortraining: AssessmentStatistics,
    nachtraining: AssessmentStatistics,
    
}