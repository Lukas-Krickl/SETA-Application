import { Injectable } from '@angular/core';
import { AggregatedTrainingResult } from '../model/AggregatedTrainingsResult';
import { ApiSzenarioAntwort } from '../model/api/ApiSzenarioAntwort';
import { AssessmentNavigation } from '../model/assessmentNavigation';
import { MCFrage } from '../model/szenarien/MCFrage';
import { MCFrageBeantwortet } from '../model/szenarien/MCFrageBeantwortet';
import { Zuordnung } from '../model/szenarien/Zuordnung';
import { ZuordnungBeantwortet } from '../model/szenarien/ZuordnungBeantwortet';
import { Training } from '../model/Training';
import { TrainingsPhase } from '../pages/training/TrainingsPhase';
import { AssessmentApiClientService } from './assessment-api-client.service';
import { ModelConverterService } from './model-converter.service';
import { TypeCheckService } from './type-check.service';



/**
 * Controller for a training. Built as a service to utilise lazy loading 
 */
@Injectable({
  providedIn: 'root'
})
export class TrainingControllerService {
  /**
   * current of the 8 trainings pases
   */
  phase: TrainingsPhase = TrainingsPhase.Beendet;
  training: Training = new Training(-1, [], []);
  kapitelnummer: number = 0;
  showAssessmentScreen: boolean = false;

  assessmentConfirmBtnText: string = "";
  assessmentExitBtnText: string = "";

  /**
   * currently loaded szenario
   */
  currentSzenario?: MCFrage | Zuordnung;

  /**
   * user selected answers if the current szenario is MCFrage 
   */
  mcAntwortSelected: Set<number> = new Set();

  /**
   * user selected answers if current szenario is Zuordnung
   */
  zuordnungsAuswahl: Map<number, string> = new Map();

  /**
   * list of szenarien with an user answer, (true: is answered, false: is not answered)
   * index refers to index of the Training.vortrainingSzenarien or 
   * Training.nachtrainingSzenarien depending on the phase
   * array, where the szenarioID is stored
   */
  szenarioFortschritt?: boolean[];

  /**
   * list of szenario results for the feedback phase. true is correctly answered false is incorrect
   * index refers to index of the Training.vortrainingSzenarien or
   * Training.nachtrainingSzenarien depending on the phase
   * array, where the szenarioID is stored
   */
  szenarioResults?: boolean[];
  feedBackMode: boolean = false;

  /**
   * Assessmentresult object with the trainings result
   * bound to the Input at the training result component
   */
  trainingResult?: AggregatedTrainingResult;

  constructor(
    private apiClient: AssessmentApiClientService,
    private typeCheck: TypeCheckService,
    private modelConverter: ModelConverterService
  ) { }

  /**
   * initiate a new training with the first trainings phase
   */
  startTraining(kapitelnummer: string) {
    if (this.phase == TrainingsPhase.Beendet) {
      this.kapitelnummer = Number(kapitelnummer);

      //call api and init training
      this.apiClient.startTraining(this.kapitelnummer).subscribe(assessment => {
        this.training = new Training(assessment.assessmentID, assessment.vortraining, assessment.nachtraining);
        console.log("training successfully started: " + JSON.stringify(assessment));
        this.initAssessment(TrainingsPhase.Vortraining);
      });
    }
  }

  /**
   * submit the answers of both training assessments
   */
  private submitTraining() {
    let vortrainingResult = this.modelConverter
      .convertAssessmentToResults(this.training.vortrainingSzenarien, this.training.vortrainingBeantwortet);
    let nachtrainingResult = this.modelConverter
      .convertAssessmentToResults(this.training.nachtrainingSzenarien, this.training.nachtrainingBeantwortet);

    this.apiClient.submitTraining(this.training.assessmentID, vortrainingResult, nachtrainingResult)
      .subscribe(() => console.log("training result sent to server"));

    this.apiClient.getKapitel(this.kapitelnummer).subscribe(kapitel => {
      this.trainingResult = {
        kapitelnummer: this.kapitelnummer,
        kapitelname: kapitel.titel,
        assessmentID: this.training.assessmentID,
        vortraining: this.aggregateTrainingsResults(vortrainingResult),
        nachtraining: this.aggregateTrainingsResults(nachtrainingResult)
      };
      console.log("Training result was set");
    });
  }

