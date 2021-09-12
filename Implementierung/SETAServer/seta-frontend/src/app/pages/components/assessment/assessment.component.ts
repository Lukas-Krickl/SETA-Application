import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssessmentNavigation } from '../../../model/assessmentNavigation';
import { MCAntwort } from '../../../model/szenarien/MCAntwort';
import { MCFrage } from '../../../model/szenarien/MCFrage';
import { Zuordnung } from '../../../model/szenarien/Zuordnung';
import { ZuordnungsEintrag } from '../../../model/szenarien/ZuordnungsEintrag';
import { AppDaoService } from '../../../services/app-dao.service';
import { TypeCheckService } from '../../../services/type-check.service';



/**
 * Reusable Assessment component that displays a Szenario as part of an assessment.
 * This component is used at several pages, anywhere to display a szenario
 * 
 * all data, including the text for the buttons is passed via inputs, making this component
 * perfectly reusable
 * 
 * It has a feedback mode that, when toggled to true, makes answered unselectable 
 * shows the correct solution, and if answered the wrong selections 
 * 
 * The component handles szenarien of type MCFragen or Zuordnung itself and both can be set
 *    
 */
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.sass']
})
export class AssessmentComponent implements OnInit {
  /**
   * click events for the confirmation button. 
   * passes a map with eintragID and selected begriffe if a Zuordnungsszenario is displayed 
   * passes a set with selected MCAntwort IDs, if a MCFrage is displayed
   * 
   */
  @Output() confirmBtn = new EventEmitter<Map<number, string> | Set<number>>();
  
  /**
   * click events for the exit button button.
   * passes a map with eintragID and selected begriffe if a Zuordnungsszenario is displayed
   * passes a set with selected MCAntwort IDs, if a MCFrage is displayed
   *
   */
  @Output() exitBtn = new EventEmitter<Map<number, string> | Set<number>>();

  /**
   * passess a event if the bottom navigation bar is clicked
   */
  @Output() szenarioNav = new EventEmitter<AssessmentNavigation>();

  /**
   * the title of the page to display
   */
  @Input() title: string = "";

  /**
   * text of the (right) confirmation button
   */
  @Input() confirmBtnText: string = "Weiter";

  /**
   * text of the (left) exit button
   */
  @Input() exitBtnText: string = "";

  /**
   * the szenario, that is currently displayed
   */
  @Input() szenario?: MCFrage | Zuordnung;

  /**
   * current user selected answers, if a MCFrage is displayed 
   * Set with selected answerIDs
   */
  @Input() mcAntwortSelected!: Set<number>;
  
  /**
   * current user selected answers, if a Zuordnung is displayed
   * A map with eintragID and the selected begriff
   */
  @Input() zuordnungsAuswahl!: Map<number, string>;

  /**
   * the index of the currently selected szenario
   */
  @Input() currentSzenarioIndex: number = -1;

  /**
   * a list used with feedBackMode = false signaling if a szenario has been answered
   * boolean at a index signals a answer the szenario with the same index 
   */
  @Input() szenarioFortschritt?: boolean[];

  /**
   * a list used in feedback mode signaling if the szenario has been answered correctly
   */
  @Input() szenarioResults?: boolean[];

  @Input() feedBackMode: boolean = false;

  constructor(
    public appDao: AppDaoService,
    public typeCheck: TypeCheckService
  ) { }

  ngOnInit(): void {

  }

  confirmButtonClicked() {
    if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
      this.confirmBtn.emit(this.mcAntwortSelected);

    } else if (this.typeCheck.isSzenarioZuordnung(this.szenario)) {
      this.confirmBtn.emit(this.zuordnungsAuswahl);
    }
  }

  exitBtnClicked() {
    if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
      this.exitBtn.emit(this.mcAntwortSelected);

    } else if (this.typeCheck.isSzenarioZuordnung(this.szenario)) {
      this.exitBtn.emit(this.zuordnungsAuswahl);

    }
  }

  szenarioNavClicked(position: number) {
    if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
      this.szenarioNav.emit({ answer: this.mcAntwortSelected, nextSzenarioIndex: position });

    } else if (this.typeCheck.isSzenarioZuordnung(this.szenario)) {
      this.szenarioNav.emit({ answer: this.zuordnungsAuswahl, nextSzenarioIndex: position });
    }
  }

  /**
   * Selects or unselects the MCAntwort only if its not feedback mode
   * @param antwortID of the selected MCAntwort
   */
  toggleMcAntwort(antwortID: number) {
    if (!this.feedBackMode) {
      if (this.mcAntwortSelected.has(antwortID)) {
        this.mcAntwortSelected.delete(antwortID);
      } else {
        this.mcAntwortSelected.add(antwortID);
      }
    }

  }

  isAusgewaehlt(antwortID: number): boolean {
    return this.mcAntwortSelected.has(antwortID);
  }

  isCorrectlyAnswered(antwort: MCAntwort): boolean {
    if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
      let ausgewaehlt = this.mcAntwortSelected.has(antwort.antwortID);

      return ausgewaehlt && antwort.korrekt;
    }
    return false;
  }

  isIncorrectlyAnswered(antwort: MCAntwort): boolean {
    if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
      let ausgewaehlt = this.mcAntwortSelected.has(antwort.antwortID);

      return ausgewaehlt && !antwort.korrekt || !ausgewaehlt && antwort.korrekt;
    }
    return false;
  }

  /**
   * stored the selected begriff to the eintrag
   * @param eintrag 
   * @param value begriff
   */
  selectedEintrag(eintrag: ZuordnungsEintrag, value: string) {
    this.zuordnungsAuswahl.set(eintrag.eintragID, value);
  }

  /**
   * returns the user selected begriff for a eintrag
   */
  getSelectedEintrag(eintrag: ZuordnungsEintrag): string {
    let selected = this.zuordnungsAuswahl.get(eintrag.eintragID);

    if (selected !== undefined) {
      return selected;
    }
    return "";
  }

  isZuweisungsAntwortCorrect(eintrag: ZuordnungsEintrag): boolean {
    return eintrag.begriff == this.zuordnungsAuswahl.get(eintrag.eintragID);
  }

  /**
   * sorts and returns the given eintraege alphabetically 
   */
  sortZuordnungsbegriffe(eintrag: ZuordnungsEintrag[]): ZuordnungsEintrag[] {
    return eintrag.sort((a, b) => a.begriff.localeCompare(b.begriff))
  }
}
