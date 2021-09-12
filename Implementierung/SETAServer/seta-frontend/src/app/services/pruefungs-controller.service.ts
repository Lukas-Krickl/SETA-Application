import { Injectable } from '@angular/core';
import { ApiSzenarioAntwort } from '../model/api/ApiSzenarioAntwort';
import { AssessmentResult } from '../model/api/AssessmentResult';
import { AssessmentNavigation } from '../model/assessmentNavigation';
import { Pruefung } from '../model/Pruefung';
import { MCFrage } from '../model/szenarien/MCFrage';
import { MCFrageBeantwortet } from '../model/szenarien/MCFrageBeantwortet';
import { Zuordnung } from '../model/szenarien/Zuordnung';
import { ZuordnungBeantwortet } from '../model/szenarien/ZuordnungBeantwortet';
import { PruefungsPhase } from '../pages/pruefung/PruefungsPhasen';
import { AssessmentApiClientService } from './assessment-api-client.service';
import { ModelConverterService } from './model-converter.service';
import { TypeCheckService } from './type-check.service';


/**
 * Controller service for pruefungs page component. 
 * Packaged into a own service to utilize lazy loading
 * 
 * pruefung has 3 phases: beendet, pruefung, feedback 
 */
@Injectable({
  providedIn: 'root'
})
export class PruefungsControllerService {
  pruefung: Pruefung = new Pruefung(-1, []); // dummy pruefung to not having to check undefined all the time
  phase: PruefungsPhase = PruefungsPhase.Beendet;

  /**
   * currently displayed scenario
   * bound to the Input of the assessment component
   */
  szenario?: MCFrage | Zuordnung;
  
  /**
   * set with user selected answeres of the currently displayed MC szenario (if a mc szenario is displayed)
   * numbers in set are the antwortIDs of the selected answers
   * bound to the Input of the assessment component
   */
  mcAntwortSelected: Set<number> = new Set();

  /**
   * user selected answeres of the currently displayed zuordnung (if one is displayed)
   * eintragID mapped to begriff as string
   */
  zuordnungsAuswahl: Map<number, string> = new Map();

  /**
   * list of szenarien with an user answer, (true: is answered, false: is not answered)
   * index refers to index of pruefung.enthalteneSzenarien, where the szenarioID is stored
   */
  szenarioFortschritt?: boolean[];
  
  /**
   * list of szenario results for the feedback phase. true is correctly answered false is incorrect
   * index refers to index of pruefung.enthalteneSzenarien, where the szenarioID is stored
   */
  szenarioResults?: boolean[];
  exitBtnText: string = "Abgeben";
  confirmBtnText: string = "Weiter";

  /**
   * Assessmentresult object with the pruefung result
   * bound to the Input at the pruefung result component
   */
  pruefungsResult!: AssessmentResult;


  constructor(
    private apiClient: AssessmentApiClientService,
    public typeCheck: TypeCheckService,
    private modelConverter: ModelConverterService) { }

  /**
   * initiate a new pruefung and configure all data for the assessment component
   */
  startPruefung() {
    this.apiClient.startPruefungRequest().subscribe(data => {
      this.pruefung = new Pruefung(
        (data.assessmentID as number),
        (data.szenarien as number[])
      );
      console.log("pruefung started with szenarien: " + this.pruefung.enthalteneSzenarien);
      
      this.exitBtnText = "Abgeben";
      this.confirmBtnText = "Weiter";
      this.phase = PruefungsPhase.Pruefung;
      this.szenarioFortschritt = [];
      for (let i = 0; i < this.pruefung.enthalteneSzenarien.length; i++) {
        this.szenarioFortschritt.push(false);
      }

      this.setAktuellesSzenario();
    });
  }