  /**
   * initialize all values for a vortrainings or nachtrainingsAssessment
   * @param phase Vortraining or Nachtraining
   */
  initAssessment(phase: TrainingsPhase) {
    this.currentSzenario = undefined;
    let amountSzenarien: number = 0;
    if (phase == TrainingsPhase.Vortraining) {
      amountSzenarien = this.training.vortrainingSzenarien.length;
    } else if (phase == TrainingsPhase.Nachtraining) {
      amountSzenarien = this.training.nachtrainingSzenarien.length;
    }

    this.showAssessmentScreen = true;
    this.assessmentConfirmBtnText = "Weiter";
    this.assessmentExitBtnText = "Abgeben";

    this.szenarioFortschritt = [];
    for (let i = 0; i < amountSzenarien; i++) {
      this.szenarioFortschritt.push(false);
    }

    this.szenarioResults = undefined;
    this.feedBackMode = false;
    this.training.aktuellesSzenario = 0;

    this.setAktuellesSzenario(phase);
    this.phase = phase;
    console.log(phase + " initialized");
  }

  /**
   * initialize all values for a vortrainings or nachtrainings feedback phase
   * @param phase Vortraining or Nachtraining
   */
  private initAssessmentFeedback(phase: TrainingsPhase) {
    this.showAssessmentScreen = true;
    this.assessmentConfirmBtnText = "Weiter";
    this.assessmentExitBtnText = "zur nächsten Trainingsphase";
    this.szenarioFortschritt = undefined;
    this.szenarioResults = this.createSzenarioResult(phase);
    this.feedBackMode = true;
    this.training.aktuellesSzenario = 0;

    this.setAktuellesSzenario(phase);
    this.phase = phase;

    console.log(phase + " feedback initialized");
  }

  private initInhalte() {
    this.showAssessmentScreen = false;
    this.phase = TrainingsPhase.Inhalte;
  }

  /**
   * initialize all values for a uebungsszenario
   */
  initUebung() {
    this.showAssessmentScreen = true;
    this.assessmentConfirmBtnText = "Weiter";
    this.assessmentExitBtnText = "zu den Inhalten";
    this.szenarioFortschritt = undefined;
    this.szenarioResults = undefined;

    if (this.currentSzenario === undefined) {
      this.setNextUebungsSzenario();
    }
    this.phase = TrainingsPhase.Ueben;
  }

  private initEmpfehlung() {
    this.submitTraining();
    this.szenarioFortschritt = undefined;
    this.szenarioResults = undefined;
    this.assessmentConfirmBtnText = "Zurück";
    this.assessmentExitBtnText = "";
    this.feedBackMode = true;
    this.currentSzenario = undefined;
    this.showAssessmentScreen = false;
    this.phase = TrainingsPhase.Empfehlung;
  }

  /**
   * reset all values so a new training can be started
   */
  beenden(){
    this.phase = TrainingsPhase.Beendet;
    this.assessmentConfirmBtnText = "";
    this.assessmentExitBtnText = "";
    this.showAssessmentScreen = false;

    this.currentSzenario = undefined;
    this.mcAntwortSelected = new Set();
    this.zuordnungsAuswahl = new Map();
    this.szenarioFortschritt = undefined;
    this.szenarioResults = undefined;
    this.feedBackMode = false;
    this.trainingResult = undefined;
    
  }  

