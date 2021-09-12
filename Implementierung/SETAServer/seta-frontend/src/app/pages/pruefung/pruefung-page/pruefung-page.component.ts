import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDaoService } from '../../../services/app-dao.service';
import { PruefungsControllerService } from '../../../services/pruefungs-controller.service';
import { PruefungsPhase } from '../PruefungsPhasen';

@Component({
  selector: 'app-pruefung-page',
  templateUrl: './pruefung-page.component.html',
  styleUrls: ['./pruefung-page.component.sass']
})
export class PruefungPageComponent implements OnInit, OnDestroy {
  PruefungsPhase = PruefungsPhase;
  
  constructor(
    private router:Router, 
    private appDao:AppDaoService,
    public pruefungsController: PruefungsControllerService
  ) { }

  ngOnInit(): void {
    if (!this.appDao.user.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(){
    this.pruefungsController.phase = PruefungsPhase.Beendet;
  }

}
