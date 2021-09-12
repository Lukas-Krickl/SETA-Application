import { MCFrageBeantwortet } from "./szenarien/MCFrageBeantwortet";
import { ZuordnungBeantwortet } from "./szenarien/ZuordnungBeantwortet";

export class Training {
    assessmentID: number;
    vortrainingSzenarien: number[];
    nachtrainingSzenarien: number[];
    aktuellesSzenario: number;
    vortrainingBeantwortet: Array<MCFrageBeantwortet | ZuordnungBeantwortet>;
    nachtrainingBeantwortet: Array<MCFrageBeantwortet | ZuordnungBeantwortet>;

    constructor(assessmentID: number, vortrainingSzenarien: number[], nachtrainingSzenarien: number[]) {
        this.assessmentID = assessmentID;
        this.vortrainingSzenarien = vortrainingSzenarien;
        this.nachtrainingSzenarien = nachtrainingSzenarien;
        this.aktuellesSzenario = 0;
        this.vortrainingBeantwortet = Array(vortrainingSzenarien.length);
        this.nachtrainingBeantwortet = Array(nachtrainingSzenarien.length);
    }

    getVortrainingSzenarioById(id: number): MCFrageBeantwortet | ZuordnungBeantwortet | undefined {
        for (let frage of this.vortrainingBeantwortet) {
            if (frage !== undefined && frage.szenarioID === id) {
                return frage;
            }
        }
        return undefined;
    }

    getNachtrainingSzenarioById(id: number): MCFrageBeantwortet | ZuordnungBeantwortet | undefined {
        for (let frage of this.nachtrainingBeantwortet) {
            if (frage !== undefined && frage.szenarioID === id) {
                return frage;
            }
        }
        return undefined;
    }
}