  /**
   * create a array with results for  the assessment of the given phase
   * values are true if the szeanrio at this index is correctly answered and false otherwise
   * indices refer to the vortrainingSzenarien or nachtrainingSzenarien array of the Training object, that contain the szenarioID
   * 
   */
  private createSzenarioResult(phase: TrainingsPhase): boolean[] {
    let results: ApiSzenarioAntwort[];
    let enthalteneSzenarien: number[];
    if (phase == TrainingsPhase.VortrainingFeedback) {
      enthalteneSzenarien = this.training.vortrainingSzenarien;
      results = this.modelConverter.convertAssessmentToResults(enthalteneSzenarien, this.training.vortrainingBeantwortet);

    } else if (phase == TrainingsPhase.NachtrainingFeedback) {
      enthalteneSzenarien = this.training.nachtrainingSzenarien;
      results = this.modelConverter.convertAssessmentToResults(enthalteneSzenarien, this.training.nachtrainingBeantwortet);

    } else {
      throw new Error("invalid  phase in creating results");
    }

    let szenarioResults: boolean[] = [];
    for (let szenarioID of enthalteneSzenarien) {
      for (let result of results) {
        if (result.szenarioID === szenarioID) {
          szenarioResults.push(result.korrekt);
        }
      }
    }
    if (szenarioResults.length !== results.length) {
      throw new Error("result and szenarios didn't match");
    }
    return szenarioResults;
  }

  confirmBtnClicked(antworten: Map<number, string> | Set<number>) {
    switch (this.phase) {
      case TrainingsPhase.Vortraining: this.assessmentConfirmed(antworten); break;
      case TrainingsPhase.Nachtraining: this.assessmentConfirmed(antworten); break;
      case TrainingsPhase.VortrainingFeedback: this.feedbackConfirmed(); break;
      case TrainingsPhase.NachtrainingFeedback: this.feedbackConfirmed(); break;
      case TrainingsPhase.Ueben: this.uebungConfirmed(); break;
      case TrainingsPhase.Empfehlung: this.backToEmpfehlung(); break;
    }
  }

  exitBtnClicked(antworten: Map<number, string> | Set<number>) {
    switch (this.phase) {
      case TrainingsPhase.Vortraining: this.assessmentExited(antworten); break;
      case TrainingsPhase.Nachtraining: this.assessmentExited(antworten); break;
      case TrainingsPhase.VortrainingFeedback: this.feedbackExited(); break;
      case TrainingsPhase.NachtrainingFeedback: this.feedbackExited(); break;
      case TrainingsPhase.Ueben: this.uebenExited(); break;
    }
  }

  szenarioNavClicked(target: AssessmentNavigation) {
    switch (this.phase) {
      case TrainingsPhase.Vortraining: this.assessmentSzenarioNavigation(target); break;
      case TrainingsPhase.Nachtraining: this.assessmentSzenarioNavigation(target); break;
      case TrainingsPhase.VortrainingFeedback: this.feedbackSzenarioNavigation(target.nextSzenarioIndex); break;
      case TrainingsPhase.NachtrainingFeedback: this.feedbackSzenarioNavigation(target.nextSzenarioIndex); break;
    }
  }

  /**
   * show the szenario with the given id on the assessment component
   */
  empfehlungSzenarioNavClicked(szenarioID:number) {
    let szenario = this.training.getNachtrainingSzenarioById(szenarioID);
    if (szenario === undefined ) {
      szenario = this.training.getVortrainingSzenarioById(szenarioID);
    }

    if (szenario !== undefined) {
      this.loadSzenarioWithAnswers(szenario);
      console.log("stored szenario was loaded");
      this.showAssessmentScreen = true;

    } else {
      this.apiClient.requestSzenario(szenarioID).subscribe(
        (szenario: MCFrage | Zuordnung) => {
          this.currentSzenario = szenario;
          this.mcAntwortSelected = new Set();
          this.zuordnungsAuswahl = new Map();
          console.log("szenario received: " + szenario.szenarioID);
          this.showAssessmentScreen = true;
        }
      );
    }
  }

