import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppDaoService } from '../services/app-dao.service';
import { ApiUser } from '../model/api/ApiUser';


/**
 * Controller service to manage API calls for the user management
 */
@Injectable({
  providedIn: 'root'
})
export class UserMgtService {

  constructor(private http: HttpClient, private appDao: AppDaoService) { }

  /**
   * Make a request to the api to login the user
   */
  requestLogin(benutzername: string, passwort: string): Observable<ApiUser> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      withCredentials: true
    };

    let data = "benutzername=" + benutzername + "&passwort=" + passwort;
    return this.http.post<ApiUser>(this.appDao.serverApiUrl + "/login", data, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Requests the user object with the information, if a user logged in previously and a session cookie is set 
   * @returns user information by turning in the stored session cookie
   */
  requestUserInformation(): Observable<ApiUser> {
    return this.http.get<ApiUser>(this.appDao.serverApiUrl + "/whoami", { withCredentials: true });
  }

  /**
   * make a logout request to the api, to invalidate the session cookie 
   */
  requestLogout(): Observable<any> {
    return this.http.post(this.appDao.serverApiUrl + "/logout", "", { withCredentials: true }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("error status code: " + error.status);

    return throwError(
      'Anfrage Fehlgeschlagen');
  }

}
