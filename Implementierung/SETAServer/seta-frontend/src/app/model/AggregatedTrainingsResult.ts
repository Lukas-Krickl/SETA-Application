import { ApiSzenarioAntwort } from "./api/ApiSzenarioAntwort";

export interface AggregatedTrainingResult {
    kapitelnummer: number,
    kapitelname: string,
    assessmentID: number
    vortraining: {
        prozent: number,
        korrekt: number,
        total: number,
        antworten: ApiSzenarioAntwort[]
    },
    nachtraining: {
        prozent: number,
        korrekt: number,
        total: number,
        antworten: ApiSzenarioAntwort[]
    }
}