  private backToEmpfehlung(){
    this.showAssessmentScreen = false;
    this.currentSzenario = undefined;
  }

  /**
   * confirm btn clicked in vor or nachtrainings assessment
   * @param antworten 
   */
  private assessmentConfirmed(antworten: Map<number, string> | Set<number>) {
    this.storeSzenarioAnswer(antworten);
    this.training.aktuellesSzenario++;
    if (this.phase == TrainingsPhase.Vortraining && this.training.aktuellesSzenario === this.training.vortrainingSzenarien.length) {
      this.initAssessmentFeedback(TrainingsPhase.VortrainingFeedback);

    } else if (this.phase == TrainingsPhase.Nachtraining && this.training.aktuellesSzenario === this.training.nachtrainingSzenarien.length) {
      this.initAssessmentFeedback(TrainingsPhase.NachtrainingFeedback);

    } else {
      this.setAktuellesSzenario(this.phase);
    }
  }

  private feedbackConfirmed() {
    if (this.phase == TrainingsPhase.VortrainingFeedback) {
      this.training.aktuellesSzenario = (this.training.aktuellesSzenario + 1) % this.training.vortrainingSzenarien.length;

    } else if (this.phase == TrainingsPhase.NachtrainingFeedback) {
      this.training.aktuellesSzenario = (this.training.aktuellesSzenario + 1) % this.training.nachtrainingSzenarien.length;
    }
    this.setAktuellesSzenario(this.phase);
  }

  private uebungConfirmed() {
    if (!this.feedBackMode) {
      this.feedBackMode = true;
    } else {
      this.feedBackMode = false;
      this.setNextUebungsSzenario();
    }
  }

  private assessmentExited(antworten: Map<number, string> | Set<number>) {
    this.storeSzenarioAnswer(antworten);
    if (this.phase == TrainingsPhase.Vortraining) {
      this.initAssessmentFeedback(TrainingsPhase.VortrainingFeedback);
    } else if (this.phase == TrainingsPhase.Nachtraining) {
      this.initAssessmentFeedback(TrainingsPhase.NachtrainingFeedback);
    }
  }

  private feedbackExited() {
    if (this.phase == TrainingsPhase.VortrainingFeedback) {
      this.currentSzenario = undefined;
      this.feedBackMode = false;
      this.initInhalte();

    } else if (this.phase == TrainingsPhase.NachtrainingFeedback) {
      this.initEmpfehlung();
    }
  }

  private uebenExited() {
    this.initInhalte();
  }

  private assessmentSzenarioNavigation(target: AssessmentNavigation) {
    this.storeSzenarioAnswer(target.answer);
    this.training.aktuellesSzenario = target.nextSzenarioIndex;
    this.setAktuellesSzenario(this.phase);
  }

  private feedbackSzenarioNavigation(szenarioIndex: number) {
    this.training.aktuellesSzenario = szenarioIndex;
    this.setAktuellesSzenario(this.phase);
  }

  private setNextUebungsSzenario(requestCount?: number): void {
    console.log("requested uebungsszenario");

    this.apiClient.requestUebungsszenario(this.kapitelnummer).subscribe(
      (szenario: MCFrage | Zuordnung) => {
        //if the new scenario is the same as the last one, request another one but max 10 times
        if (this.currentSzenario !== undefined && this.currentSzenario.szenarioID === szenario.szenarioID && requestCount !== 10) {
          this.setNextUebungsSzenario(requestCount === undefined ? 1 : requestCount + 1);
        } else {
          this.mcAntwortSelected = new Set();
          this.zuordnungsAuswahl = new Map();
          this.currentSzenario = szenario;
          console.log("uebungsszenario received: " + szenario.szenarioID);
        }
      }
    );
  }

