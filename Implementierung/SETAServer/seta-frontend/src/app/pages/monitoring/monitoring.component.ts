import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentResult } from '../../model/api/AssessmentResult';
import { AssessmentStatistics } from '../../model/api/AssessmentStatistics';
import { AppDaoService } from '../../services/app-dao.service';
import { AssessmentApiClientService } from '../../services/assessment-api-client.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.sass']
})
export class MonitoringComponent implements OnInit {
  allUsers: any[] = [];
  activeUser: string = "";

  pruefungsStatistics: AssessmentStatistics[] = [];
  activePruefung?: AssessmentResult;

  constructor(
    private router: Router,
    private appDao: AppDaoService,
    private apiClient: AssessmentApiClientService
  ) { }

  ngOnInit(): void {
    if (!this.appDao.user.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.activePruefung = undefined;
    this.activeUser = "";
    this.allUsers = [];
    this.apiClient.getUsers().subscribe(apiUsers => {
      this.allUsers = apiUsers;
      for (let i = 0; i < this.allUsers.length; i++) {
        this.apiClient.getPruefungsAssessmentStatistics(this.allUsers[i].benutzername, 1)
          .subscribe(pruefung =>
            this.allUsers[i].letztePruefung = pruefung[0] ? this.timestampToDate(pruefung[0].zeitpunkt) : ''
          );
      }
    });
  }

  loadPruefungen(benutzername: string) {  
    this.activePruefung = undefined;
    this.activeUser = benutzername;
    console.log("requesting pruefungen");

    this.apiClient.getPruefungsAssessmentStatistics(benutzername, 10)
      .subscribe(statistics => {
        this.pruefungsStatistics = statistics;
        console.log("pruefungs statistik loaded");
      });
  }

  loadPruefungsResult(pruefung: AssessmentStatistics) {
    this.activePruefung = undefined;
    if (pruefung.abgeschlossen) {
      console.log("requesting pruefungsresult of " + pruefung.assessmentID);
      this.apiClient.getPruefungsAssessmentResults(this.activeUser, pruefung.assessmentID)
        .subscribe(result => {
          this.activePruefung = result;
        });
    }


  }


  timestampToTime(timestamp: string): string {
    let time = timestamp.replace(/.*T/g, ' ').split(':');
    return time[0]+":"+time[1];
  }
  
  timestampToDate(timestamp: string): string {
    let date = timestamp.replace(/T.*/, ' ').split('-');
    return date[2]+"."+date[1] + ". "+ date[0];
  }

  getPercent(korrekt: number, inkorrekt: number): number {
    if (korrekt == 0) {
      return 0;
    }
    return Math.ceil((korrekt / (korrekt + inkorrekt)) * 100);
  }

}