  /**
   * turn in this pruefung and switch to feedback phase
   */
  submitPruefung() {
    if (this.phase == PruefungsPhase.Pruefung) {
      let results = this.modelConverter.convertAssessmentToResults(this.pruefung.enthalteneSzenarien, this.pruefung.szenarienBeantwortet);

      this.apiClient.submitPruefungRequest(this.pruefung.assessmentID, results)
        .subscribe(() => console.log("pruefung was submit"));
    
      this.setPruefungResult(results);
      this.setSzenarioResult(results);
      this.szenarioFortschritt = undefined;
      this.exitBtnText = "Beenden";
      this.phase = PruefungsPhase.Feedback;
    }
  }

  setPruefungResult(results: ApiSzenarioAntwort[]){
    this.pruefungsResult = {
      assessmentID: this.pruefung.assessmentID,
      abgeschlossen: true,
      typ: "PRUEFUNG",
      zeitpunkt: "---",
      szenarien: results
    }
  }

  setSzenarioResult(results: ApiSzenarioAntwort[]){
    this.szenarioResults = [];
    for(let szenarioID of this.pruefung.enthalteneSzenarien) {
      for (let result of results) {
        if(result.szenarioID === szenarioID) {
          this.szenarioResults.push(result.korrekt);
        }
      }
    }
    if (this.szenarioResults.length !== results.length) {
      throw new Error("pruefungs result and szenarios didn't match");
    }
  }

  /**
   * load the currently selected szenario into the assessment component
   * if a szenario isn't stored in a local variable yet, request it from the api
   */
  setAktuellesSzenario() {
    console.log("loading szenario");

    let szenarioID = this.pruefung.enthalteneSzenarien[this.pruefung.aktuellesSzenario];
    let storedSzenario = this.pruefung.getSzenarioById(szenarioID);

    if (storedSzenario !== undefined) {
      this.loadSzenarioWithAnswers(storedSzenario);
      console.log("stored szenario was loaded");

    } else {
      this.apiClient.requestSzenario(szenarioID).subscribe(
        (szenario: MCFrage | Zuordnung) => {
          this.szenario = szenario;
          this.mcAntwortSelected = new Set();
          this.zuordnungsAuswahl = new Map();
          console.log("szenario received: " + szenario.szenarioID);

        }
      );
    }
  }

  /**
   * configure the assessment component with the given szenario 
   */
  loadSzenarioWithAnswers(szenario: MCFrageBeantwortet | ZuordnungBeantwortet) {
    this.szenario = szenario;
    if (this.typeCheck.isSzenarioMCFrageBeantwortet(szenario)) {
      this.mcAntwortSelected = szenario.ausgewaehlt;
      this.zuordnungsAuswahl = new Map();
    } else {
      this.mcAntwortSelected = new Set();
      this.zuordnungsAuswahl = szenario.zugeordnet;
    }
  }

  /**
   * store the given szenario answered and select the following szenario
   * @param answer map with eintragIDs and selected begriffe if it is a zuordnung, set with selected antwortIDs on a MCFrage 
   */
  answerCurrentAndNext(answer: Map<number, string> | Set<number>) {
    this.storeSzenarioAnswer(answer);
    this.pruefung.aktuellesSzenario++;
    this.setAktuellesSzenario();
  }

  /**
   * store the given szenario answered and select requested szenario
   * @param szenarioNav 
   */
  answerCurrentAndSelect(szenarioNav: AssessmentNavigation) {
    this.storeSzenarioAnswer(szenarioNav.answer);
    this.pruefung.aktuellesSzenario = szenarioNav.nextSzenarioIndex;
    this.setAktuellesSzenario();
  }

  /**
   * actually store the given answered to the selected szenario
   */
  private storeSzenarioAnswer(answer: Map<number, string> | Set<number>) {
    if (answer instanceof Set && this.typeCheck.isSzenarioMCFrage(this.szenario)) {
      this.pruefung.szenarienBeantwortet[this.pruefung.aktuellesSzenario] = this.createMCFrageBeantwortet(answer, this.szenario);

    } else if (answer instanceof Map && this.typeCheck.isSzenarioZuordnung(this.szenario)) {
      this.pruefung.szenarienBeantwortet[this.pruefung.aktuellesSzenario] = this.createZuordnungBeantwortet(answer, this.szenario);
    }

    if (this.szenarioFortschritt !== undefined && answer.size !== 0) {
      console.log("store szenario answer, its size is: " + answer.size);

      this.szenarioFortschritt[this.pruefung.aktuellesSzenario] = true;
    }
  }

