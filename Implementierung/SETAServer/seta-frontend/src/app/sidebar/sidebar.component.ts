import { Component, HostBinding, OnInit } from '@angular/core';
import { UserMgtService } from '../services/user-mgt.service'
import { AppDaoService } from '../services/app-dao.service'
import { ApiUser } from '../model/api/ApiUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  benutzernameInput: string = "";
  passwortInput: string = "";
  loginFailed: boolean = false;
  mobileMenuText:string = "Menü";
  @HostBinding('class.mobile-nav-open') mobileMenuOpen:boolean = false;

  constructor(public userMgt: UserMgtService, public appDao: AppDaoService, private router: Router) { }

  ngOnInit(): void {
    if(!this.appDao.user.isLoggedIn()) {
      this.userMgt.requestUserInformation()
        .subscribe((user: ApiUser) => { 
          this.appDao.user.login(user.benutzername, user.vorname, user.nachname, user.rolle);
        });
    }
  }

  login() {
    this.userMgt.requestLogin(this.benutzernameInput, this.passwortInput)
      .subscribe((user: ApiUser) => {
        this.appDao.user.login(user.benutzername, user.vorname, user.nachname, user.rolle);
        this.benutzernameInput = "";
        this.passwortInput = "";
        this.loginFailed = false;
        console.log("login successful");
        

      }, error => {
        this.loginFailed = true;
        this.passwortInput = "";
        console.log("login failed");
      });

  }

  logout() {
    this.userMgt.requestLogout().subscribe(()=>{
      this.appDao.user.logout();
      this.router.navigate(['/']);

    }, error=>{
      console.log("logout failed")
    });

  }

  toggleMobileMenu(){
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
      this.mobileMenuText = "Menü";
    } else {
      this.mobileMenuOpen = true;
      this.mobileMenuText = "Schließen";
    }
  }

}
