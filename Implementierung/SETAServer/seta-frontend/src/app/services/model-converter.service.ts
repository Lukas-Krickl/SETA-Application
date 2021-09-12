import { Injectable } from '@angular/core';
import { ApiSzenarioAntwort } from '../model/api/ApiSzenarioAntwort';
import { MCFrageBeantwortet } from '../model/szenarien/MCFrageBeantwortet';
import { ZuordnungBeantwortet } from '../model/szenarien/ZuordnungBeantwortet';
import { TypeCheckService } from './type-check.service';

@Injectable({
  providedIn: 'root'
})
export class ModelConverterService {

  constructor(private typeCheck:TypeCheckService) { }

  /**
   * Converts a list of answered szenarien to the generic api objects for szenario answers 
   * @param enthalteneSzenarien array with szenarioIDs of the answered szenarien
   * @param antworten answers
   * @returns alist of api answer objects to be submitted to the api for a assessment
   */
  convertAssessmentToResults(enthalteneSzenarien: number[]
      , antworten: Array<MCFrageBeantwortet | ZuordnungBeantwortet>): ApiSzenarioAntwort[] {
    let szenarioAntworten: ApiSzenarioAntwort[] = [];
    for (let szenarioID of enthalteneSzenarien) {
      let szenario = this.findSzenarioById(szenarioID, antworten);
      if (this.typeCheck.isSzenarioMCFrageBeantwortet(szenario)) {
        szenarioAntworten.push({
          szenarioID: szenario.szenarioID,
          korrekt: this.isMCFrageKorrektBeantwortet(szenario)
        });
      } else if (this.typeCheck.isSzenarioZuordnungBeantwortet(szenario)) {
        szenarioAntworten.push({
          szenarioID: szenario.szenarioID,
          korrekt: this.isZuordnungKorrekt(szenario)
        });
      } else {
        szenarioAntworten.push({
          szenarioID: szenarioID,
          korrekt: false
        });
      }
    }

    return szenarioAntworten;
  }


  isMCFrageKorrektBeantwortet(szenario: MCFrageBeantwortet): boolean {
    for (let antwort of szenario.antworten) {
      if (antwort.korrekt && !szenario.ausgewaehlt.has(antwort.antwortID)) {
        return false;
      } else if (!antwort.korrekt && szenario.ausgewaehlt.has(antwort.antwortID)) {
        return false;
      }
    }
    return true;
  }

  isZuordnungKorrekt(szenario: ZuordnungBeantwortet): boolean {
    for (let eintrag of szenario.eintraege) {
      if (eintrag.begriff != szenario.zugeordnet.get(eintrag.eintragID)) {
        return false;
      }
    }
    return true;
  }

  /**
   * finds and returns the szenario by the given id, from the given list of szenarien
   * @param szenarioID szenarioID to search for
   * @param antworten szenarien to search in
   */
  private findSzenarioById(szenarioID: number, antworten: Array<MCFrageBeantwortet | ZuordnungBeantwortet>): MCFrageBeantwortet | ZuordnungBeantwortet | undefined {
    for (let frage of antworten) {
      if (frage !== undefined && frage.szenarioID === szenarioID) {
        return frage;
      }
    }
    return undefined;

  }
}
