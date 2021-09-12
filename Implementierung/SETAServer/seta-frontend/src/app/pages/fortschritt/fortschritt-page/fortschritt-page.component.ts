import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AggregatedTrainingResult } from '../../../model/AggregatedTrainingsResult';
import { AggregatedTrainingStatistics } from '../../../model/AggregatedTrainingStatistics';
import { AssessmentResult } from '../../../model/api/AssessmentResult';
import { AssessmentStatistics } from '../../../model/api/AssessmentStatistics';
import { AppDaoService } from '../../../services/app-dao.service';
import { AssessmentApiClientService } from '../../../services/assessment-api-client.service';

@Component({
  selector: 'app-fortschritt-page',
  templateUrl: './fortschritt-page.component.html',
  styleUrls: ['./fortschritt-page.component.sass']
})
export class FortschrittPageComponent implements OnInit {
  trainingsAnsicht: boolean = true
  pruefungsStatistics: AssessmentStatistics[] = [];
  trainingsStatistics: AggregatedTrainingStatistics[] = [];
  activePruefung?: AssessmentResult;
  activeTraining?: AggregatedTrainingResult;

  constructor(
    private router:Router, 
    private appDao:AppDaoService, 
    private apiClient: AssessmentApiClientService) { }

  ngOnInit(): void {
    if(!this.appDao.user.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.loadAssessments();
    
  }

  loadAssessments() {
    if (this.pruefungsStatistics.length === 0) {

      this.apiClient.getPruefungsAssessmentStatistics(this.appDao.user.getBenutzername(), 10)
        .subscribe(statistics => {
          this.pruefungsStatistics = statistics;
          console.log("pruefungs statistik loaded");
        });
    }

    if (this.trainingsStatistics.length === 0) {
      this.apiClient.getTrainingsAssessmentStatistics(this.appDao.user.getBenutzername(), 20)
        .subscribe(statistics => {
          this.trainingsStatistics = this.aggregateTrainingsStatistics(statistics);
          console.log("trainings statistik loaded");
        });
    }
  }

  loadTrainingResult(statistics:AggregatedTrainingStatistics){
    if(statistics.vortraining.abgeschlossen && !(this.activeTraining !== undefined && this.activeTraining.assessmentID === statistics.vortraining.assessmentID)){
      this.apiClient.getTrainingsAssessmentResults(this.appDao.user.getBenutzername(), statistics.vortraining.assessmentID)
        .subscribe(results => this.setAggregatedTrainingsResult(results, statistics));
    }
  }


  loadPruefungsResult(pruefung:AssessmentStatistics){
    this.activePruefung = undefined; 
    if (pruefung.abgeschlossen) {
      console.log("requesting pruefungsresult of " + pruefung.assessmentID);
      this.apiClient.getPruefungsAssessmentResults(this.appDao.user.getBenutzername(), pruefung.assessmentID)
        .subscribe(result => {
          this.activePruefung = result;
      });
    }
  }


  timestampToTime(timestamp: string): string {
    let time = timestamp.replace(/.*T/g, ' ').split(':');
    return time[0] + ":" + time[1];
  }

  timestampToDate(timestamp: string): string {
    let date = timestamp.replace(/T.*/, ' ').split('-');
    return date[2] + "." + date[1] + ". " + date[0];
  }

  getPercent(korrekt:number, inkorrekt:number):number {
    if(korrekt==0) {
      return 0;
    }
    return Math.ceil((korrekt / (korrekt+inkorrekt))*100);
  }


  aggregateTrainingsStatistics(combinedList:AssessmentStatistics[]):AggregatedTrainingStatistics[] {
    let aggregated: AggregatedTrainingStatistics[] = [];
    for(let vortraining of combinedList) {
      if(vortraining.typ == "VORTRAINING") {
        for(let nachtraining of combinedList) {
          if(nachtraining.typ == "NACHTRAINING" && nachtraining.assessmentID === vortraining.assessmentID) {
            aggregated.push({
              vortraining: vortraining,
              nachtraining:nachtraining
            });
          }
        }
      }
    }
    return aggregated;
  }

  setAggregatedTrainingsResult(results: AssessmentResult[], statistics: AggregatedTrainingStatistics) {
    if (results[0].typ != "VORTRAINING" || results[1].typ != "NACHTRAINING") {
      console.error("no valid assessment results received at loading training");
      return;
    }

    //kapitel nummer and name is needed, retrieved from server
    this.apiClient.requestSzenario(results[0].szenarien[0].szenarioID).subscribe(szenario=>{
      this.apiClient.getKapitel(szenario.kapitelnummer).subscribe(kapitel=>{
        this.activeTraining = {
          kapitelnummer: kapitel.kapitelnummer,
          kapitelname: kapitel.titel,
          assessmentID: results[0].assessmentID,
          vortraining: {
            korrekt: statistics.vortraining.korrekt,
            total: statistics.vortraining.korrekt + statistics.vortraining.inkorrekt,
            prozent: this.getPercent(statistics.vortraining.korrekt, statistics.vortraining.inkorrekt),
            antworten: results[0].szenarien
          },
          nachtraining: {
            korrekt: statistics.nachtraining.korrekt,
            total: statistics.nachtraining.korrekt + statistics.nachtraining.inkorrekt,
            prozent: this.getPercent(statistics.nachtraining.korrekt, statistics.nachtraining.inkorrekt),
            antworten: results[1].szenarien
          }
        } 
      });
    });
  }
}
