import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AssessmentResult } from '../../../model/api/AssessmentResult';
import { Szenario } from '../../../model/szenarien/Szenario';
import { AssessmentApiClientService } from '../../../services/assessment-api-client.service';

/**
 * Component to display the result of a pruefung
 */
@Component({
  selector: 'app-pruefung-result',
  templateUrl: './pruefung-result.component.html',
  styleUrls: ['./pruefung-result.component.sass']
})
export class PruefungResultComponent implements OnInit, OnChanges {
  @Output() szenarioNavClicked = new EventEmitter<number>();
  @Input() pruefung!: AssessmentResult;
  @Input() btnDisabled: boolean = true;
  /**
   * mapping of szenarioIDs to their kapitel number. outer array is of size 5, one entry for each kapitel
   * inner array is a list of szenarioIDs belonging to the kapitel with kapitelnumber index+1
   */
  szenarioKapitelZuweisung: Array<Array<any>> = [];

  /**
   * array of result statistics for each kapitel. 
   */
  kapitelErfolg: Array<any> = [];
  amountGesammtKorrekt: number = 0;

  constructor(
    private apiClient: AssessmentApiClientService
  ) { }

  ngOnInit(): void {
    this.updateResults();
  }

  ngOnChanges() {
    this.updateResults();
  }


  onClickSzenarioNav(szenarioID: number) {
    if (!this.btnDisabled) {
      this.szenarioNavClicked.emit(szenarioID);
    }
  }

  getPercent(korrekt: number, gesammt: number): number {
    if(korrekt===0 || gesammt ===0) {
      return 0;
    }
    return Math.ceil((korrekt / gesammt) * 100);
  }

  updateResults() {
    let szenarien:Szenario[] = [];

    for (let szenarioResult of this.pruefung.szenarien) {
      this.apiClient.requestSzenario(szenarioResult.szenarioID).subscribe(szenario => {
        szenarien.push(szenario);
        if (szenarien.length === this.pruefung.szenarien.length) {
          this.setKapitelValues(szenarien);
        }
      });
    }
  }

  /**
   * set the kapitelinformation
   */
  setKapitelValues(szenarien: Szenario[]): void {
    // discard old values
    let amountGesammtKorrekt = 0;
    let newKapitelZuweisung: Array<Array<any>> = [];
    let newKapitelErfolg: Array<any> =[];

    for (let i = 0; i < 5; i++) {
      newKapitelZuweisung.push([])
      newKapitelErfolg.push({
        gesammt: 0,
        korrekt: 0
      });
    }


    for (let i = 0; i < this.pruefung.szenarien.length; i++) {
      //count amount gesammt korrekt
      if (this.pruefung.szenarien[i].korrekt) {
        amountGesammtKorrekt++;
      }

      //store szenarien to kapitel
      let szenarioID = this.pruefung.szenarien[i].szenarioID;
      let kapitelnummer = this.getKapitelnummerOfSzenario(szenarien, szenarioID);
      newKapitelZuweisung[kapitelnummer-1]!.push({
        anzeigeNummer: i + 1,
        szenarioID: szenarioID,
        korrekt: this.pruefung.szenarien[i].korrekt
      });

      // count amount of szenarien and correct for percentage
      newKapitelErfolg[kapitelnummer-1].gesammt++;
      if (this.pruefung.szenarien[i].korrekt) {
        newKapitelErfolg[kapitelnummer-1].korrekt++;
      }
    }

    this.amountGesammtKorrekt = amountGesammtKorrekt;
    this.szenarioKapitelZuweisung = newKapitelZuweisung;
    this.kapitelErfolg = newKapitelErfolg;
  }

  /**
   * return the kapitelnummer of the szenario with the given id, from the given szenarien 
   */
  private getKapitelnummerOfSzenario(szenarien: Szenario[], id:number):number {
    for(let szenario of szenarien) {
      if(szenario.szenarioID === id) {
        return szenario.kapitelnummer;
      }
    }
    console.error("Szenario with id "+id+" not found in requested szenarien");
    return -1
  }

}
