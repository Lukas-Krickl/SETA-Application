import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiSzenarioAntwort } from '../model/api/ApiSzenarioAntwort';
import { ApiUser } from '../model/api/ApiUser';
import { AssessmentResult } from '../model/api/AssessmentResult';
import { AssessmentStatistics } from '../model/api/AssessmentStatistics';
import { MCFrage } from '../model/szenarien/MCFrage';
import { Zuordnung } from '../model/szenarien/Zuordnung';
import { AppDaoService } from './app-dao.service';


/**
 * A service to make api requests regarding assessments
 */
@Injectable({
  providedIn: 'root'
})
export class AssessmentApiClientService {

  constructor(
    private http: HttpClient,
    private appDao: AppDaoService) { }

  /**
   * Makes a api request to initiate a new pruefung for the currently logged in user
   * @returns a object with number attribute assessmentID and number array szenarien with the szenarioIDs for the assessment
   */
  startPruefungRequest(): Observable<any> {
    let url = this.appDao.serverApiUrl + "/users/" + this.appDao.user.getBenutzername() + "/assessments/pruefungen";
    return this.http.post(url, "", { withCredentials: true });
  }

  /**
   * Makes a api request to turn in results of a pruefung for the currently logged in user
   * @returns no content
   */
  submitPruefungRequest(assessmentID: number, szenarioAntworten: ApiSzenarioAntwort[]): Observable<any> {
    let url = this.appDao.serverApiUrl
      + "/users/" + this.appDao.user.getBenutzername()
      + "/assessments/pruefungen/" + assessmentID;

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    };

    return this.http.put(url, szenarioAntworten, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * make a api request to start a new training to the given kapitel
   * @returns a object with number attribute assessmentID and number arrays vortraining and nachtraining with szenarioIDs
   * for the assessments respectively 
   */
  startTraining(kapitelnummer: number): Observable<any> {
    let url = this.appDao.serverApiUrl + "/users/" + this.appDao.user.getBenutzername()
      + "/assessments/trainings/kapitel/" + kapitelnummer;
    return this.http.post(url, "", { withCredentials: true });
  }

  /**
   * Makes a api request to turn in the trainings results
   * @returns 
   */
  submitTraining(assessmentID: number, vortraining: ApiSzenarioAntwort[], nachtraining: ApiSzenarioAntwort[]): Observable<any> {
    let url = this.appDao.serverApiUrl
      + "/users/" + this.appDao.user.getBenutzername()
      + "/assessments/trainings/" + assessmentID;

    let antworten = {
      vortraining: vortraining,
      nachtraining: nachtraining
    }

    return this.http.put(url, antworten, { withCredentials: true });
  }

  /**
   * Request all szenario data by a given szenarioID from the api
   * @param szenarioID 
   * @returns 
   */
  requestSzenario(szenarioID: number): Observable<MCFrage | Zuordnung> {
    let url = this.appDao.serverApiUrl + "/szenarien/" + szenarioID;
    return this.http.get<MCFrage | Zuordnung>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * makes a request to the api for a random szenario of the given kapitel
   */
  requestUebungsszenario(kapitelnummer: number): Observable<MCFrage | Zuordnung> {
    let url = this.appDao.serverApiUrl + "/szenarien/uebung/kapitel/" + kapitelnummer;
    return this.http.get<MCFrage | Zuordnung>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * request the aggregated statistics of previous assessments, part of trainings
   * assessments are returned ordered from new to old and grouped by each training
   * 
   * @param benutzername of the user to request the results from 
   * @param max maximum amount of assessments to return 
   */
  getTrainingsAssessmentStatistics(benutzername: string, max?: number): Observable<AssessmentStatistics[]> {
    let url = this.appDao.serverApiUrl
      + "/users/" + benutzername
      + "/assessments/trainings" + (max !== undefined ? "?max=" + max : "");

    return this.http.get<AssessmentStatistics[]>(url, { withCredentials: true });
  }

  /**
   * request statistics of previous pruefungen from the api
   * @param benutzername pruefungen for this user
   * @param max maximum of entries to return
   */
  getPruefungsAssessmentStatistics(benutzername: string, max?: number): Observable<AssessmentStatistics[]> {
    let url = this.appDao.serverApiUrl
      + "/users/" + benutzername
      + "/assessments/pruefungen" + (max !== undefined ? "?max=" + max : "");

    return this.http.get<AssessmentStatistics[]>(url, { withCredentials: true });
  }

  /**
   * request the detailed results of previous assessments, part of trainings
   * assessments are returned ordered from new to old and grouped by each training
   *
   * @param benutzername of the user to request the results from
   * @param max maximum amount of assessments to return
   */
  getTrainingsAssessmentResults(benutzername: string, assessmentID: number): Observable<AssessmentResult[]> {
    let url = this.appDao.serverApiUrl
      + "/users/" + benutzername
      + "/assessments/trainings/" + assessmentID;

    return this.http.get<AssessmentResult[]>(url, { withCredentials: true });
  }

  /**
   * request statistics of previous pruefungen from the api
   * @param benutzername pruefungen for this user
   * @param max maximum of entries to return
  */
  getPruefungsAssessmentResults(benutzername: string, assessmentID: number): Observable<AssessmentResult> {
    let url = this.appDao.serverApiUrl
      + "/users/" + benutzername
      + "/assessments/pruefungen/" + assessmentID;

    return this.http.get<AssessmentResult>(url, { withCredentials: true });
  }

  /**
   * make a api request for all users
   * @returns a list of all users
   */
  getUsers(): Observable<ApiUser[]> {
    let url = this.appDao.serverApiUrl + "/users";
    return this.http.get<ApiUser[]>(url, { withCredentials: true });
  }

  /**
   * get information of the given kapitel from the api
   */
  getKapitel(kapitelnummer: number): Observable<any> {
    let url = this.appDao.serverApiUrl + "/kapitel/" + kapitelnummer;
    return this.http.get(url);
  }


  private handleError(error: HttpErrorResponse) {

    return throwError(
      'Anfrage Fehlgeschlagen');
  }
}

