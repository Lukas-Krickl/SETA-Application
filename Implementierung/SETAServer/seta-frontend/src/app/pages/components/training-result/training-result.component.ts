import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AggregatedTrainingResult } from '../../../model/AggregatedTrainingsResult';

@Component({
  selector: 'app-training-result',
  templateUrl: './training-result.component.html',
  styleUrls: ['./training-result.component.sass']
})
export class TrainingResultComponent implements OnInit {
  @Output() szenarioNavClicked = new EventEmitter<number>();

  @Input() btnDisabled: boolean = true;
  @Input() training!:AggregatedTrainingResult;

  constructor() { }

  ngOnInit(): void {
  }

  getEmpfehlungsText(){
    let prozentDiff = this.training.nachtraining.prozent - this.training.vortraining.prozent;
    if (this.training.nachtraining.prozent == 100) {
      return this.getVollePunktzahlText();
    }
    if( prozentDiff>0) {
      return this.getPositiveEmpfehlungText(prozentDiff);
    } else {
      return this.getNegativEmpfehlungText();
    }
  }

  navigateToSzenario(szenarioID:number){
    if(!this.btnDisabled) {
      this.szenarioNavClicked.emit(szenarioID);
    }
  }

  getNegativEmpfehlungText():string {
  return "Sie konnten sich durch dieses Training leider nicht verbessern. \
    Versuchen Sie beim nächsten Mal etwas mehr Übungsaufgaben durchzuführen, um so besser zu werden. \
    \n\nDirekt nach einem Assessment können Sie sich Ihre falschen und die zugehörigen richtigen Antworten ansehen. Nutzen Sie das, um aus Ihren Fehlern zu lernen. ";
  }

  getPositiveEmpfehlungText(prozentDiff:number):string {
    return "Sie konnten sich durch dieses Training um "+prozentDiff
      + "% verbessern. Nur weiter so!";
  }

  getVollePunktzahlText():string{
    return "Ausgezeichnet!\n\n Sie haben zum Schluss die volle Punktzahl erreicht. \
    Wenn Sie in den anderen Kapiteln genau so gut abschneiden können Sie eine Prüfung durführen.";
  }

}