  private createMCFrageBeantwortet(userAntwort: Set<number>, szenario: MCFrage): MCFrageBeantwortet {
    return {
      szenarioID: szenario.szenarioID,
      kapitelnummer: szenario.kapitelnummer,
      themanummer: szenario.themanummer,
      typ: szenario.typ,
      frage: szenario.frage,
      bild_url: szenario.bild_url,
      antworten: szenario.antworten,
      ausgewaehlt: userAntwort
    };
  }

  private createZuordnungBeantwortet(userAntwort: Map<number, string>, szenario: Zuordnung): ZuordnungBeantwortet {

    return {
      szenarioID: szenario.szenarioID,
      kapitelnummer: szenario.kapitelnummer,
      themanummer: szenario.themanummer,
      typ: szenario.typ,
      anweisung: szenario.anweisung,
      eintraege: szenario.eintraege,
      zugeordnet: userAntwort
    }
  }

  /**
   * at pruefungs phase, anwer current szenario and select next
   * at feedback phase just load next szenario
   */
  confirmBtnClicked(event: Map<number, string> | Set<number>) {
    if (this.phase == PruefungsPhase.Pruefung) {
      //if at last szenario, submit pruefung
      if (this.pruefung.aktuellesSzenario === this.pruefung.enthalteneSzenarien.length - 1) {
        this.storeSzenarioAnswer(event);
        this.submitPruefung()

      } else {
        this.answerCurrentAndNext(event)
      }
    } else if (this.phase == PruefungsPhase.Feedback) {
      this.pruefung.aktuellesSzenario = (this.pruefung.aktuellesSzenario+1)%this.pruefung.enthalteneSzenarien.length;
      this.setAktuellesSzenario();
    }
  }

  /**
   * answer current szenario and submit pruefung 
   */
  exitBtnClicked(event: Map<number, string> | Set<number>) {
    if (this.phase == PruefungsPhase.Pruefung) {
      this.storeSzenarioAnswer(event);
      this.submitPruefung()
    } else if (this.phase == PruefungsPhase.Feedback) {
      this.pruefungBeenden();
    }
  }

  /**
   * called when the szenario navbar at the assessment component is clicked
   */
  chooseSzenario(szenarioIndex: AssessmentNavigation) {
    if (this.phase == PruefungsPhase.Pruefung) {
      this.answerCurrentAndSelect(szenarioIndex);

    } else if (this.phase == PruefungsPhase.Feedback) {
      this.pruefung.aktuellesSzenario = szenarioIndex.nextSzenarioIndex;
      this.setAktuellesSzenario();
      console.log("aktuelle szenario index is: " + this.pruefung.aktuellesSzenario);
    }
  }

  /**
   * display the selected szenario 
   */
  showSzenarioResultWithId(szenarioID:number){
    for (let i = 0; i< this.pruefung.enthalteneSzenarien.length; i++) {
      if (this.pruefung.enthalteneSzenarien[i] === szenarioID) {
        this.pruefung.aktuellesSzenario = i;
      }
    }
    this.setAktuellesSzenario();
    console.log("aktuelle szenario index is: " + this.pruefung.aktuellesSzenario);
  }


  /**
   * reset all values for a new pruefung
   */
  private pruefungBeenden(){
    this.szenario = undefined;
    this.mcAntwortSelected = new Set();
    this.zuordnungsAuswahl = new Map();
    this.szenarioFortschritt = undefined;
    this.szenarioResults = undefined;
    this.exitBtnText = "Abgeben";
    this.phase = PruefungsPhase.Beendet;
  }
}
