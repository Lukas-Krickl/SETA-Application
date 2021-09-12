import { MCFrageBeantwortet } from './szenarien/MCFrageBeantwortet'
import { ZuordnungBeantwortet } from './szenarien/ZuordnungBeantwortet'

export class Pruefung {
    assessmentID:number;
    enthalteneSzenarien: number[];
    aktuellesSzenario: number;
    szenarienBeantwortet: Array<MCFrageBeantwortet | ZuordnungBeantwortet>;

    constructor(assessmentID:number, szenarien:number[]){
        this.assessmentID = assessmentID;
        this.enthalteneSzenarien = szenarien;
        this.aktuellesSzenario = 0;
        this.szenarienBeantwortet = Array(szenarien.length); 
    }

    getSzenarioById(id: number): MCFrageBeantwortet | ZuordnungBeantwortet | undefined {
        for (let frage of this.szenarienBeantwortet) {
            if(frage !== undefined && frage.szenarioID === id) {
                return frage;
            }
        }
        return undefined;
    }
}