  private setAktuellesSzenario(assessment: TrainingsPhase) {
    console.log("loading szenario");
    let storedSzenario: MCFrageBeantwortet | ZuordnungBeantwortet | undefined;
    let szenarioID: number;

    if (assessment == TrainingsPhase.Vortraining || assessment == TrainingsPhase.VortrainingFeedback) {
      szenarioID = this.training.vortrainingSzenarien[this.training.aktuellesSzenario];
      storedSzenario = this.training.getVortrainingSzenarioById(szenarioID);


    } else if (assessment == TrainingsPhase.Nachtraining || assessment == TrainingsPhase.NachtrainingFeedback) {
      szenarioID = this.training.nachtrainingSzenarien[this.training.aktuellesSzenario];
      storedSzenario = this.training.getNachtrainingSzenarioById(szenarioID);

    } else {
      throw new Error("Wanted to set aktuelles szenario, but assessment type was invalid");
    }

    if (storedSzenario !== undefined) {
      this.loadSzenarioWithAnswers(storedSzenario);
      console.log("stored szenario was loaded");

    } else {
      this.apiClient.requestSzenario(szenarioID).subscribe(
        (szenario: MCFrage | Zuordnung) => {
          this.currentSzenario = szenario;
          this.mcAntwortSelected = new Set();
          this.zuordnungsAuswahl = new Map();
          console.log("szenario received: " + szenario.szenarioID);

        }
      );
    }
  }


  private loadSzenarioWithAnswers(szenario: MCFrageBeantwortet | ZuordnungBeantwortet) {
    this.currentSzenario = szenario;
    if (this.typeCheck.isSzenarioMCFrageBeantwortet(szenario)) {
      this.mcAntwortSelected = szenario.ausgewaehlt;
      this.zuordnungsAuswahl = new Map();
    } else {
      this.mcAntwortSelected = new Set();
      this.zuordnungsAuswahl = szenario.zugeordnet;
    }
  }

  private storeSzenarioAnswer(answer: Map<number, string> | Set<number>) {
    if (this.phase == TrainingsPhase.Vortraining) {
      if (answer instanceof Set && this.typeCheck.isSzenarioMCFrage(this.currentSzenario)) {
        this.training.vortrainingBeantwortet[this.training.aktuellesSzenario] = this.createMCFrageBeantwortet(answer, this.currentSzenario);

      } else if (answer instanceof Map && this.typeCheck.isSzenarioZuordnung(this.currentSzenario)) {
        this.training.vortrainingBeantwortet[this.training.aktuellesSzenario] = this.createZuordnungBeantwortet(answer, this.currentSzenario);
      }

      if (this.szenarioFortschritt !== undefined && answer.size !== 0) {
        console.log("store szenario answer, its size is: " + answer.size);

        this.szenarioFortschritt[this.training.aktuellesSzenario] = true;
      }
    } else if (this.phase == TrainingsPhase.Nachtraining) {
      if (answer instanceof Set && this.typeCheck.isSzenarioMCFrage(this.currentSzenario)) {
        this.training.nachtrainingBeantwortet[this.training.aktuellesSzenario] = this.createMCFrageBeantwortet(answer, this.currentSzenario);

      } else if (answer instanceof Map && this.typeCheck.isSzenarioZuordnung(this.currentSzenario)) {
        this.training.nachtrainingBeantwortet[this.training.aktuellesSzenario] = this.createZuordnungBeantwortet(answer, this.currentSzenario);
      }

      if (this.szenarioFortschritt !== undefined && answer.size !== 0) {
        console.log("store szenario answer, its size is: " + answer.size);

        this.szenarioFortschritt[this.training.aktuellesSzenario] = true;
      }
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

  private aggregateTrainingsResults(assessmentResult:ApiSzenarioAntwort[]){
    let gesammtKorrekt = 0;
    assessmentResult.forEach(result=> {
      if(result.korrekt) {
        gesammtKorrekt++;
      }
    });
    return {
      prozent: Math.ceil((gesammtKorrekt / (assessmentResult.length)) * 100),
      korrekt: gesammtKorrekt,
      total: assessmentResult.length,
      antworten: assessmentResult
    }
  }

}

