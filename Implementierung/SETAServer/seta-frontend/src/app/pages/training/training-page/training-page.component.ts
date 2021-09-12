import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDaoService } from '../../../services/app-dao.service';
import { TrainingControllerService } from '../../../services/training-controller.service';
import { TrainingsPhase } from '../TrainingsPhase';

@Component({
  selector: 'app-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.sass']
})
export class TrainingPageComponent implements OnInit {
  TrainingsPhase = TrainingsPhase

  constructor(
    private router: Router, 
    private appDao: AppDaoService, 
    public controller:TrainingControllerService) { }

  ngOnInit(): void {
    if (!this.appDao.user.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

}
