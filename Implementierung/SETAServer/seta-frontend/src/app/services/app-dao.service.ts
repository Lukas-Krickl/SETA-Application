import { Injectable } from '@angular/core';
import { User } from '../model/user';


/**
 * Application Data access object. Can be injected to other services and components to access the API URL
 * and the logged in user.
 */
@Injectable({
  providedIn: 'root'
})
export class AppDaoService {
  serverApiUrl: string = "https://" + window.location.hostname + "/api/v1";
  serverBaseUrl: string = "https://" + window.location.hostname;
  user:User = new User();

  constructor() { }
  public getImageUrl(resource:string){
    return this.serverBaseUrl+resource;
  }
}
