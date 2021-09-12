(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Gitlab\Bachelorarbeit\01526005-lukas-krickl\Implementierung\SETAServer\seta-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_mgt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-mgt.service */ "WXwH");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app-dao.service */ "9nnm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function SidebarComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleMobileMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Monitoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_div_25_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.benutzernameInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_div_25_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.passwortInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_25_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Anmelden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.benutzernameInput)("ngClass", ctx_r1.loginFailed == true ? "error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.passwortInput)("ngClass", ctx_r1.loginFailed == true ? "error" : "");
} }
function SidebarComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Willkommen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_26_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abmelden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.appDao.user.getVorname(), " ", ctx_r2.appDao.user.getNachname(), "");
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class SidebarComponent {
    constructor(userMgt, appDao, router) {
        this.userMgt = userMgt;
        this.appDao = appDao;
        this.router = router;
        this.benutzernameInput = "";
        this.passwortInput = "";
        this.loginFailed = false;
        this.mobileMenuText = "Menü";
        this.mobileMenuOpen = false;
    }
    ngOnInit() {
        if (!this.appDao.user.isLoggedIn()) {
            this.userMgt.requestUserInformation()
                .subscribe((user) => {
                this.appDao.user.login(user.benutzername, user.vorname, user.nachname, user.rolle);
            });
        }
    }
    login() {
        this.userMgt.requestLogin(this.benutzernameInput, this.passwortInput)
            .subscribe((user) => {
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
        this.userMgt.requestLogout().subscribe(() => {
            this.appDao.user.logout();
            this.router.navigate(['/']);
        }, error => {
            console.log("logout failed");
        });
    }
    toggleMobileMenu() {
        if (this.mobileMenuOpen) {
            this.mobileMenuOpen = false;
            this.mobileMenuText = "Menü";
        }
        else {
            this.mobileMenuOpen = true;
            this.mobileMenuText = "Schließen";
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_mgt_service__WEBPACK_IMPORTED_MODULE_1__["UserMgtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__["AppDaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostVars: 2, hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mobile-nav-open", ctx.mobileMenuOpen);
    } }, decls: 27, vars: 13, consts: [[1, "logo"], [1, "mobile-nav", 3, "click"], ["routerLink", "/inhalte", "routerLinkActive", "active", 3, "click"], ["src", "../../assets/icons/sidebar/inhalte.svg", "alt", ""], ["routerLink", "/training", "routerLinkActive", "active", 3, "ngClass", "click"], ["src", "../../assets/icons/sidebar/training.svg", "alt", ""], ["routerLink", "/pruefung", "routerLinkActive", "active", 3, "ngClass", "click"], ["src", "../../assets/icons/sidebar/pr\u00FCfung.svg", "alt", ""], ["routerLink", "/fortschritt", "routerLinkActive", "active", 3, "ngClass", "click"], ["src", "../../assets/icons/sidebar/fortschritt.svg", "alt", ""], ["routerLink", "/monitoring", "routerLinkActive", "active", 3, "click", 4, "ngIf"], ["class", "login-section", 4, "ngIf"], ["routerLink", "/monitoring", "routerLinkActive", "active", 3, "click"], ["src", "../../assets/icons/sidebar/monitoring.svg", "alt", ""], [1, "login-section"], [1, "title-sm"], [1, "form"], ["type", "text", "placeholder", "Benutzername", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "password", "placeholder", "Passwort", 3, "ngModel", "ngClass", "ngModelChange"], [1, "secondary-btn", 3, "click"], [1, "name"], [1, "red-btn", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_2_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_4_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inhalte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_9_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_14_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pr\u00FCfung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_19_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fortschritt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SidebarComponent_a_24_Template, 5, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SidebarComponent_div_25_Template, 8, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SidebarComponent_div_26_Template, 7, 2, "div", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mobileMenuText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx.appDao.user.isLoggedIn()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, !ctx.appDao.user.isLoggedIn()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, !ctx.appDao.user.isLoggedIn()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appDao.user.isLoggedIn && ctx.appDao.user.getRolle() === "TRAINER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.appDao.user.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appDao.user.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  align-items: stretch;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  min-width: 12rem;\n  width: 20%;\n  height: 100%;\n  max-width: 15rem;\n  margin-right: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  transition: top 0.2s;\n}\n\n.logo[_ngcontent-%COMP%], .mobile-nav[_ngcontent-%COMP%] {\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n  font-weight: 300;\n  border-bottom: 1px solid #EBEBEB;\n  margin: 0 1rem;\n}\n\na[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0.6rem;\n  color: #212529;\n  font-size: 1.4rem;\n  font-weight: 300;\n  outline: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  filter: none;\n  background: #CCDBFF;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n  filter: opacity(40%);\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #5788F9;\n  color: white;\n}\n\n.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n\n.active[_ngcontent-%COMP%]:hover {\n  background: #5788F9;\n}\n\n.login-section[_ngcontent-%COMP%] {\n  height: 40%;\n  max-height: 15rem;\n  border-top: 1px solid #EBEBEB;\n  padding-top: 10%;\n  padding-bottom: 10%;\n  margin: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: stretch;\n}\n\n.login-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  flex-grow: 3;\n}\n\n.login-section[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-grow: 4;\n  align-items: stretch;\n}\n\n.login-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0);\n  border-radius: 8px;\n  background: #EBEBEB;\n  padding: 0.6rem;\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n}\n\n.login-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  font-weight: 500;\n}\n\n.login-section[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  border: 1px solid #F95757 !important;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  height: 6%;\n}\n\n@media only screen and (max-width: 850px) {\n  [_nghost-%COMP%] {\n    margin-right: 1%;\n    min-width: 10rem;\n    max-width: none;\n    width: 20%;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    position: fixed;\n    z-index: 5;\n    top: 94%;\n    right: 0;\n    border-radius: 0;\n    width: 100%;\n    height: 100%;\n    max-width: none;\n    min-width: none;\n    margin: 0;\n    background: white;\n  }\n\n  .logo[_ngcontent-%COMP%], .mobile-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-nav[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    display: flex;\n    margin-left: 0;\n    margin-right: 0;\n    background: #234DB0;\n    border: none;\n    color: white;\n  }\n\n  .login-section[_ngcontent-%COMP%] {\n    max-height: none;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGViYXIuY29tcG9uZW50LnNhc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQUE7RUFDQSxxQ0NRTztFRFBQLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0NuQkk7RURvQkosaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQ25DWTtBRHFDaEI7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQ2hETTtFRGlETixZQUFBO0FBS0o7O0FBSkk7RUFDSSxpQkFBQTtBQU1SOztBQUpBO0VBQ0ksbUJDdERNO0FENkRWOztBQUxBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFOSTtFQUNJLFlBQUE7QUFRUjs7QUFOSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBUVI7O0FBTkk7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJDekVLO0VEMEVMLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFRUjs7QUFOSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQVFSOztBQU5JO0VBQ0ksb0NBQUE7QUFRUjs7QUFOQTtFQUVJLGFBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQVNOOztFQVBFO0lBQ0ksaUJBQUE7RUFVTjtBQUNGOztBQVRBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0VBV047O0VBVEU7SUFDSSxhQUFBO0VBWU47O0VBVkU7SUFDSSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQ2pJTztJRGtJUCxZQUFBO0lBQ0EsWUFBQTtFQWFOOztFQVhFO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBY047QUFDRiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi92YXJpYWJsZXNcblxuOmhvc3RcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaFxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1iZ1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHhcbiAgICBtaW4td2lkdGg6IDEycmVtXG4gICAgd2lkdGg6IDIwJVxuICAgIGhlaWdodDogMTAwJVxuICAgIG1heC13aWR0aDogMTVyZW1cbiAgICBtYXJnaW4tcmlnaHQ6IDIlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICB0cmFuc2l0aW9uOiB0b3AgLjJzXG5cbi5sb2dvXG4gICAgaGVpZ2h0OiAxMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gICAgZm9udC1zaXplOiAxLjdyZW1cbiAgICBmb250LXdlaWdodDogMzAwXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LWxpZ2h0XG4gICAgbWFyZ2luOiAwIDFyZW1cblxuYVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgIHBhZGRpbmc6IC42cmVtXG4gICAgY29sb3I6ICRibGFja1xuICAgIGZvbnQtc2l6ZTogMS40cmVtXG4gICAgZm9udC13ZWlnaHQ6IDMwMFxuICAgIG91dGxpbmU6IG5vbmVcblxuYTpob3ZlclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgIGZpbHRlcjogbm9uZVxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0XG5cbmltZ1xuICAgIG1hcmdpbi1yaWdodDogMXJlbVxuXG4uZGlzYWJsZWRcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuICAgIGN1cnNvcjogZGVmYXVsdFxuICAgIGZpbHRlcjogb3BhY2l0eSg0MCUpXG5cbi5hY3RpdmVcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeVxuICAgIGNvbG9yOiB3aGl0ZVxuICAgIGltZ1xuICAgICAgICBmaWx0ZXI6IGludmVydCgxKVxuXG4uYWN0aXZlOmhvdmVyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnlcblxuLmxvZ2luLXNlY3Rpb25cbiAgICBoZWlnaHQ6IDQwJVxuICAgIG1heC1oZWlnaHQ6IDE1cmVtXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmV5LWxpZ2h0XG4gICAgcGFkZGluZy10b3A6IDEwJVxuICAgIHBhZGRpbmctYm90dG9tOiAxMCVcbiAgICBtYXJnaW46IDAgMXJlbVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaFxuXG4gICAgaDRcbiAgICAgICAgZmxleC1ncm93OiAzXG5cbiAgICAuZm9ybVxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcbiAgICAgICAgZmxleC1ncm93OiA0XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoXG5cbiAgICBpbnB1dFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsMCApXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleS1saWdodFxuICAgICAgICBwYWRkaW5nOiAuNnJlbVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbVxuICAgICAgICBmb250LXNpemU6IDFyZW1cblxuICAgIC5uYW1lXG4gICAgICAgIGZsZXgtZ3JvdzogMlxuICAgICAgICBmb250LXdlaWdodDogNTAwXG5cbiAgICAuZXJyb3JcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHJlZCAhaW1wb3J0YW50XG5cbi5tb2JpbGUtbmF2XG4gICAgQGV4dGVuZCAubG9nb1xuICAgIGRpc3BsYXk6IG5vbmVcbiAgICBoZWlnaHQ6IDYlXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpXG4gICAgOmhvc3RcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJVxuICAgICAgICBtaW4td2lkdGg6IDEwcmVtXG4gICAgICAgIG1heC13aWR0aDogbm9uZVxuICAgICAgICB3aWR0aDogMjAlXG5cbiAgICBhXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXG4gICAgOmhvc3RcbiAgICAgICAgcG9zaXRpb246IGZpeGVkXG4gICAgICAgIHotaW5kZXg6IDVcbiAgICAgICAgdG9wOiA5NCVcbiAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgbWF4LXdpZHRoOiBub25lXG4gICAgICAgIG1pbi13aWR0aDogbm9uZVxuICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVcblxuICAgIC5sb2dvXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcblxuICAgIC5tb2JpbGUtbmF2XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgICAgIGJhY2tncm91bmQ6ICAkcHJpbWFyeS1kYXJrXG4gICAgICAgIGJvcmRlcjogbm9uZVxuICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgIC5sb2dpbi1zZWN0aW9uXG4gICAgICAgIG1heC1oZWlnaHQ6IG5vbmVcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JVxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JVxuIiwiJGZvbnQtc3RhY2s6ICdSb2JvdG8nLCBzYW5zLXNlcmlmXG4kcHJpbWFyeTogIzU3ODhGOVxuJHByaW1hcnktZGFyazogIzIzNERCMFxuJHByaW1hcnktbGlnaHQ6ICNDQ0RCRkZcbiRzZWNvbmRhcnk6IGxpbmVhci1ncmFkaWVudCgxMjIuNThkZWcsICM3NkI2NUEgLTUxLjU1JSwgIzQxOUUxNCAxMDIuMzUlKVxuJHNlY29uZGFyeS1saWdodDogI0UwRUZEQVxuJGdyZWVuOiAjNDE5RTE0XG4kcmVkOiAjRjk1NzU3XG4kZ3JleTogIzg4ODg4OFxuJGdyZXktbGlnaHQ6ICNFQkVCRUJcbiRncmV5LWRhcms6ICM0NTQ1NDVcbiRibGFjazogIzIxMjUyOVxuJHdoaXRlLWJnOiByZ2JhKDI1NSwyNTUsMjU1LC45NSlcbiJdfQ== */"] });


/***/ }),

/***/ "72/k":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/training-result/training-result.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TrainingResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingResultComponent", function() { return TrainingResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2) { return { "correct-pill": a0, "incorrect-pill": a1, "disabled": a2 }; };
function TrainingResultComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingResultComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const szenario_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navigateToSzenario(szenario_r2.szenarioID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const szenario_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, szenario_r2.korrekt, !szenario_r2.korrekt, ctx_r0.btnDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
} }
function TrainingResultComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingResultComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const szenario_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.navigateToSzenario(szenario_r6.szenarioID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const szenario_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, szenario_r6.korrekt, !szenario_r6.korrekt, ctx_r1.btnDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
} }
class TrainingResultComponent {
    constructor() {
        this.szenarioNavClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.btnDisabled = true;
    }
    ngOnInit() {
    }
    getEmpfehlungsText() {
        let prozentDiff = this.training.nachtraining.prozent - this.training.vortraining.prozent;
        if (this.training.nachtraining.prozent == 100) {
            return this.getVollePunktzahlText();
        }
        if (prozentDiff > 0) {
            return this.getPositiveEmpfehlungText(prozentDiff);
        }
        else {
            return this.getNegativEmpfehlungText();
        }
    }
    navigateToSzenario(szenarioID) {
        if (!this.btnDisabled) {
            this.szenarioNavClicked.emit(szenarioID);
        }
    }
    getNegativEmpfehlungText() {
        return "Sie konnten sich durch dieses Training leider nicht verbessern. \
    Versuchen Sie beim nächsten mal etwas mehr Übungsaufgaben durchzuführen, um so Ihre Kompetenz zu steigern. \
    \n\nDirekt nach einem Assessment können Sie Ihre falschen und die Zugehörigen richtigen Antworten ansehen.Nutzen Sie das, um aus Ihren Fehlern zu lernen. ";
    }
    getPositiveEmpfehlungText(prozentDiff) {
        return "Sehr gut, Sie haben sich durch dieses Training um " + prozentDiff
            + "% verbessert. Wenn Sie so weitermachen, haben die Bösen keine Chance!";
    }
    getVollePunktzahlText() {
        return "Ausgezeichnet!\n\n Sie haben zum Schluss die volle Punktzahl erreicht. \
    Der nächste Schritt wäre eine Prüfung durchzuführen und wenn Sie dabei genauso gut abschneiden, gibt es für Sie hier nichts mehr zu tun.";
    }
}
TrainingResultComponent.ɵfac = function TrainingResultComponent_Factory(t) { return new (t || TrainingResultComponent)(); };
TrainingResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingResultComponent, selectors: [["app-training-result"]], inputs: { btnDisabled: "btnDisabled", training: "training" }, outputs: { szenarioNavClicked: "szenarioNavClicked" }, decls: 29, vars: 11, consts: [[1, "title"], [1, "title-sm"], [1, "item-box"], [1, "assessment-header"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "white-space", "pre-line"], [3, "ngClass", "click"]], template: function TrainingResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trainingsergebnis: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kapitel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ergebnisse im Vergleich:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vortrainings-Assessment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TrainingResultComponent_button_16_Template, 2, 6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nachtrainings-Assessment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TrainingResultComponent_button_24_Template, 2, 6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Empfehlung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.training.kapitelnummer, ". ", ctx.training.kapitelname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.training.vortraining.prozent, "% (", ctx.training.vortraining.korrekt, "/", ctx.training.vortraining.total, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.training.vortraining.antworten);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.training.nachtraining.prozent, "% (", ctx.training.nachtraining.korrekt, "/", ctx.training.nachtraining.total, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.training.nachtraining.antworten);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getEmpfehlungsText(), "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  margin-top: 1rem;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.overview-box[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.gesammt-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #888888;\n}\n\n.item-box[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  margin-bottom: 1rem;\n}\n\n.assessment-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background: #EBEBEB;\n  margin: 0.1rem;\n  padding: 0.4rem 1rem;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 8px 8px 0;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 0 0 8px;\n}\n\nnav[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]:hover {\n  filter: none;\n  cursor: default;\n}\n\nnav[_ngcontent-%COMP%]   .answered[_ngcontent-%COMP%] {\n  background: #CCDBFF;\n}\n\nnav[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background: #234DB0 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJhaW5pbmctcmVzdWx0LmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQU1KOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBTUo7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpJO0VBQ0ksWUFBQTtFQUNBLG1CQ3hDSztFRHlDTCxjQUFBO0VBQ0Esb0JBQUE7QUFNUjs7QUFKSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUpJO0VBQ0ksMEJBQUE7QUFNUjs7QUFKSTtFQUNJLDBCQUFBO0FBTVI7O0FBSkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUpJO0VBQ0ksbUJDakVRO0FEdUVoQjs7QUFKSTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7QUFNUiIsImZpbGUiOiJ0cmFpbmluZy1yZXN1bHQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uLy4uL3ZhcmlhYmxlc1xuOmhvc3RcbiAgICB3aWR0aDogMTAwJVxuICAgIHBhZGRpbmc6IDAgMnJlbVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgb3ZlcmZsb3c6IGF1dG9cblxuaDNcbiAgICBmb250LXdlaWdodDogMzAwXG4gICAgZm9udC1zaXplOiAxLjVyZW0gXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW1cbiAgICBtYXJnaW4tdG9wOiAxcmVtXG5cbmg1XG4gICAgbWFyZ2luOiAwXG5cbnBcbiAgICBtYXJnaW46IC41cmVtIDBcblxuYlxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgXG5cbi5vdmVydmlldy1ib3hcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXG5cbi5nZXNhbW10LWJveFxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXlcblxuXG4uaXRlbS1ib3hcbiAgICBwYWRkaW5nOiAuNXJlbSAwXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxuXG5cbi5hc3Nlc3NtZW50LWhlYWRlclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAgXG5cbm5hdlxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgIGZsZXgtd3JhcDogbm93cmFwXG5cbiAgICBidXR0b25cbiAgICAgICAgZmxleC1ncm93OiAxXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmV5LWxpZ2h0XG4gICAgICAgIG1hcmdpbjogLjFyZW1cbiAgICAgICAgcGFkZGluZzogLjRyZW0gMXJlbVxuXG4gICAgYnV0dG9uOmhvdmVyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICAgYnV0dG9uOmxhc3QtY2hpbGRcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDBcblxuICAgIGJ1dHRvbjpmaXJzdC1jaGlsZFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweFxuXG4gICAgLmRpc2FibGVkOmhvdmVyXG4gICAgICAgIGZpbHRlcjogbm9uZVxuICAgICAgICBjdXJzb3I6IGRlZmF1bHRcblxuICAgIC5hbnN3ZXJlZFxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1saWdodFxuXG4gICAgLmN1cnJlbnRcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktZGFyayAhaW1wb3J0YW50XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50XG5cbiIsIiRmb250LXN0YWNrOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxuJHByaW1hcnk6ICM1Nzg4RjlcbiRwcmltYXJ5LWRhcms6ICMyMzREQjBcbiRwcmltYXJ5LWxpZ2h0OiAjQ0NEQkZGXG4kc2Vjb25kYXJ5OiBsaW5lYXItZ3JhZGllbnQoMTIyLjU4ZGVnLCAjNzZCNjVBIC01MS41NSUsICM0MTlFMTQgMTAyLjM1JSlcbiRzZWNvbmRhcnktbGlnaHQ6ICNFMEVGREFcbiRncmVlbjogIzQxOUUxNFxuJHJlZDogI0Y5NTc1N1xuJGdyZXk6ICM4ODg4ODhcbiRncmV5LWxpZ2h0OiAjRUJFQkVCXG4kZ3JleS1kYXJrOiAjNDU0NTQ1XG4kYmxhY2s6ICMyMTI1MjlcbiR3aGl0ZS1iZzogcmdiYSgyNTUsMjU1LDI1NSwuOTUpXG4iXX0= */"] });


/***/ }),

/***/ "97vB":
/*!***********************************************************!*\
  !*** ./src/app/services/assessment-api-client.service.ts ***!
  \***********************************************************/
/*! exports provided: AssessmentApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentApiClientService", function() { return AssessmentApiClientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-dao.service */ "9nnm");
/* harmony import */ var _model_converter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-converter.service */ "PAJg");







class AssessmentApiClientService {
    constructor(http, appDao, modelConverter) {
        this.http = http;
        this.appDao = appDao;
        this.modelConverter = modelConverter;
    }
    startPruefungRequest() {
        let url = this.appDao.serverApiUrl + "/users/" + this.appDao.user.getBenutzername() + "/assessments/pruefungen";
        return this.http.post(url, "", { withCredentials: true });
    }
    submitPruefungRequest(assessmentID, szenarioAntworten) {
        let url = this.appDao.serverApiUrl
            + "/users/" + this.appDao.user.getBenutzername()
            + "/assessments/pruefungen/" + assessmentID;
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true
        };
        return this.http.put(url, szenarioAntworten, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    startTraining(kapitelnummer) {
        let url = this.appDao.serverApiUrl + "/users/" + this.appDao.user.getBenutzername()
            + "/assessments/trainings/kapitel/" + kapitelnummer;
        return this.http.post(url, "", { withCredentials: true });
    }
    submitTraining(assessmentID, vortraining, nachtraining) {
        let url = this.appDao.serverApiUrl
            + "/users/" + this.appDao.user.getBenutzername()
            + "/assessments/trainings/" + assessmentID;
        let antworten = {
            vortraining: vortraining,
            nachtraining: nachtraining
        };
        return this.http.put(url, antworten, { withCredentials: true });
    }
    requestSzenario(szenarioID) {
        let url = this.appDao.serverApiUrl + "/szenarien/" + szenarioID;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    requestUebungsszenario(kapitelnummer) {
        let url = this.appDao.serverApiUrl + "/szenarien/uebung/kapitel/" + kapitelnummer;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getTrainingsAssessmentStatistics(benutzername, max) {
        let url = this.appDao.serverApiUrl
            + "/users/" + benutzername
            + "/assessments/trainings" + (max !== undefined ? "?max=" + max : "");
        return this.http.get(url, { withCredentials: true });
    }
    getPruefungsAssessmentStatistics(benutzername, max) {
        let url = this.appDao.serverApiUrl
            + "/users/" + benutzername
            + "/assessments/pruefungen" + (max !== undefined ? "?max=" + max : "");
        return this.http.get(url, { withCredentials: true });
    }
    getTrainingsAssessmentResults(benutzername, assessmentID) {
        let url = this.appDao.serverApiUrl
            + "/users/" + benutzername
            + "/assessments/trainings/" + assessmentID;
        return this.http.get(url, { withCredentials: true });
    }
    getPruefungsAssessmentResults(benutzername, assessmentID) {
        let url = this.appDao.serverApiUrl
            + "/users/" + benutzername
            + "/assessments/pruefungen/" + assessmentID;
        return this.http.get(url, { withCredentials: true });
    }
    getUsers() {
        let url = this.appDao.serverApiUrl + "/users";
        return this.http.get(url, { withCredentials: true });
    }
    getKapitel(kapitelnummer) {
        let url = this.appDao.serverApiUrl + "/kapitel/" + kapitelnummer;
        return this.http.get(url);
    }
    handleError(error) {
        //console.error("error status code: " + error.status);
        //console.error("error message " + error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Anfrage Fehlgeschlagen');
    }
}
AssessmentApiClientService.ɵfac = function AssessmentApiClientService_Factory(t) { return new (t || AssessmentApiClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_dao_service__WEBPACK_IMPORTED_MODULE_4__["AppDaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_model_converter_service__WEBPACK_IMPORTED_MODULE_5__["ModelConverterService"])); };
AssessmentApiClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AssessmentApiClientService, factory: AssessmentApiClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9nnm":
/*!*********************************************!*\
  !*** ./src/app/services/app-dao.service.ts ***!
  \*********************************************/
/*! exports provided: AppDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDaoService", function() { return AppDaoService; });
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user */ "kl1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppDaoService {
    constructor() {
        this.serverApiUrl = "https://" + window.location.hostname + "/api/v1";
        this.serverBaseUrl = "https://" + window.location.hostname;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    getImageUrl(resource) {
        return this.serverBaseUrl + resource;
    }
}
AppDaoService.ɵfac = function AppDaoService_Factory(t) { return new (t || AppDaoService)(); };
AppDaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppDaoService, factory: AppDaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C5us":
/*!***********************************!*\
  !*** ./src/app/model/Pruefung.ts ***!
  \***********************************/
/*! exports provided: Pruefung */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pruefung", function() { return Pruefung; });
class Pruefung {
    constructor(assessmentID, szenarien) {
        this.assessmentID = assessmentID;
        this.enthalteneSzenarien = szenarien;
        this.aktuellesSzenario = 0;
        this.szenarienBeantwortet = Array(szenarien.length);
    }
    getSzenarioById(id) {
        for (let frage of this.szenarienBeantwortet) {
            if (frage !== undefined && frage.szenarioID === id) {
                return frage;
            }
        }
        return undefined;
    }
}


/***/ }),

/***/ "CHVP":
/*!*********************************************************!*\
  !*** ./src/app/services/training-controller.service.ts ***!
  \*********************************************************/
/*! exports provided: TrainingControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingControllerService", function() { return TrainingControllerService; });
/* harmony import */ var _model_Training__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Training */ "RD76");
/* harmony import */ var _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/training/TrainingsPhase */ "Gwgn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assessment_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-api-client.service */ "97vB");
/* harmony import */ var _type_check_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-check.service */ "t4yD");
/* harmony import */ var _model_converter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-converter.service */ "PAJg");






class TrainingControllerService {
    constructor(apiClient, typeCheck, modelConverter) {
        this.apiClient = apiClient;
        this.typeCheck = typeCheck;
        this.modelConverter = modelConverter;
        this.phase = _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Beendet;
        this.training = new _model_Training__WEBPACK_IMPORTED_MODULE_0__["Training"](-1, [], []);
        this.kapitelnummer = 0;
        this.showAssessmentScreen = false;
        this.assessmentConfirmBtnText = "";
        this.assessmentExitBtnText = "";
        this.mcAntwortSelected = new Set();
        this.zuordnungsAuswahl = new Map();
        this.feedBackMode = false;
    }
    startTraining(kapitelnummer) {
        if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Beendet) {
            this.kapitelnummer = Number(kapitelnummer);
            //call api and init training
            this.apiClient.startTraining(this.kapitelnummer).subscribe(assessment => {
                this.training = new _model_Training__WEBPACK_IMPORTED_MODULE_0__["Training"](assessment.assessmentID, assessment.vortraining, assessment.nachtraining);
                console.log("training successfully started: " + JSON.stringify(assessment));
                this.initAssessment(_pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining);
            });
        }
    }
    submitTraining() {
        let vortrainingResult = this.modelConverter
            .convertAssessmentToResults(this.training.vortrainingSzenarien, this.training.vortrainingBeantwortet);
        let nachtrainingResult = this.modelConverter
            .convertAssessmentToResults(this.training.nachtrainingSzenarien, this.training.nachtrainingBeantwortet);
        this.apiClient.submitTraining(this.training.assessmentID, vortrainingResult, nachtrainingResult)
            .subscribe(() => console.log("training result sent to server"));
        this.apiClient.getKapitel(this.kapitelnummer).subscribe(kapitel => {
            this.trainingResult = {
                kapitelnummer: this.kapitelnummer,
                kapitelname: kapitel.titel,
                assessmentID: this.training.assessmentID,
                vortraining: this.aggregateTrainingsResults(vortrainingResult),
                nachtraining: this.aggregateTrainingsResults(nachtrainingResult)
            };
            console.log("Training result was set");
        });
    }
    initAssessment(phase) {
        this.currentSzenario = undefined;
        let amountSzenarien = 0;
        if (phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining) {
            amountSzenarien = this.training.vortrainingSzenarien.length;
        }
        else if (phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining) {
            amountSzenarien = this.training.nachtrainingSzenarien.length;
        }
        this.showAssessmentScreen = true;
        this.assessmentConfirmBtnText = "Weiter";
        this.assessmentExitBtnText = "Abgeben";
        this.szenarioFortschritt = [];
        for (let i = 0; i < amountSzenarien; i++) {
            this.szenarioFortschritt.push(false);
        }
        this.szenarioResults = undefined;
        this.feedBackMode = false;
        this.training.aktuellesSzenario = 0;
        this.setAktuellesSzenario(phase);
        this.phase = phase;
        console.log(phase + " initialized");
    }
    initAssessmentFeedback(phase) {
        this.showAssessmentScreen = true;
        this.assessmentConfirmBtnText = "Weiter";
        this.assessmentExitBtnText = "zur nächsten Phase";
        this.szenarioFortschritt = undefined;
        this.szenarioResults = this.createSzenarioResult(phase);
        this.feedBackMode = true;
        this.training.aktuellesSzenario = 0;
        this.setAktuellesSzenario(phase);
        this.phase = phase;
        console.log(phase + " feedback initialized");
    }
    initInhalte() {
        this.showAssessmentScreen = false;
        this.phase = _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Inhalte;
    }
    initUebung() {
        this.showAssessmentScreen = true;
        this.assessmentConfirmBtnText = "Weiter";
        this.assessmentExitBtnText = "zu den Inhalten";
        this.szenarioFortschritt = undefined;
        this.szenarioResults = undefined;
        if (this.currentSzenario === undefined) {
            this.setNextUebungsSzenario();
        }
        this.phase = _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Ueben;
    }
    initEmpfehlung() {
        this.submitTraining();
        this.szenarioFortschritt = undefined;
        this.szenarioResults = undefined;
        this.assessmentConfirmBtnText = "Zurück";
        this.assessmentExitBtnText = "";
        this.feedBackMode = true;
        this.currentSzenario = undefined;
        this.showAssessmentScreen = false;
        this.phase = _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Empfehlung;
    }
    beenden() {
        this.phase = _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Beendet;
        this.assessmentConfirmBtnText = "";
        this.assessmentExitBtnText = "";
        this.showAssessmentScreen = false;
        this.currentSzenario = undefined;
        this.mcAntwortSelected = new Set();
        this.zuordnungsAuswahl = new Map();
        this.szenarioFortschritt = undefined;
        this.szenarioResults = undefined;
        this.feedBackMode = false;
        this.trainingResult = undefined;
    }
    createSzenarioResult(phase) {
        let results;
        let enthalteneSzenarien;
        if (phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback) {
            enthalteneSzenarien = this.training.vortrainingSzenarien;
            results = this.modelConverter.convertAssessmentToResults(enthalteneSzenarien, this.training.vortrainingBeantwortet);
        }
        else if (phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback) {
            enthalteneSzenarien = this.training.nachtrainingSzenarien;
            results = this.modelConverter.convertAssessmentToResults(enthalteneSzenarien, this.training.nachtrainingBeantwortet);
        }
        else {
            throw new Error("invalid  phase in creating results");
        }
        let szenarioResults = [];
        for (let szenarioID of enthalteneSzenarien) {
            for (let result of results) {
                if (result.szenarioID === szenarioID) {
                    szenarioResults.push(result.korrekt);
                }
            }
        }
        if (szenarioResults.length !== results.length) {
            throw new Error("result and szenarios didn't match");
        }
        return szenarioResults;
    }
    confirmBtnClicked(antworten) {
        switch (this.phase) {
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining:
                this.assessmentConfirmed(antworten);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining:
                this.assessmentConfirmed(antworten);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback:
                this.feedbackConfirmed();
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback:
                this.feedbackConfirmed();
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Ueben:
                this.uebungConfirmed();
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Empfehlung:
                this.backToEmpfehlung();
                break;
        }
    }
    exitBtnClicked(antworten) {
        switch (this.phase) {
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining:
                this.assessmentExited(antworten);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining:
                this.assessmentExited(antworten);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback:
                this.feedbackExited();
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback:
                this.feedbackExited();
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Ueben:
                this.uebenExited();
                break;
        }
    }
    szenarioNavClicked(target) {
        switch (this.phase) {
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining:
                this.assessmentSzenarioNavigation(target);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining:
                this.assessmentSzenarioNavigation(target);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback:
                this.feedbackSzenarioNavigation(target.nextSzenarioIndex);
                break;
            case _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback:
                this.feedbackSzenarioNavigation(target.nextSzenarioIndex);
                break;
        }
    }
    empfehlungSzenarioNavClicked(szenarioID) {
        let szenario = this.training.getNachtrainingSzenarioById(szenarioID);
        if (szenario === undefined) {
            szenario = this.training.getVortrainingSzenarioById(szenarioID);
        }
        if (szenario !== undefined) {
            this.loadSzenarioWithAnswers(szenario);
            console.log("stored szenario was loaded");
            this.showAssessmentScreen = true;
        }
        else {
            this.apiClient.requestSzenario(szenarioID).subscribe((szenario) => {
                this.currentSzenario = szenario;
                this.mcAntwortSelected = new Set();
                this.zuordnungsAuswahl = new Map();
                console.log("szenario received: " + szenario.szenarioID);
                this.showAssessmentScreen = true;
            });
        }
    }
    backToEmpfehlung() {
        this.showAssessmentScreen = false;
        this.currentSzenario = undefined;
    }
    /**
     * confirm btn clicked in vor or nachtrainings assessment
     * @param antworten
     */
    assessmentConfirmed(antworten) {
        this.storeSzenarioAnswer(antworten);
        this.training.aktuellesSzenario++;
        if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining && this.training.aktuellesSzenario === this.training.vortrainingSzenarien.length) {
            this.initAssessmentFeedback(_pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback);
        }
        else if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining && this.training.aktuellesSzenario === this.training.nachtrainingSzenarien.length) {
            this.initAssessmentFeedback(_pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback);
        }
        else {
            this.setAktuellesSzenario(this.phase);
        }
    }
    feedbackConfirmed() {
        if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback) {
            this.training.aktuellesSzenario = (this.training.aktuellesSzenario + 1) % this.training.vortrainingSzenarien.length;
        }
        else if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback) {
            this.training.aktuellesSzenario = (this.training.aktuellesSzenario + 1) % this.training.nachtrainingSzenarien.length;
        }
        this.setAktuellesSzenario(this.phase);
    }
    uebungConfirmed() {
        if (!this.feedBackMode) {
            this.feedBackMode = true;
        }
        else {
            this.feedBackMode = false;
            this.setNextUebungsSzenario();
        }
    }
    assessmentExited(antworten) {
        this.storeSzenarioAnswer(antworten);
        if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining) {
            this.initAssessmentFeedback(_pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback);
        }
        else if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining) {
            this.initAssessmentFeedback(_pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback);
        }
    }
    feedbackExited() {
        if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback) {
            this.currentSzenario = undefined;
            this.feedBackMode = false;
            this.initInhalte();
        }
        else if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback) {
            this.initEmpfehlung();
        }
    }
    uebenExited() {
        this.initInhalte();
    }
    assessmentSzenarioNavigation(target) {
        this.storeSzenarioAnswer(target.answer);
        this.training.aktuellesSzenario = target.nextSzenarioIndex;
        this.setAktuellesSzenario(this.phase);
    }
    feedbackSzenarioNavigation(szenarioIndex) {
        this.training.aktuellesSzenario = szenarioIndex;
        this.setAktuellesSzenario(this.phase);
    }
    setNextUebungsSzenario(requestCount) {
        console.log("requested uebungsszenario");
        this.apiClient.requestUebungsszenario(this.kapitelnummer).subscribe((szenario) => {
            //if the new scenario is the same as the last one, request another one but max 10 times
            if (this.currentSzenario !== undefined && this.currentSzenario.szenarioID === szenario.szenarioID && requestCount !== 10) {
                this.setNextUebungsSzenario(requestCount === undefined ? 1 : requestCount + 1);
            }
            else {
                this.mcAntwortSelected = new Set();
                this.zuordnungsAuswahl = new Map();
                this.currentSzenario = szenario;
                console.log("uebungsszenario received: " + szenario.szenarioID);
            }
        });
    }
    setAktuellesSzenario(assessment) {
        console.log("loading szenario");
        let storedSzenario;
        let szenarioID;
        if (assessment == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining || assessment == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].VortrainingFeedback) {
            szenarioID = this.training.vortrainingSzenarien[this.training.aktuellesSzenario];
            storedSzenario = this.training.getVortrainingSzenarioById(szenarioID);
        }
        else if (assessment == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining || assessment == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].NachtrainingFeedback) {
            szenarioID = this.training.nachtrainingSzenarien[this.training.aktuellesSzenario];
            storedSzenario = this.training.getNachtrainingSzenarioById(szenarioID);
        }
        else {
            throw new Error("Wanted to set aktuelles szenario, but assessment type was invalid");
        }
        if (storedSzenario !== undefined) {
            this.loadSzenarioWithAnswers(storedSzenario);
            console.log("stored szenario was loaded");
        }
        else {
            this.apiClient.requestSzenario(szenarioID).subscribe((szenario) => {
                this.currentSzenario = szenario;
                this.mcAntwortSelected = new Set();
                this.zuordnungsAuswahl = new Map();
                console.log("szenario received: " + szenario.szenarioID);
            });
        }
    }
    loadSzenarioWithAnswers(szenario) {
        this.currentSzenario = szenario;
        if (this.typeCheck.isSzenarioMCFrageBeantwortet(szenario)) {
            this.mcAntwortSelected = szenario.ausgewaehlt;
            this.zuordnungsAuswahl = new Map();
        }
        else {
            this.mcAntwortSelected = new Set();
            this.zuordnungsAuswahl = szenario.zugeordnet;
        }
    }
    storeSzenarioAnswer(answer) {
        if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Vortraining) {
            if (answer instanceof Set && this.typeCheck.isSzenarioMCFrage(this.currentSzenario)) {
                this.training.vortrainingBeantwortet[this.training.aktuellesSzenario] = this.createMCFrageBeantwortet(answer, this.currentSzenario);
            }
            else if (answer instanceof Map && this.typeCheck.isSzenarioZuordnung(this.currentSzenario)) {
                this.training.vortrainingBeantwortet[this.training.aktuellesSzenario] = this.createZuordnungBeantwortet(answer, this.currentSzenario);
            }
            if (this.szenarioFortschritt !== undefined && answer.size !== 0) {
                console.log("store szenario answer, its size is: " + answer.size);
                this.szenarioFortschritt[this.training.aktuellesSzenario] = true;
            }
        }
        else if (this.phase == _pages_training_TrainingsPhase__WEBPACK_IMPORTED_MODULE_1__["TrainingsPhase"].Nachtraining) {
            if (answer instanceof Set && this.typeCheck.isSzenarioMCFrage(this.currentSzenario)) {
                this.training.nachtrainingBeantwortet[this.training.aktuellesSzenario] = this.createMCFrageBeantwortet(answer, this.currentSzenario);
            }
            else if (answer instanceof Map && this.typeCheck.isSzenarioZuordnung(this.currentSzenario)) {
                this.training.nachtrainingBeantwortet[this.training.aktuellesSzenario] = this.createZuordnungBeantwortet(answer, this.currentSzenario);
            }
            if (this.szenarioFortschritt !== undefined && answer.size !== 0) {
                console.log("store szenario answer, its size is: " + answer.size);
                this.szenarioFortschritt[this.training.aktuellesSzenario] = true;
            }
        }
    }
    createMCFrageBeantwortet(userAntwort, szenario) {
        return {
            szenarioID: szenario.szenarioID,
            kapitelnummer: szenario.kapitelnummer,
            themanummer: szenario.themanummer,
            typ: szenario.typ,
            frage: szenario.frage,
            bild_url: szenario.bild_url,
            antworten: szenario.antworten,
            ausgewaehlt: userAntwort
        };
    }
    createZuordnungBeantwortet(userAntwort, szenario) {
        return {
            szenarioID: szenario.szenarioID,
            kapitelnummer: szenario.kapitelnummer,
            themanummer: szenario.themanummer,
            typ: szenario.typ,
            anweisung: szenario.anweisung,
            eintraege: szenario.eintraege,
            zugeordnet: userAntwort
        };
    }
    aggregateTrainingsResults(assessmentResult) {
        let gesammtKorrekt = 0;
        assessmentResult.forEach(result => {
            if (result.korrekt) {
                gesammtKorrekt++;
            }
        });
        return {
            prozent: Math.ceil((gesammtKorrekt / (assessmentResult.length)) * 100),
            korrekt: gesammtKorrekt,
            total: assessmentResult.length,
            antworten: assessmentResult
        };
    }
}
TrainingControllerService.ɵfac = function TrainingControllerService_Factory(t) { return new (t || TrainingControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_type_check_service__WEBPACK_IMPORTED_MODULE_4__["TypeCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_model_converter_service__WEBPACK_IMPORTED_MODULE_5__["ModelConverterService"])); };
TrainingControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrainingControllerService, factory: TrainingControllerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "E+nY":
/*!**********************************************************!*\
  !*** ./src/app/services/pruefungs-controller.service.ts ***!
  \**********************************************************/
/*! exports provided: PruefungsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruefungsControllerService", function() { return PruefungsControllerService; });
/* harmony import */ var _model_Pruefung__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Pruefung */ "C5us");
/* harmony import */ var _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/pruefung/PruefungsPhasen */ "Nn0d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assessment_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment-api-client.service */ "97vB");
/* harmony import */ var _type_check_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-check.service */ "t4yD");
/* harmony import */ var _model_converter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model-converter.service */ "PAJg");







class PruefungsControllerService {
    constructor(router, apiClient, typeCheck, modelConverter) {
        this.router = router;
        this.apiClient = apiClient;
        this.typeCheck = typeCheck;
        this.modelConverter = modelConverter;
        this.pruefung = new _model_Pruefung__WEBPACK_IMPORTED_MODULE_0__["Pruefung"](-1, []); // dummy pruefung to not having to check undefined all the time
        this.phase = _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Beendet;
        /**
         * set with user selected answeres of the currently displayed MC szenario (if a mc szenario is displayed)
         * numbers in set are the antwortIDs of the selected answers
         * bound to the Input of the assessment component
         */
        this.mcAntwortSelected = new Set();
        /**
         * user selected answeres of the currently displayed zuordnung (if one is displayed)
         * eintragID mapped to begriff as string
         */
        this.zuordnungsAuswahl = new Map();
        this.exitBtnText = "Abgeben";
        this.confirmBtnText = "Weiter";
    }
    startPruefung() {
        this.apiClient.startPruefungRequest().subscribe(data => {
            this.pruefung = new _model_Pruefung__WEBPACK_IMPORTED_MODULE_0__["Pruefung"](data.assessmentID, data.szenarien);
            console.log("pruefung started with szenarien: " + this.pruefung.enthalteneSzenarien);
            this.exitBtnText = "Abgeben";
            this.confirmBtnText = "Weiter";
            this.phase = _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Pruefung;
            this.szenarioFortschritt = [];
            for (let i = 0; i < this.pruefung.enthalteneSzenarien.length; i++) {
                this.szenarioFortschritt.push(false);
            }
            this.setAktuellesSzenario();
        });
    }
    submitPruefung() {
        if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Pruefung) {
            let results = this.modelConverter.convertAssessmentToResults(this.pruefung.enthalteneSzenarien, this.pruefung.szenarienBeantwortet);
            this.apiClient.submitPruefungRequest(this.pruefung.assessmentID, results)
                .subscribe(() => console.log("pruefung was submit"));
            this.setPruefungResult(results);
            this.setSzenarioResult(results);
            this.szenarioFortschritt = undefined;
            this.exitBtnText = "Beenden";
            this.phase = _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Feedback;
        }
    }
    setPruefungResult(results) {
        this.pruefungsResult = {
            assessmentID: this.pruefung.assessmentID,
            abgeschlossen: true,
            typ: "PRUEFUNG",
            zeitpunkt: "---",
            szenarien: results
        };
    }
    setSzenarioResult(results) {
        this.szenarioResults = [];
        for (let szenarioID of this.pruefung.enthalteneSzenarien) {
            for (let result of results) {
                if (result.szenarioID === szenarioID) {
                    this.szenarioResults.push(result.korrekt);
                }
            }
        }
        if (this.szenarioResults.length !== results.length) {
            throw new Error("pruefungs result and szenarios didn't match");
        }
    }
    setAktuellesSzenario() {
        console.log("loading szenario");
        let szenarioID = this.pruefung.enthalteneSzenarien[this.pruefung.aktuellesSzenario];
        let storedSzenario = this.pruefung.getSzenarioById(szenarioID);
        if (storedSzenario !== undefined) {
            this.loadSzenarioWithAnswers(storedSzenario);
            console.log("stored szenario was loaded");
        }
        else {
            this.apiClient.requestSzenario(szenarioID).subscribe((szenario) => {
                this.szenario = szenario;
                this.mcAntwortSelected = new Set();
                this.zuordnungsAuswahl = new Map();
                console.log("szenario received: " + szenario.szenarioID);
            });
        }
    }
    loadSzenarioWithAnswers(szenario) {
        this.szenario = szenario;
        if (this.typeCheck.isSzenarioMCFrageBeantwortet(szenario)) {
            this.mcAntwortSelected = szenario.ausgewaehlt;
            this.zuordnungsAuswahl = new Map();
        }
        else {
            this.mcAntwortSelected = new Set();
            this.zuordnungsAuswahl = szenario.zugeordnet;
        }
    }
    answerCurrentAndNext(answer) {
        this.storeSzenarioAnswer(answer);
        this.pruefung.aktuellesSzenario++;
        this.setAktuellesSzenario();
    }
    answerCurrentAndSelect(szenarioNav) {
        this.storeSzenarioAnswer(szenarioNav.answer);
        this.pruefung.aktuellesSzenario = szenarioNav.nextSzenarioIndex;
        this.setAktuellesSzenario();
    }
    storeSzenarioAnswer(answer) {
        if (answer instanceof Set && this.typeCheck.isSzenarioMCFrage(this.szenario)) {
            this.pruefung.szenarienBeantwortet[this.pruefung.aktuellesSzenario] = this.createMCFrageBeantwortet(answer, this.szenario);
        }
        else if (answer instanceof Map && this.typeCheck.isSzenarioZuordnung(this.szenario)) {
            this.pruefung.szenarienBeantwortet[this.pruefung.aktuellesSzenario] = this.createZuordnungBeantwortet(answer, this.szenario);
        }
        if (this.szenarioFortschritt !== undefined && answer.size !== 0) {
            console.log("store szenario answer, its size is: " + answer.size);
            this.szenarioFortschritt[this.pruefung.aktuellesSzenario] = true;
        }
    }
    createMCFrageBeantwortet(userAntwort, szenario) {
        return {
            szenarioID: szenario.szenarioID,
            kapitelnummer: szenario.kapitelnummer,
            themanummer: szenario.themanummer,
            typ: szenario.typ,
            frage: szenario.frage,
            bild_url: szenario.bild_url,
            antworten: szenario.antworten,
            ausgewaehlt: userAntwort
        };
    }
    createZuordnungBeantwortet(userAntwort, szenario) {
        return {
            szenarioID: szenario.szenarioID,
            kapitelnummer: szenario.kapitelnummer,
            themanummer: szenario.themanummer,
            typ: szenario.typ,
            anweisung: szenario.anweisung,
            eintraege: szenario.eintraege,
            zugeordnet: userAntwort
        };
    }
    confirmBtnClicked(event) {
        if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Pruefung) {
            //if at last szenario, submit pruefung
            if (this.pruefung.aktuellesSzenario === this.pruefung.enthalteneSzenarien.length - 1) {
                this.storeSzenarioAnswer(event);
                this.submitPruefung();
            }
            else {
                this.answerCurrentAndNext(event);
            }
        }
        else if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Feedback) {
            this.pruefung.aktuellesSzenario = (this.pruefung.aktuellesSzenario + 1) % this.pruefung.enthalteneSzenarien.length;
            this.setAktuellesSzenario();
        }
    }
    exitBtnClicked(event) {
        if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Pruefung) {
            this.storeSzenarioAnswer(event);
            this.submitPruefung();
        }
        else if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Feedback) {
            this.pruefungBeenden();
        }
    }
    chooseSzenario(szenarioIndex) {
        if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Pruefung) {
            this.answerCurrentAndSelect(szenarioIndex);
        }
        else if (this.phase == _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Feedback) {
            this.pruefung.aktuellesSzenario = szenarioIndex.nextSzenarioIndex;
            this.setAktuellesSzenario();
            console.log("aktuelle szenario index is: " + this.pruefung.aktuellesSzenario);
            /*
            let szenarioID = this.pruefung.enthalteneSzenarien[szenarioIndex.nextSzenarioIndex];
            let storedSzenario = this.pruefung.getSzenarioById(szenarioID);
            this.pruefung.aktuellesSzenario = szenarioIndex.nextSzenarioIndex;
      
            
            
            if (storedSzenario !== undefined) {
              this.loadSzenarioWithAnswers(storedSzenario);
            }
            */
        }
    }
    showSzenarioResultWithId(szenarioID) {
        for (let i = 0; i < this.pruefung.enthalteneSzenarien.length; i++) {
            if (this.pruefung.enthalteneSzenarien[i] === szenarioID) {
                this.pruefung.aktuellesSzenario = i;
            }
        }
        this.setAktuellesSzenario();
        console.log("aktuelle szenario index is: " + this.pruefung.aktuellesSzenario);
    }
    pruefungBeenden() {
        this.szenario = undefined;
        this.mcAntwortSelected = new Set();
        this.zuordnungsAuswahl = new Map();
        this.szenarioFortschritt = undefined;
        this.szenarioResults = undefined;
        this.exitBtnText = "Abgeben";
        this.phase = _pages_pruefung_PruefungsPhasen__WEBPACK_IMPORTED_MODULE_1__["PruefungsPhase"].Beendet;
    }
}
PruefungsControllerService.ɵfac = function PruefungsControllerService_Factory(t) { return new (t || PruefungsControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_4__["AssessmentApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_type_check_service__WEBPACK_IMPORTED_MODULE_5__["TypeCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_model_converter_service__WEBPACK_IMPORTED_MODULE_6__["ModelConverterService"])); };
PruefungsControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PruefungsControllerService, factory: PruefungsControllerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FELF":
/*!**************************************************************!*\
  !*** ./src/app/pages/default-page/default-page.component.ts ***!
  \**************************************************************/
/*! exports provided: DefaultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return DefaultPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DefaultPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultPageComponent.ɵfac = function DefaultPageComponent_Factory(t) { return new (t || DefaultPageComponent)(); };
DefaultPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultPageComponent, selectors: [["app-default-page"]], decls: 8, vars: 0, consts: [["src", "../../../assets/seta_logo.svg", "alt", "", "id", "seta_logo"], ["src", "../../../assets/illustrations/undraw_Growth_analytics_re_pyxf.svg", "alt", "", "id", "ill1"], ["src", "../../../assets/illustrations/undraw_Opened_re_i38e.svg", "alt", "", "id", "ill2"], ["src", "../../../assets/illustrations/undraw_server_cluster_jwwq.svg", "alt", "", "id", "ill3"], ["src", "../../../assets/illustrations/undraw_Setup_re_y9w8.svg", "alt", "", "id", "ill4"], ["src", "../../../assets/illustrations/undraw_Success_factors_re_ce93.svg", "alt", "", "id", "ill5"], ["src", "../../../assets/illustrations/undraw_Tabs_re_a2bd.svg", "alt", "", "id", "ill6"], ["src", "../../../assets/illustrations/undraw_two_factor_authentication_namy.svg", "alt", "", "id", "ill7"]], template: function DefaultPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    } }, styles: ["[_nghost-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 20% 10% auto 10% 20%;\n  grid-template-rows: 20% 10% auto 10% 20%;\n}\n\nimg[_ngcontent-%COMP%] {\n  opacity: 80%;\n}\n\n#seta_logo[_ngcontent-%COMP%] {\n  opacity: 100%;\n  width: 100%;\n  max-width: 50rem;\n  align-self: center;\n  justify-self: center;\n  grid-column: 2/span 3;\n  grid-row: 3/span 1;\n}\n\n#ill1[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 15rem;\n  min-width: 10rem;\n  align-self: end;\n  grid-column: 4/span 2;\n  grid-row: 5/span 1;\n}\n\n#ill2[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 5rem;\n  align-self: end;\n  grid-column: 4/span 1;\n  grid-row: 1/span 1;\n}\n\n#ill3[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 10rem;\n  min-width: 6rem;\n  align-self: end;\n  justify-self: end;\n  grid-column: 1/span 1;\n  grid-row: 1/span 1;\n}\n\n#ill4[_ngcontent-%COMP%] {\n  width: 40%;\n  max-width: 10rem;\n  min-width: 6rem;\n  align-self: center;\n  justify-self: center;\n  grid-column: 3/span 1;\n  grid-row: 1/span 1;\n}\n\n#ill5[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 15rem;\n  min-width: 8rem;\n  align-self: end;\n  justify-self: end;\n  grid-column: 1/span 2;\n  grid-row: 5/span 1;\n}\n\n#ill6[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 10rem;\n  min-width: 6rem;\n  align-self: center;\n  justify-self: center;\n  grid-column: 5/span 1;\n  grid-row: 3/span 1;\n}\n\n#ill7[_ngcontent-%COMP%] {\n  width: 60%;\n  max-width: 10rem;\n  min-width: 6rem;\n  align-self: end;\n  justify-self: end;\n  grid-column: 1/span 2;\n  grid-row: 3/span 1;\n}\n\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    border-radius: 0;\n  }\n\n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #seta_logo[_ngcontent-%COMP%] {\n    display: block;\n    width: 95%;\n    align-self: center;\n    justify-self: center;\n    grid-column: 1/span 5;\n    grid-row: 1/span 5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZWZhdWx0LXBhZ2UuY29tcG9uZW50LnNhc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQ0NVTztFRFRQLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVNKOztBQU5BO0VBQ0k7SUFDSSxnQkFBQTtFQVNOOztFQVBFO0lBQ0ksYUFBQTtFQVVOOztFQVJFO0lBQ0ksY0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQVdOO0FBQ0YiLCJmaWxlIjoiZGVmYXVsdC1wYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWJnXG4gICAgYm9yZGVyLXJhZGl1czogMTZweFxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgZGlzcGxheTogZ3JpZFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDEwJSBhdXRvIDEwJSAyMCVcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAxMCUgYXV0byAxMCUgMjAlXG5cbmltZ1xuICAgIG9wYWNpdHk6IDgwJVxuXG4jc2V0YV9sb2dvXG4gICAgb3BhY2l0eTogMTAwJVxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWF4LXdpZHRoOiA1MHJlbVxuICAgIGFsaWduLXNlbGY6IGNlbnRlclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDNcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMVxuXG4jaWxsMVxuICAgIHdpZHRoOiA4MCVcbiAgICBtYXgtd2lkdGg6IDE1cmVtXG4gICAgbWluLXdpZHRoOiAxMHJlbVxuICAgIGFsaWduLXNlbGY6IGVuZFxuICAgIGdyaWQtY29sdW1uOiA0IC8gc3BhbiAyXG4gICAgZ3JpZC1yb3c6IDUgLyBzcGFuIDFcblxuI2lsbDJcbiAgICB3aWR0aDogOTAlXG4gICAgbWF4LXdpZHRoOiA1cmVtXG4gICAgYWxpZ24tc2VsZjogZW5kXG4gICAgZ3JpZC1jb2x1bW46IDQgLyBzcGFuIDFcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMVxuXG4jaWxsM1xuICAgIHdpZHRoOiA4MCVcbiAgICBtYXgtd2lkdGg6IDEwcmVtXG4gICAgbWluLXdpZHRoOiA2cmVtXG4gICAgYWxpZ24tc2VsZjogZW5kXG4gICAganVzdGlmeS1zZWxmOiBlbmRcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMVxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxXG5cbiNpbGw0XG4gICAgd2lkdGg6IDQwJVxuICAgIG1heC13aWR0aDogMTByZW1cbiAgICBtaW4td2lkdGg6IDZyZW1cbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAxXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDFcblxuI2lsbDVcbiAgICB3aWR0aDogODAlXG4gICAgbWF4LXdpZHRoOiAxNXJlbVxuICAgIG1pbi13aWR0aDogOHJlbVxuICAgIGFsaWduLXNlbGY6IGVuZFxuICAgIGp1c3RpZnktc2VsZjogZW5kXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDJcbiAgICBncmlkLXJvdzogNSAvIHNwYW4gMVxuXG4jaWxsNlxuICAgIHdpZHRoOiA1MCVcbiAgICBtYXgtd2lkdGg6IDEwcmVtXG4gICAgbWluLXdpZHRoOiA2cmVtXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXJcbiAgICBncmlkLWNvbHVtbjogNSAvIHNwYW4gMVxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiAxXG5cbiNpbGw3XG4gICAgd2lkdGg6IDYwJVxuICAgIG1heC13aWR0aDogMTByZW1cbiAgICBtaW4td2lkdGg6IDZyZW1cbiAgICBhbGlnbi1zZWxmOiBlbmRcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDFcblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcbiAgICA6aG9zdFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwXG4gICAgICAgIFxuICAgIGltZ1xuICAgICAgICBkaXNwbGF5OiBub25lXG5cbiAgICAjc2V0YV9sb2dvXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgIHdpZHRoOiA5NSVcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA1XG4gICAgICAgIGdyaWQtcm93OiAxIC8gc3BhbiA1XG5cbiAgICAiLCIkZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWZcbiRwcmltYXJ5OiAjNTc4OEY5XG4kcHJpbWFyeS1kYXJrOiAjMjM0REIwXG4kcHJpbWFyeS1saWdodDogI0NDREJGRlxuJHNlY29uZGFyeTogbGluZWFyLWdyYWRpZW50KDEyMi41OGRlZywgIzc2QjY1QSAtNTEuNTUlLCAjNDE5RTE0IDEwMi4zNSUpXG4kc2Vjb25kYXJ5LWxpZ2h0OiAjRTBFRkRBXG4kZ3JlZW46ICM0MTlFMTRcbiRyZWQ6ICNGOTU3NTdcbiRncmV5OiAjODg4ODg4XG4kZ3JleS1saWdodDogI0VCRUJFQlxuJGdyZXktZGFyazogIzQ1NDU0NVxuJGJsYWNrOiAjMjEyNTI5XG4kd2hpdGUtYmc6IHJnYmEoMjU1LDI1NSwyNTUsLjk1KVxuIl19 */"] });


/***/ }),

/***/ "GZ69":
/*!**************************************************************!*\
  !*** ./src/app/pages/inhalte/kapitel5/kapitel5.component.ts ***!
  \**************************************************************/
/*! exports provided: Kapitel5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kapitel5Component", function() { return Kapitel5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Kapitel5Component {
    constructor() { }
    ngOnInit() {
    }
}
Kapitel5Component.ɵfac = function Kapitel5Component_Factory(t) { return new (t || Kapitel5Component)(); };
Kapitel5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Kapitel5Component, selectors: [["app-kapitel5"]], decls: 179, vars: 0, consts: [[1, "kapitel-description"], [1, "text-normal"], [1, "kapitel-reference"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=30", "target", "_blank"], [1, "kapitel-hinweise"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=31", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=33", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=35", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=38", "target", "_blank"]], template: function Kapitel5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "5. Gef\u00E4hrliche Schadprogramme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Schadprogramme wie z.B. Computer-Viren enthalten verdeckte Funktionen, die durch L\u00F6schen, \u00DCberschreiben oder sonstige\nVer\u00E4nderungen Sch\u00E4den an Betriebssystemen, Anwendungsprogrammen und Daten erzeugen. Sie verursachen damit zus\u00E4tzliche\nArbeit und Kosten und haben einen negativen Einfluss auf die Vertraulichkeit, Integrit\u00E4t und Verf\u00FCgbarkeit von Daten\noder Programmen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5.1 Wie k\u00F6nnen Sie erkennen, dass Ihr PC infiziert ist?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 30: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Typische anzeichen einer Infektion sind:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sie k\u00F6nnen auf bestimmte Laufwerke oder Datentr\u00E4ger nicht mehr zugreifen und Dateien nicht mehr bearbeiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Der Rechner arbeitet mit deutlich reduzierter Leistung (Systemauslastung zumeist auf 100 %), reagiert nicht oder startet in regelm\u00E4\u00DFigen Abst\u00E4nden neu. Auch der Zugriff auf Dateien dauert l\u00E4nger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Der Rechner startet nicht mehr oder ben\u00F6tigt f\u00FCr das Hochfahren deutlich l\u00E4nger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Auf dem Bildschirm werden pl\u00F6tzlich unbekannte Meldungen oder Dialogfenster angezeigt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sie erhalten eine E-Mail-Nachricht mit Anhang. Beim \u00D6ffnen des Anhangs \u00F6ffnen und schlie\u00DFen sich verschiedene Dialogfenster und die Systemleistung nimmt sofort deutlich ab. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Im Internet-Browser sind pl\u00F6tzlich zus\u00E4tzliche Icons und Symbolleisten sichtbar. Als Startseite erscheint eine Homepage, die Sie nicht eingestellt haben. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Es werden Warnungen angezeigt, dass bestimmte Programme eine Verbindung mit dem Internet herzustellen versuchen, obwohl dies nicht von Ihnen veranlasst wurde. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Antiviren- und Antispywareprogramme sind deaktiviert und k\u00F6nnen nicht neu gestartet werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ohne Ihr Zutun verschwindet ein Programm von Ihrem Computer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Verschiedene Dateien haben pl\u00F6tzlich ge\u00E4nderte Namen. Wenn Sie versuchen, sie zu \u00F6ffnen, erfahren Sie, dass die Inhalte verschl\u00FCsselt wurden und nicht ge\u00F6ffnet werden k\u00F6nnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Sie k\u00F6nnen nicht mehr auf bestimmte Dokumente zugreifen. Es erscheint ein Fenster, in dem Sie zur Eingabe eines Codes zum Entschl\u00FCsseln der Dokumente aufgefordert werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Manche Viren greifen die zum Starten des Computers erforderlichen Dateien an. Nach dem Einschalten erscheint ein leerer Bildschirm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Die angef\u00FChrten Symptome k\u00F6nnen auch erst nach einer bestimmten Zeit auftreten. Sie k\u00F6nnen au\u00DFerdem auch von Hardware- oder Softwarest\u00F6rungen verursacht werden. Deswegen kann nur eine n\u00E4here Untersuchung des Rechners durch eine EDV-Fachkraft Aufschluss \u00FCber die tats\u00E4chlichen Ursachen geben.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5.2 Ransomware und Verschl\u00FCsselungstrojaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 31: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Zu den gr\u00F6\u00DFten Bedrohungen f\u00FCr Unternehmen im Bereich Internetkriminalit\u00E4t geh\u00F6rt mittlerweile die Ransomware. Die gef\u00E4hrlichsten Vertreter dieser Angriffsvariante sind Verschl\u00FCsselungstrojaner, die alle wichtigen Dateien am Computer unlesbar machen. Die Daten werden verschl\u00FCsselt; Das Passwort, um sie wieder entschl\u00FCsseln zu k\u00F6nnen, geben die Angreifer erst nach \u00DCberweisung eines \u201EL\u00F6segelds\u201C (engl.: ransom) heraus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Auch nach Bezahlung ist aber keineswegs sicher, dass die Entschl\u00FCsselung funktioniert. Manchmal ist sie in der Schadsoftware gar nicht wirklich vorgesehen oder der Mechanismus zur Entschl\u00FCsselung funktioniert nicht. Im schlimmsten Fall sind sowohl die gespeicherten Daten als auch der \u00FCberwiesene Betrag verloren. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Verschl\u00FCsselungstrojaner greifen verschiedene Arten von Dateien an, vor allem Office-Dokumente, Bilder, Video- und MP3-Dateien, manchmal auch E-Mails und Datenbanken. Es handelt sich dabei typischerweise um selbst erstellte und unwiederbringliche Dokumente, die f\u00FCr das Unternehmen sehr wichtig sein k\u00F6nnen. Im Extremfall kann ein solcher Angriff zum Verlust aller Daten f\u00FChren!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Um sich gegen Ransomware zu sch\u00FCtzen, m\u00FCssen Sie grunds\u00E4tzlich die gleichen Verhaltensregeln befolgen wie bei jeder anderen Schadsoftware:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Pr\u00FCfen Sie jede E-Mail auf Plausibilit\u00E4t: Ist Ihnen der Absender bekannt und passt der Betreff zum Absender? Gibt es auff\u00E4llige Rechtschreib- und Grammatikfehler? Haben Sie eine derartige E-Mail erwartet oder kommt sie Ihnen irgendwie verd\u00E4chtig vor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u00D6ffnen Sie keine verd\u00E4chtigen Dateianh\u00E4nge! Pr\u00FCfen Sie zweifelhafte Dateien, indem Sie sie auf eine geeignete Internetseite (z.B. Virustotal.com) hochladen. Wenn Sie den Absender kennen, rufen Sie ihn an und fragen ihn, ob die Nachricht von ihm stammt und worum es sich handelt. Lassen Sie sich nicht von \u201Ebedrohlichen\u201C Inhalten (Rechnung, Mahnung etc.) dazu verleiten, eine Datei unbedacht zu \u00F6ffnen! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Klicken Sie nie un\u00FCberlegt auf Internet-Links in E-Mails! \u00DCbertragen Sie den Link mittels \u201EHyperlink kopieren\u201C in Ihren Browser und pr\u00FCfen Sie, ob die URL zum Absender passt. Ein Link in einer E-Mail kann zu einer ganz anderen Adresse f\u00FChren, als in der E-Mail angegeben ist; so etwas ist in jedem Fall als Alarmsignal zu werten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Zus\u00E4tzlich sollten Sie noch folgende Punkte beachten:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Sollte Ihr PC trotz aller Vorsicht mit Ransomware infiziert worden sein, schalten Sie ihn sofort aus \u2013 notfalls, indem Sie den Stecker ziehen! Je l\u00E4nger die Schadsoftware Gelegenheit hat, Dateien zu verschl\u00FCsseln, desto gr\u00F6\u00DFer wird der Schaden. Vor der Wiederinbetriebnahme muss der PC daher auf jeden Fall von einer Expertin oder einem Experten gepr\u00FCft und bereinigt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Der beste Schutz gegen Ransomware liegt in regelm\u00E4\u00DFigen und vollst\u00E4ndigen Datensicherungen. \u00DCbertragen Sie daher alle wichtigen und unwiederbringlichen Daten regelm\u00E4\u00DFig auf die Serverlaufwerke Ihres Unternehmens oder andere Sicherungsmedien, die Ihnen zu diesem Zweck zur Verf\u00FCgung gestellt wurden! Wichtige Dateien sollten Sie nie ausschlie\u00DFlich auf Ihrer lokalen Festplatte speichern. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "5.3 Ma\u00DFnahmen richtig setzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 33: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Technische Schutzma\u00DFnahmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Jeder Rechner mit Internet-Anschluss ben\u00F6tigt Schutz vor Schadsoftware, der regelm\u00E4\u00DFig aktualisiert werden muss und nicht deaktiviert werden darf: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Ein Virenschutzprogramm ist unbedingt erforderlich. Die Signatur-Dateien dieser Software m\u00FCssen t\u00E4glich aktualisiert werden, da sonst neu entwickelte Computerviren Ihren Computer ungehindert befallen k\u00F6nnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Alle Betriebssysteme und viele Anwendungsprogramme, insbesondere der Internet-Browser, weisen Sicherheitsl\u00FCcken auf, die erst im Lauf der Zeit entdeckt werden. Ihre Hersteller bieten kostenlose Programmaktualisierungen (Updates oder sog. Hotfixes) an, die diese Fehler ausbessern sollen. Diese Aktualisierungen m\u00FCssen unbedingt und m\u00F6glichst ohne zeitliche Verz\u00F6gerung installiert werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Eine Firewall ist eine Sicherheitsschnittstelle zwischen Ihrem PC und dem Internet und verhindert unerlaubte Zugriffe. Sofern in Ihrem Unternehmen kein zentrales Firewall-System betrieben wird, sollte eine Personal-Firewall auf jedem Arbeitsplatzrechner installiert werden. Diese Firewall darf auf keinen Fall deaktiviert werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Melden Sie Ihren EDV-Verantwortlichen unverz\u00FCglich, wenn Sie Warnhinweise erhalten, dass der Computer ungesch\u00FCtzt ist oder ein Sicherheitsproblem besteht. Vorsicht: Diese Hinweise k\u00F6nnten auch von Schadsoftware stammen. Ma\u00DFnahmen sollten Sie daher erst nach R\u00FCcksprache mit der IT-Abteilung setzen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Ma\u00DFnahmen bei der Internet-Nutzung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Daten und Programme, die aus dem Internet abgerufen werden, bergen die Gefahr versteckter Schadsoftware in sich. Sie k\u00F6nnen Benutzerdaten aussp\u00E4hen, weiterleiten, ver\u00E4ndern oder auch l\u00F6schen. Deswegen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Laden Sie Programme nur von vertrauensw\u00FCrdigen Websites, wie z.B. von den Originalseiten des Software-Herstellers. Dateien, die von Dritten \u00FCber anonyme Web-Dienste angeboten werden, sind ein Sicherheitsrisiko. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Daten und Programme von Hackerseiten, Gewinnspielseiten oder anderen dubiosen Homepages sind unbedingt zu meiden. Die Virengefahr ist \u00FCberdurchschnittlich hoch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " \u00DCberpr\u00FCfen Sie immer die Gr\u00F6\u00DFe von Dateien nach einem Download (eventuell wird auch eine Pr\u00FCfsumme angegeben). Gibt es Abweichungen, besteht die Gefahr unzul\u00E4ssiger Ver\u00E4nderungen \u2013 meist durch Viren verursacht. Solche Dateien sollten Sie sofort l\u00F6schen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Heruntergeladene Programme m\u00FCssen vor ihrer Installation immer mit einem aktuellen Virenschutzprogramm \u00FCberpr\u00FCft werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Gepackte (komprimierte) Dateien sollten Sie zuerst entpacken und auf Viren \u00FCberpr\u00FCfen. Die Entpackungsprogramme sind so zu konfigurieren, dass die zu entpackende Datei nicht automatisch startet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Pr\u00FCfen Sie bei der Installation neuer Software die Installationsoptionen genau: Viele Programme versuchen, zus\u00E4tzliche, oft unerw\u00FCnschte Software zu installieren. Sie k\u00F6nnen diese Zusatzprogramme bei der Installation abw\u00E4hlen, wenn Sie an der richtigen Stelle eingreifen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "5.4 Viereninfektion: Was tun?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 35: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Meist ist die Gefahr schon beseitigt, wenn der Computer Sie auf einen Virus oder ein anderes Schadprogramm aufmerksam macht. In diesem Fall ist der Virus bereits gel\u00F6scht oder isoliert bzw. unter Quarant\u00E4ne gestellt. Dennoch sollten Sie Ihre EDV-Verantwortlichen oder Vorgesetzten dar\u00FCber informieren. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Wenn allerdings Ihr System das Problem nicht beseitigen kann oder der Verdacht einer Infektion besteht: Speichern Sie Ihre offenen Dateien ab und wenden Sie sich sofort an die zust\u00E4ndigen EDV-Verantwortlichen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Was tun wenn keine kompetente IT-Fachkraft erreichbar ist?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Speichern Sie Ihre offenen Dateien und schalten Sie den Rechner ab. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " \u00DCberpr\u00FCfen Sie, ob die Rechner Ihrer Kolleginnen und Kollegen \u00E4hnliche Symptome zeigen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Recherchieren Sie von einem nicht befallenen Rechner aus im Internet. Verschiedene Websites, insbesondere von Herstellern von Antivirus-Software, enthalten Beschreibungen, wie Sie bestimmte Viren erkennen und entfernen k\u00F6nnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Verschiedene Antivirus-Programme enthalten bootf\u00E4hige CDs. Mit diesen kann der befallene PC gefahrlos gestartet und auf Virenbefall gepr\u00FCft werden. CDs mit derartigen Funktionen k\u00F6nnen auch aus dem Internet geladen und selbst gebrannt werden, das muss aber auf einem nicht befallenen Rechner erfolgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Verschiedene Websites bieten Online-Virenpr\u00FCfungen an. Bei Verdacht einer Infektion, d.h. wenn nicht w\u00E4hrenddessen konkrete Sch\u00E4den zu bef\u00FCrchten sind, kann der vermeintlich befallene PC getestet werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Begriffe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 38: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Dialer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Dialer sind Schadprogramme, die eine Telefonverbindung \u00FCber kostenpflichtige Mehrwertnummern aufbauen. Die Kosten f\u00FCr die Dialer-Verbindung betragen dabei mehrere Euro pro Minute. Die Aktivierung eines Dialers erfolgt in der Regel durch den User selbst, der dem Download oder der Installation eines Programms zustimmt. Davon betroffen sind insbesondere ungesch\u00FCtzte Smartphones.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Hoax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Als Hoaxes bezeichnet man Warnungen \u00FCber angebliche neue Computer-Viren, sensationelle Einkunftsm\u00F6glichkeiten und dergleichen, die in der Regel \u00FCber E-Mail verbreitet werden und die Empf\u00E4nger zur Weiterleitung an Andere auffordern. Bei diesen Warnungen handelt es sich in der Regel um Falschmeldungen oder Kettenbriefe, die verunsichern oder zu un\u00FCberlegten Handlungen verleiten sollen. Hoax-Mails und Kettenbriefe sollten daher am besten sofort gel\u00F6scht und keinesfalls weitergeleitet werden. N\u00E4here Informationen sind auf der Hoax-Liste der TU-Berlin unter http://hoax-info.tubit.tu-berlin.de/hoax/hoaxlist.shtml zu finden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Rootkit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Als Rootkit bezeichnet man Software bzw. eine Softwaretechnik, mit der ein System manipuliert werden kann, sodass bestimmte Dateien, Prozesse, Netzwerkverbindungen, Speicherbereiche nicht mehr angezeigt werden. Damit ist es m\u00F6glich, das Rootkit und verborgene Schadsoftware einerseits vor Virenscannern und andererseits vor den Computer-Anwenderinnen und -Anwendern zu verstecken.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Spyware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Als Spyware bezeichnet man Programme, die die User und/oder ihr Surfverhalten ohne deren Wissen ausspionieren. Diese Daten werden an den Hersteller der Software oder auch an Dritte, meist mit dem Zweck, personalisierte Werbung und Pop-ups einzublenden, weitergeleitet. Mittels Spyware k\u00F6nnen aber auch sensible pers\u00F6nliche Daten an Unbefugte \u00FCbertragen werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Viren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Viren sind nicht-selbst\u00E4ndige, in andere Programme oder Dateien eingebettete Programmroutinen, die sich selbst reproduzieren und dadurch von Anwenderinnen und Anwendern nicht kontrollierbare Manipulationen in Systembereichen, an anderen Programmen oder deren Umgebung vornehmen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Trojanische Pferde (Trojaner)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Trojanische Pferde (Trojaner) sind selbst\u00E4ndige Programme mit verdeckter Schadensfunktion, ohne Selbstreproduktion. Trojanische Pferde dienen vor allem dazu, Computer auszuspionieren. Der Trojaner verdankt seinen Namen dem Umstand, dass die Schadensroutinen oft in scheinbar n\u00FCtzlichen Programmen versteckt sind. Ein Programm, das zum Zweck der Viren-Entfernung aus dem Internet heruntergeladen wird, kann unter Umst\u00E4nden genau das Gegenteil bewirken. Es ist daher immer auch notwendig, die Seriosit\u00E4t der Quelle, von der man Programme bezieht, zu \u00FCberpr\u00FCfen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "W\u00FCrmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " W\u00FCrmer sind selbst\u00E4ndige, selbstreproduzierende Programme, die sich in einem System (vor allem in Netzen) ausbreiten. Zu diesem Zweck verwenden viele W\u00FCrmer das Adressbuch des infizierten Rechners und versenden Mails mit gef\u00E4lschten Absenderadressen. Das \u00D6ffnen solcher Mails kann bei einem ungesch\u00FCtzten System zu einer Infektion f\u00FChren.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2FwaXRlbDUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImthcGl0ZWw1LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgd2lkdGg6IDEwMCVcbiJdfQ== */"] });


/***/ }),

/***/ "Gwgn":
/*!**************************************************!*\
  !*** ./src/app/pages/training/TrainingsPhase.ts ***!
  \**************************************************/
/*! exports provided: TrainingsPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsPhase", function() { return TrainingsPhase; });
var TrainingsPhase;
(function (TrainingsPhase) {
    TrainingsPhase["Vortraining"] = "Vortrainings-Assessment";
    TrainingsPhase["VortrainingFeedback"] = "Vortrainings-Assessment Feedback";
    TrainingsPhase["Inhalte"] = "Inhalte";
    TrainingsPhase["Ueben"] = "\u00DCbungsaufgabe";
    TrainingsPhase["Nachtraining"] = "Nachtrainings-Assessment";
    TrainingsPhase["NachtrainingFeedback"] = "Nachtrainings-Assessment Feedback";
    TrainingsPhase["Empfehlung"] = "Empfehlung";
    TrainingsPhase["Beendet"] = "Beendet";
})(TrainingsPhase || (TrainingsPhase = {}));


/***/ }),

/***/ "ItLh":
/*!**************************************************************!*\
  !*** ./src/app/pages/inhalte/kapitel4/kapitel4.component.ts ***!
  \**************************************************************/
/*! exports provided: Kapitel4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kapitel4Component", function() { return Kapitel4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Kapitel4Component {
    constructor() { }
    ngOnInit() {
    }
}
Kapitel4Component.ɵfac = function Kapitel4Component_Factory(t) { return new (t || Kapitel4Component)(); };
Kapitel4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Kapitel4Component, selectors: [["app-kapitel4"]], decls: 149, vars: 0, consts: [[1, "kapitel-description"], [1, "text-normal"], [1, "kapitel-reference"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=26", "target", "_blank"], [1, "kapitel-hinweise"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=28", "target", "_blank"], [1, "inhalte-exkurs-box"], ["href", "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/passwortdiebstahl-durch-phishing_node.html", "target", "_blank"], ["href", "https://www.bsi.bund.de/SharedDocs/Bilder/DE/BSI/Infografiken/Phishing_E_Mails_erkennen.jpg?__blob=normal&v=1", "target", "_blank", 1, "img-link"], ["src", "https://www.bsi.bund.de/SharedDocs/Bilder/DE/BSI/Infografiken/Phishing_E_Mails_erkennen.jpg?__blob=normal&v=1", "alt", "<BSI phishing infografik>", 1, "brightness"], [1, "text-center"], ["href", "https://www.bsi.bund.de/SharedDocs/Bilder/DE/BSI/Phishing/phishing_amazon.png?__blob=normal&v=1", "target", "_blank", 1, "img-link"], ["src", "https://www.bsi.bund.de/SharedDocs/Bilder/DE/BSI/Phishing/phishing_amazon.png?__blob=normal&v=1", "alt", "phishing example"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=29", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=38", "target", "_blank"]], template: function Kapitel4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "4. E-Mails und Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sicherer Umgang mit unerw\u00FCnschten Mails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Daten und Informationen werden immer h\u00E4ufiger per E-Mail ausgetauscht. Dadurch landen aber auch Spam-, Hoax- oder Phishing-Mails sowie mit Schadprogrammen verseuchte Nachrichten im Posteingangs-Ordner. Solche unerw\u00FCnschte Nachrichten \u2013 mit mehr oder weniger gef\u00E4hrlichem Inhalt \u2013 machen ca. zwei Drittel des weltweiten E-Mail-Aufkommens aus.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4.1 Umgang mit unerw\u00FCnschten E-Mails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 26: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vor dem \u00D6ffnen eingehender E-Mails sollten Sie Folgendes beachten:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " E-Mails im HTML-Format k\u00F6nnen Skripte mit Schadensfunktion enthalten. Achten Sie auf die Vertrauensw\u00FCrdigkeit des Absenders und \u00F6ffnen Sie keine E-Mails, wenn Ihnen Absender oder Betreffzeile verd\u00E4chtig erscheinen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Die meisten Schadprogramme werden aber \u00FCber Dateien, die als Anhang angef\u00FCgt sind, \u00FCbertragen. Office-Dokumente (.docx, .xlsx, .pptx etc.), PDF-Dateien (.pdf), Bild-schirmschoner (.scr) und viele andere Dateitypen k\u00F6nnen Viren enthalten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00D6ffnen Sie daher niemals Dateianh\u00E4nge, die Ihnen verd\u00E4chtig vorkommen. Auch bei vermeintlich bekannten und vertrauensw\u00FCrdigen Absendern ist zu pr\u00FCfen: Passt der Text der E-Mail zum Absender (englischer Text von deutschsprachigem Absender, unsinniger Text, fehlender Bezug zu aktuellen Vorg\u00E4ngen etc.)? Erwarten Sie die beigelegten Dateien und passen sie zum Absender, oder kommen sie v\u00F6llig unerwartet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Oft ist die Art des Dateianhangs getarnt und \u00FCber das Icon (z.B. das Word-Symbol) nicht sicher erkennbar. Sie k\u00F6nnen die Dateianh\u00E4nge aber problemlos z.B. auf Ihren Desktop kopieren, um sie zu pr\u00FCfen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Kein \u201EDoppelklick\u201C auf ausf\u00FChrbare Programme (.com, .exe) oder Scripts (.vbs, .bat etc.)! Besonders verd\u00E4chtig sind doppelte, \u201Emerkw\u00FCrdige\u201C Dateinamen-Erweiterungen wie beispielsweise .jpg.vbs oder .gif.exe: Sie sollen den Empf\u00E4ngern eine harmlose Bilddatei vort\u00E4uschen. Tats\u00E4chlich handelt es sich jedoch sehr oft um ein ausf\u00FChrbares Schadprogramm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Unerw\u00FCnschte E-Mails k\u00F6nnen oft schon daran erkannt werden, dass sie auff\u00E4llige Rechtschreib- oder Grammatikfehler aufweisen. H\u00E4ufig stammen sie aus anderen Sprachregionen und wurden nur durch maschinelle Programme \u00FCbersetzt. Derartige Fehler m\u00FCssen als Warnsignal gewertet und die betreffende E-Mail mit besonderer Vorsicht behandelt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Ein weiteres Erkennungsmerkmal betr\u00FCgerischer E-Mails sind bestimmte \u201EReizworte\u201C (Offene Rechnung, Letzte Mahnung, Konto gesperrt, etc.). Offenbar sollen die Empf\u00E4ngerinnen und Empf\u00E4nger damit unter Druck gesetzt und zu unbedachten Handlungen verleitet werden. Bewahren Sie also die Ruhe und pr\u00FCfen Sie die E-Mail besonders sorgf\u00E4ltig, bevor Sie einen Dateianhang \u00F6ffnen oder einen Link anklicken! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00D6ffnen Sie keine E-Mails mit Spa\u00DFprogrammen, da diese oft Schadfunktionen enthalten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Sogenannte Phishing-Mails, die zur \u00DCbermittlung von pers\u00F6nlichen Online-Banking- Daten oder Passw\u00F6rtern (z.B. PIN oder TAN) auffordern, m\u00FCssen gel\u00F6scht werden. Die angeforderten, vertraulichen Informationen d\u00FCrfen Sie auf keinen Fall weitergeben. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Oftmals kann in einem E-Mail ein Link angeklickt werden, um eine Webseite aufzurufen. Seien Sie dabei vorsichtig: In betr\u00FCgerischen E-Mails wird diesen Links oft eine v\u00F6llig andere Internet-Adresse hinterlegt, als im Mail zu sehen ist. Beim Anklicken wird dann eine gef\u00E4lschte Phishing-Webseite aufgerufen oder sogar Schadsoftware installiert. Sicherer ist es, den Link mittels \u201EHyperlink kopieren\u201C in den Browser zu \u00FCbertragen und ihn vor dem Aufrufen noch einmal zu \u00FCberpr\u00FCfen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Beantworten Sie keine Spam-Mails! Die R\u00FCckmeldung best\u00E4tigt dem Spam-Versender nur die G\u00FCltigkeit Ihrer Mail-Adresse und erh\u00F6ht dadurch Ihr Risiko, weitere Zusendungen zu erhalten. Das Abbestellen von E-Mails ist nur bei seri\u00F6sen Zustellern sinnvoll. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Benachrichtigen Sie auch Ihre Kolleginnen und Kollegen \u00FCber verd\u00E4chtige Zusendungen. Besprechen Sie die aktuellen E-Mails, die Sie als Phishing-Versuche oder Virus-Mails erkannt haben, um gemeinsam die typischen Kennzeichen kennenzulernen. Sie k\u00F6nnen auf diese Weise sehr rasch Ihre Erkennungsf\u00E4higkeit trainieren und verbessern. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Auch bei ausgehenden E-Mails sollte Folgendes beachtet werden (um nicht unabsichtlich Viren zu verteilen oder in Verdacht zu geraten, Spam-Mails zu versenden):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Pr\u00FCfen Sie, ob E-Mails im Ausgangs-Postfach stehen, die nicht von Ihnen verfasst wurden. Dies k\u00F6nnte auf Viren hindeuten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Versenden Sie keine E-Mails mit z.B. Spa\u00DFprogrammen, die Computer-Viren enthalten k\u00F6nnten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Folgen Sie nicht den Aufforderungen zur Weiterleitung von Warnungen, Mails oder Datei-anh\u00E4ngen an Freunde, Bekannte oder Kolleginnen und Kollegen. Es handelt sich meist um Falschmeldungen (Hoaxes), die dann als Kettenbriefe das Mail-System belasten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Folgen Sie nicht den Aufforderungen zur Weiterleitung von Warnungen, Mails oder Datei-anh\u00E4ngen an Freunde, Bekannte oder Kolleginnen und Kollegen. Es handelt sich meist um Falschmeldungen (Hoaxes), die dann als Kettenbriefe das Mail-System belasten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Wenn Sie ein Mail an viele Empf\u00E4nger schicken, die untereinander nicht bekannt sind, setzen Sie deren Adressen in \u201EBCC\u201C. Damit ist sichergestellt, dass kein Empf\u00E4nger die E-Mail-Adressen der anderen Adressaten sehen und missbr\u00E4uchlich verwenden kann. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Nach \u00F6sterreichischer Rechtslage d\u00FCrfen Sie keine E-Mails an mehr als 50 E-Mail-Empf\u00E4nger (Massen-E-Mail) oder zu Zwecken der Direktwerbung (Werbe-E-Mail) versenden, sofern Sie nicht vorher deren Zustimmung eingeholt haben. N\u00E4here Informationen zu den rechtlichen Rahmenbedingungen f\u00FCr Aussendungen und Werbe-E-Mails finden Sie auf der Website der Wirtschaftskammer.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "4.2 Phishing-Mails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 28: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Phishing ist eine spezielle Form des Social Engineering, bei der es darum geht, Zugangsdaten zu Online-Banking, Online-Zahlungssystemen, Web-Auktionsplattformen etc. zu \u201Eergaunern\u201C. Dies geschieht meist in Form von E-Mails, die den Empf\u00E4ngerinnen und Empf\u00E4ngern vorgaukeln, dass aufgrund von Wartungsarbeiten oder Sicherheits\u00FCberpr\u00FCfungen die Eingabe ihrer Anmeldeinformationen (Login und Passwort bzw. im Bankenbereich PIN und TAN) dringend erforderlich ist. Manchmal wird auch zus\u00E4tzlich Druck ausge\u00FCbt, in dem die Schlie\u00DFung des Zugangs angedroht wird, sollte nicht binnen einer gewissen Frist der Aufforderung entsprochen werden. Ignorieren Sie grunds\u00E4tzlich alle Mails, die diesem Muster folgen. Die Wahrscheinlichkeit, dass es sich dabei um ein echtes Mail handelt, ist verschwindend gering.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Exkurs: Phishing \u2013 Vorsicht vor der Tarnung!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/passwortdiebstahl-durch-phishing_node.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Als seri\u00F6se Bank, Internetanbieter oder anderer Dienstleister getarnt, fordern Spam-E-Mails mit gef\u00E4lschtem Absender die Empf\u00E4nger zum Beispiel zu einer vorgeblich notwendigen Aktualisierung ihrer pers\u00F6nlichen Daten auf. Als Vorwand f\u00FCr die Best\u00E4tigung von Kontoinformationen wird dann zum Beispiel der baldige Ablauf einer Kreditkarte genannt. Oder das Passwort m\u00FCsse wegen eines angeblichen Sicherheitsvorfalls erneuert werden. Dabei spekulieren die Kriminellen darauf, dass sich unter den Empf\u00E4ngern einer Spam-Welle stets gen\u00FCgend Kunden der im Absender genannten Organisation befinden. Kein Wunder, dass der Name gro\u00DFer Bankengruppen wie die Sparkassen oder Volks- und Raiffeisenbanken so h\u00E4ufig f\u00FCr Phishing-Spam missbraucht wird. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Phishing: Nachahmung von Websites bis zur Perfektion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Sowohl die Phishing-Mail selbst als auch die Website, auf die ein Link im Text verweist, sind dabei zumeist sorgf\u00E4ltig nachgeahmt. Cyber-Kriminelle verstehen ihr Handwerk. Allzu oft gelingt es ihnen, durch professionelle Imitation des Corporate Designs inklusive Logo, Farbgebung und Schriftarten der jeweiligen Organisation \u00FCberzeugend Echtheit vorzut\u00E4uschen. Arglose Empf\u00E4nger lassen sich so leichter dazu verleiten, auf einen Link in der Mail zu klicken \u2013 zumal er sich oftmals hinter einem perfekt designten Button verbirgt. Jetzt haben die Betr\u00FCger ihre Opfer genau da, wo sie sie hinhaben wollen: auf der gef\u00E4lschten Website einer Organisation, die \u00FCberall als vertrauensw\u00FCrdig anerkannt ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Vorsicht, Phishing! Betr\u00FCgerische E-Mails erkennen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "(Quelle Bundesamt f\u00FCr Sicherheit in der Informationstechnik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Exkurs: Aktuelle Beispiele f\u00FCr Phishing-Angriffe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/passwortdiebstahl-durch-phishing_node.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " E-Mail vom Onlineh\u00E4ndler: \"Ihr Konto wurde eingeschr\u00E4nkt!\" \u2013 mit dieser Botschaft kursieren aktuell Phishing-E-Mails, die scheinbar von Amazon stammen. Unter dem Vorwand, Ihre Daten vor Missbrauch zu sch\u00FCtzen, versuchen Kriminelle, Sie zur Eingabe vertraulicher Daten zu bewegen. Denn damit k\u00F6nnen sie auf fremder Leute Kosten Waren bestellen. Wiederum droht bei Nichteingabe angeblich eine Kontosperrung. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "(Quelle https://www.verbraucherzentrale.de)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Phishing-Betr\u00FCger gehen auch in der zweiten Phase des Betrugs nach einem speziellen Muster vor: Sind sie im Besitz von PIN und TAN, k\u00F6nnen sie dennoch das Geld nicht einfach auf ihr Konto \u00FCberweisen, denn das w\u00E4re leicht nachvollziehbar. Also werden sogenannte Finanzagenten angeworben, und hier verbirgt sich die zweite Gefahr beim Phishing: Finanzagenten werden \u00FCber Spam-Mails angeworben, in denen ein Gewinn \u00FCber einen bestimmten Geldbetrag zugesagt wird. Reagiert ein Mail-Empf\u00E4nger und gibt seine Kontodaten f\u00FCr die \u00DCberweisung bekannt, wird ihm ein Betrag \u00FCberwiesen, der den Gewinn bei Weitem \u00FCbersteigt (z.B.: USD 12.305,- statt \u201Egewonnener\u201C USD 123,05). Kurz nach der \u00DCberweisung erfolgt wieder eine Kontaktaufnahme, in der auf diesen Fehler hingewiesen wird. Der Empf\u00E4nger darf dann f\u00FCr die Unannehmlichkeiten einen zus\u00E4tzlichen Betrag behalten, soll aber den restlichen Differenzbetrag abheben und per internationalem Bargeldtransfer (Western Union, Moneygram, Bitcoin etc.) \u00FCberweisen. Notfalls wird auch Druck ausge\u00FCbt und suggeriert, dass die Versenderin oder der Versender aufgrund dieses Fehlers den Job verlieren k\u00F6nnte. Das gleiche System wird auch angewandt, wenn Sie \u00FCber ein Online-Auktionshaus eine Ware verkaufen und Ihnen daf\u00FCr \u201Eirrt\u00FCmlich\u201C ein zu hoher Betrag \u00FCberwiesen wird. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Als unwissentlich angeworbener Finanzagent verlieren Sie zwar nicht Ihr eigenes Geld, machen sich aber strafbar und k\u00F6nnen davon ausgehen, dass Sie zumindest sehr viel \u00C4rger und Unannehmlichkeiten haben werden und m\u00F6glicherweise sogar regresspflichtig sind. Ignorieren Sie also alle Aufforderungen, \u201Eirrt\u00FCmlich\u201C auf Ihrem Konto geparktes Geld mittels Bargeldtransfer-Services zu versenden. Wenden Sie sich im Zweifelsfall an ihr Bankinstitut. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Phishing-Mails sind oftmals sehr gut gemacht und t\u00E4uschen selbst Experten. Wenn Sie im Internet nach \u201EPhishing Test\u201C suchen, finden Sie verschiedene Ratgeber, worauf Sie achten m\u00FCssen, um einen Betrugsversuch zu erkennen. Auf diesen Websites k\u00F6nnen Sie Ihr Unterscheidungsverm\u00F6gen auch anhand konkreter E-Mails \u00FCberpr\u00FCfen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "4.3 Gef\u00E4lschte Absenderadressen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 29: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Wenn Sie E-Mails bekommen, die von bekannten Absendern stammen, aber unpassende Inhalte enthalten, liegt das oft an einer gef\u00E4lschten Absenderadresse. Der angezeigte Absendername l\u00E4sst sich leicht \u00E4ndern und entspricht oft nicht dem des wirklichen Versenders. Auch Schadprogramme k\u00F6nnen auf E-Mail-Adressb\u00FCcher zugreifen und unbemerkt Nachrichten an alle darin gespeicherten E-Mail-Adressen versenden. Als Absender wird h\u00E4ufig der Name einer im Adressbuch gespeicherten Person verwendet.Sollten Sie darauf angesprochen werden, dass Sie dubiose E-Mails versenden, sollten Sie sofort reagieren: Lassen Sie sich die angeblich von Ihnen versandten Nachrichten vorlegen. Eine Expertin oder ein Experte kann diese pr\u00FCfen, um zu kl\u00E4ren, von wem sie tats\u00E4chlich stammen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "4.4 Sparsamer einsatz der eigenen Mail-Adresse im Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 29: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Vorsicht beim Ausf\u00FCllen von Webformularen: H\u00E4ufig f\u00FChrt das Eintragen Ihrer E-Mail-Adresse oder Ihrer pers\u00F6nlichen Daten zu einer Flut von Werbe- bzw. Spam-Mails. Der Handel mit Mail-Adressen wird in verschiedenen L\u00E4ndern kaum kontrolliert. Pr\u00FCfen Sie auch hier die Vertrauensw\u00FCrdigkeit der Website!Ein guter Ausweg ist es, bei einem Anbieter von Gratis-E-Mail (z.B. http://www.gmx.at, http://www.yahoo.at, http://www.gmail.com, http://www.live.com etc.) einen kostenlosen E-Mail-Account anzulegen, den Sie ausschlie\u00DFlich f\u00FCr derartige Registrierungen verwenden. Damit haben Sie zus\u00E4tzlich die M\u00F6glichkeit, private und gesch\u00E4ftliche E-Mails zu trennen. So k\u00F6nnen auch Probleme beim Ausscheiden aus dem Unternehmen und der anschlie\u00DFenden Deaktivierung Ihrer E-Mail-Adresse vermieden werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Begriffe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 38: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Phishing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Phishing ist ein Kunstwort aus den beiden Begriffen \u201EPassword\u201C und \u201EFishing\u201C und bezeichnet den Versuch mittels gef\u00E4lschter E-Mails an fremde Nutzerdaten (Login, Passwort, TAN etc.) zu gelangen. Normalerweise werden die Empf\u00E4nger solcher Mails unter Vorspiegelung falscher Tatsachen (Userdaten gingen verloren, Neuidentifikation ist notwendig, ...) aufgefordert, die Webseite einer Bank (Online Shop, Kreditkarteninstitut, Auktionshaus etc.) aufzusuchen und dort ihre Zugangsberechtigungen einzutippen. Diese Webseiten sind ebenfalls gef\u00E4lscht und sehen den Originalen zum Verwechseln \u00E4hnlich. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Die dort eingetippten Daten landen nat\u00FCrlich nicht bei der eigenen Bank, sondern auf den Servern von Betr\u00FCgern, die dann mit den Nutzerdaten Transaktionen zum Schaden der User durchf\u00FChren. Grunds\u00E4tzlich fordert kein seri\u00F6ses Unternehmen seine Kunden auf, seine User-daten \u00FCber das Internet zu best\u00E4tigen. Es sind also alle diesbez\u00FCglichen Mails zu ignorieren. In Zweifelsf\u00E4llen sollte man sich telefonisch mit dem (vermeintlichen) Absender in Verbindung setzen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Spam:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Als Spam bezeichnet man unerw\u00FCnschte Werbemails, die mittlerweile rund 90 Prozent des gesamten E-Mail-Verkehrs ausmachen. Auch bei kleineren Unternehmen ist es durchaus m\u00F6glich, mehrere hundert Spam-Mails pro Tag zu erhalten. Gef\u00E4hrlich ist Spam grunds\u00E4tzlich nicht, allerdings geht beim L\u00F6schen der Werbe-Mails wertvolle Arbeitszeit verloren. Mittels spezieller Spam-Filter k\u00F6nnen entweder bereits auf Provider-/Mailserver-Ebene oder auch erst am eigenen Rechner unerw\u00FCnschte Mails gefiltert und gel\u00F6scht werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.brightness[_ngcontent-%COMP%] {\n  filter: brightness(115%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2FwaXRlbDQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSiIsImZpbGUiOiJrYXBpdGVsNC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgLi4vLi4vLi4vLi4vdmFyaWFibGVzXG46aG9zdFxuICAgIGhlaWdodDogMTAwJVxuICAgIHdpZHRoOiAxMDAlXG5cbi5icmlnaHRuZXNzXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpXG4iXX0= */"] });


/***/ }),

/***/ "Mi8t":
/*!**************************************************************!*\
  !*** ./src/app/pages/inhalte/kapitel2/kapitel2.component.ts ***!
  \**************************************************************/
/*! exports provided: Kapitel2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kapitel2Component", function() { return Kapitel2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Kapitel2Component {
    constructor() { }
    ngOnInit() {
    }
}
Kapitel2Component.ɵfac = function Kapitel2Component_Factory(t) { return new (t || Kapitel2Component)(); };
Kapitel2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Kapitel2Component, selectors: [["app-kapitel2"]], decls: 140, vars: 0, consts: [[1, "kapitel-description"], [1, "text-normal"], [1, "kapitel-reference"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=18", "target", "_blank"], [1, "kapitel-hinweise"], [1, "inhalte-exkurs-box"], ["href", "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html", "target", "_blank"], ["href", "https://www.bsi.bund.de/SharedDocs/Bilder/DE/BSI/Aktuell/Sicheres_Passwort_passwoerter_merken_pizza.jpg?__blob=normal&v=1", "target", "_blank", 1, "img-link"], ["src", "https://www.bsi.bund.de/SharedDocs/Bilder/DE/BSI/Aktuell/Sicheres_Passwort_passwoerter_merken_pizza.jpg?__blob=normal&v=1", "alt", " "], [1, "text-center"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=19", "target", "_blank"], ["href", "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html", "target", "_blank"], ["href", "http://keepass.info/", "target", "_blank"]], template: function Kapitel2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2. Passw\u00F6rter \u2013 richtig ausw\u00E4hlen und verwalten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Passw\u00F6rter dienen dem Schutz von IT-Ger\u00E4ten und Daten und verhindern unbefugte Zugriffe. Deswegen sind die richtige Auswahl und der richtige Umgang wichtig: Passw\u00F6rter m\u00FCssen komplex sein und geheimgehalten werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2.1 Die richtige Auswahl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 18: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Beachten Sie bei der Auswahl Ihres Passwortes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ein gutes Passwort besteht aus mindestens zehn verschiedenartigen Zeichen. Es muss Gro\u00DFbuchstaben, Kleinbuchstaben, Ziffern und/oder Sonderzeichen (Satzzeichen, W\u00E4hrungssymbole etc.) enthalten. Nur Klein- und Gro\u00DFbuchstaben zu verwenden ist unsicher! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Niemals Namen, Vornamen, Geburtsdaten, Tel.-Durchwahlen, KFZ-Kennzeichen etc. verwenden. Diese werden bei Angriffen zuerst ausprobiert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Verwenden Sie keine Begriffe aus einem W\u00F6rterbuch (auch nicht in einer anderen Sprache). Es gibt Programme, die Wortlisten mit mehreren tausend Begriffen sofort abrufen und so m\u00F6gliche Passw\u00F6rter finden. Auch Eigennamen, geografische Begriffe etc. d\u00FCrfen nicht verwendet werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Trivial-Passw\u00F6rter (qwertz, aaaaa, 08/15, 4711 etc.) sind ebenfalls ungeeignet. Sie k\u00F6nnen von Anderen leicht beim Beobachten der Passworteingabe erkannt werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Exkurs: L\u00E4nge und Komplexit\u00E4t: zwei entscheidende Merkmale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ein starkes Passwort kann \"k\u00FCrzer und komplex\" oder \"lang und weniger komplex\" sein. Doch wie lang und wie komplex sollte es mindestens sein? Folgende Beispiele geben Orientierung: Ein Passwort ist sicher, wenn es beispielsweise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 20 bis 25 Zeichen lang ist und zwei Zeichenarten genutzt werden (beispielsweise eine Folge von W\u00F6rtern). Es ist dann lang und weniger komplex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 8 bis 12 Zeichen lang ist und vier Zeichenarten genutzt werden. Es ist dann k\u00FCrzer und komplex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 8 Zeichen lang ist, drei Zeichenarten genutzt werden und es zus\u00E4tzlich durch eine Mehr-Faktor-Authentisierung abgesichert ist (beispielsweise durch einen Fingerabdruck, eine Best\u00E4tigung per App oder eine PIN). Dies ist generell empfehlenswert. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "(Quelle Bundesamt f\u00FCr Sicherheit in der Informationstechnik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2.2 Der richtige Umgang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 19: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Geben Sie Ihre Passw\u00F6rter \u2013 insbesondere das Passwort f\u00FCr das Anmelden am Computer \u2013 nicht an Ihre Kolleginnen und Kollegen oder an Ihre Vorgesetzten weiter. Sollte die Weitergabe unbedingt notwendig sein, \u00E4ndern Sie Ihr Passwort anschlie\u00DFend sofort. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Setzen Sie f\u00FCr verschiedene Anmeldungen verschiedene Passw\u00F6rter ein! [...] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Auf keinen Fall d\u00FCrfen Sie das gleiche Passwort f\u00FCr die Anmeldung am Firmen-PC und Anmeldungen im Internet (z.B. dem E-Mail-Konto bei einem Internet-Provider) verwenden. Wenn es in falsche H\u00E4nde ger\u00E4t, kann es gegen Ihr Unternehmen eingesetzt werden: Es gibt F\u00E4lle, wo Benutzer auf Webseiten gelockt und zur Angabe einer E-Mail-Adresse und eines Passworts aufgefordert wurden \u2013 in der (kriminellen) Hoffnung, dass das Opfer aus Bequemlichkeit keine unterschiedlichen Passw\u00F6rter verwendet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Exkurs: No-Go: Passw\u00F6rter verschicken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " In der Regel werden E-Mails unverschl\u00FCsselt versandt und k\u00F6nnen so von Dritten auf ihrem Weg durch das Internet mitgelesen werden. Zudem k\u00F6nnen E-Mails im Internet verloren gehen oder herausgefiltert werden. Der Absender einer E-Mail hat daher keine Gewissheit, dass seine Nachricht den gew\u00FCnschten Empf\u00E4nger auch wirklich erreicht hat. Aus diesen Gr\u00FCnden sollten Sie Passw\u00F6rter nicht per E-Mail versenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Grunds\u00E4tzlich gilt zudem: Wenn Sie Ihre Passw\u00F6rter verschicken bzw. an Dritte weitergeben, verlieren Sie damit in gewisser Weise die Kontrolle, weil diese Dritten nun theoretisch die entsprechenden Dienste nutzen und die dort hinterlegten Informationen \u00E4ndern k\u00F6nnen. So haben Sie sich umsonst die M\u00FChe f\u00FCr ein gutes Passwort gemacht. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sollten Sie Passw\u00F6rter notieren?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Wer viele Online-Accounts hat, f\u00FCr den empfiehlt sich ein Passwort-Verwaltungsprogramm wie zum Beispiel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "keepass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " (eine deutsche Sprachdatei f\u00FCr dieses englischsprachige Programm gibt es auf der Herstellerseite). Diese Programme k\u00F6nnen neben der Passwort-Verwaltung auch starke Passw\u00F6rter generieren (ber\u00FCcksichtigen Sie bei den Einstellm\u00F6glichkeiten zur Passwortgenerierung unsere oben genannten Mindestempfehlungen). Sie m\u00FCssen sich dann nur noch ein gutes Masterpasswort \u00FCberlegen und merken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "2.3 Passwort-Manager verwenden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 19: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Mit einem Passwort-Manager k\u00F6nnen mehrere, unterschiedliche Passw\u00F6rter verwaltet und durch ein einziges Master-Passwort gesch\u00FCtzt werden. Dieses Passwort muss sicher sein, also zumindest die obigen Kriterien erf\u00FCllen. Manche Passwort-Manager generieren auch auf Knopfdruck sichere Passw\u00F6rter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Wenn Sie in Ihrem Internet-Browser einen integrierten Passwort-Manager verwenden, aktivieren Sie bitte die Option \u201EMaster Passwort\u201C. Dann k\u00F6nnen Sie ein sicheres Master-Passwort w\u00E4hlen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Sie finden im Internet eine Reihe kostenloser Passwort-Manager. Verschiedene Websites, auf denen Sie den Sicherheitsgrad Ihrer Passw\u00F6rter testen und \u00FCberpr\u00FCfen k\u00F6nnen, sind mit einer Internet-Suche nach \u201EPassworttest\u201C leicht zu finden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Exkurs: Passw\u00F6rter verwalten mit dem Passwort-Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Vorteile des Passwort-Managers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Verwahren von Passw\u00F6rtern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " und Benutzernamen mittels Verschl\u00FCsselung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Unterst\u00FCtzung bei der Passwortvergabe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " z. B. durch die Generierung starker Kombinationen und Kennzeichnung schon verwendeter oder schwacher Begriffe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Warnung vor gef\u00E4hrdeten Websites und m\u00F6glichen Phishing-Attacken ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ", z. B. wenn sich die URL der aufgerufenen Webseite von der gespeicherten unterscheidet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Synchronisieren m\u00F6glich: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Wer Online-Dienste auf mehreren Ger\u00E4ten wie Computer und Smartphone mit unterschiedlichen Betriebssystemen nutzen m\u00F6chte, kann ein Programm verwenden, das diese synchronisiert. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Nachteile des Passwort-Managers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Beim Vergessen des Masterpassworts sind im schlechtesten Fall alle Daten verloren: Das bedeutet oftmals viel Arbeit, da die einzelnen Zug\u00E4nge zu den Konten individuell wiederhergestellt werden m\u00FCssen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Alle Passw\u00F6rter k\u00F6nnen auf einmal gestohlen werden, sollte ein Cyber-Angriff auf einen Passwort-Manager erfolgreich sein. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Bei cloudbasierten Diensten vertrauen Sie den Zugang zu all Ihren sensiblen Daten in der Regel einem Unternehmen an. Hier lohnt sich ein Blick in die AGB und Datenschutzerkl\u00E4rungen des jeweiligen Herstellers. Die Informationen \u00FCber den Standort des Cloud-Dienste-Anbieters und der Server geben Auskunft dar\u00FCber, welchem Datenschutzrecht die Daten unterworfen sind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Lohnt sich ein Passwort-Manager?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Ja, in der Regel lohnt sich der Einsatz eines Passwort-Managers. Es ist in jedem Fall besser, als g\u00E4ngige Passw\u00F6rter wiederholt zu benutzen. Die konkrete Entscheidung dar\u00FCber, welches Programm genutzt wird, erfordert ein individuelles Abw\u00E4gen der jeweiligen Nutzung. Es geht dabei auch um die Einsch\u00E4tzung des damit verbundenen Risikos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2FwaXRlbDIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImthcGl0ZWwyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgd2lkdGg6IDEwMCVcbiJdfQ== */"] });


/***/ }),

/***/ "Nn0d":
/*!***************************************************!*\
  !*** ./src/app/pages/pruefung/PruefungsPhasen.ts ***!
  \***************************************************/
/*! exports provided: PruefungsPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruefungsPhase", function() { return PruefungsPhase; });
var PruefungsPhase;
(function (PruefungsPhase) {
    PruefungsPhase["Pruefung"] = "Pr\u00FCfung";
    PruefungsPhase["Feedback"] = "Feedback";
    PruefungsPhase["Beendet"] = "Beendet";
})(PruefungsPhase || (PruefungsPhase = {}));


/***/ }),

/***/ "PAJg":
/*!*****************************************************!*\
  !*** ./src/app/services/model-converter.service.ts ***!
  \*****************************************************/
/*! exports provided: ModelConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelConverterService", function() { return ModelConverterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _type_check_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-check.service */ "t4yD");


class ModelConverterService {
    constructor(typeCheck) {
        this.typeCheck = typeCheck;
    }
    convertAssessmentToResults(enthalteneSzenarien, antworten) {
        let szenarioAntworten = [];
        for (let szenarioID of enthalteneSzenarien) {
            let szenario = this.findSzenarioById(szenarioID, antworten);
            if (this.typeCheck.isSzenarioMCFrageBeantwortet(szenario)) {
                szenarioAntworten.push({
                    szenarioID: szenario.szenarioID,
                    korrekt: this.isMCFrageKorrektBeantwortet(szenario)
                });
            }
            else if (this.typeCheck.isSzenarioZuordnungBeantwortet(szenario)) {
                szenarioAntworten.push({
                    szenarioID: szenario.szenarioID,
                    korrekt: this.isZuordnungKorrekt(szenario)
                });
            }
            else {
                szenarioAntworten.push({
                    szenarioID: szenarioID,
                    korrekt: false
                });
            }
        }
        return szenarioAntworten;
    }
    isMCFrageKorrektBeantwortet(szenario) {
        for (let antwort of szenario.antworten) {
            if (antwort.korrekt && !szenario.ausgewaehlt.has(antwort.antwortID)) {
                return false;
            }
            else if (!antwort.korrekt && szenario.ausgewaehlt.has(antwort.antwortID)) {
                return false;
            }
        }
        return true;
    }
    isZuordnungKorrekt(szenario) {
        for (let eintrag of szenario.eintraege) {
            if (eintrag.begriff != szenario.zugeordnet.get(eintrag.eintragID)) {
                return false;
            }
        }
        return true;
    }
    findSzenarioById(szenarioID, antworten) {
        for (let frage of antworten) {
            if (frage !== undefined && frage.szenarioID === szenarioID) {
                return frage;
            }
        }
        return undefined;
    }
}
ModelConverterService.ɵfac = function ModelConverterService_Factory(t) { return new (t || ModelConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_type_check_service__WEBPACK_IMPORTED_MODULE_1__["TypeCheckService"])); };
ModelConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelConverterService, factory: ModelConverterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RD76":
/*!***********************************!*\
  !*** ./src/app/model/Training.ts ***!
  \***********************************/
/*! exports provided: Training */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Training", function() { return Training; });
class Training {
    constructor(assessmentID, vortrainingSzenarien, nachtrainingSzenarien) {
        this.assessmentID = assessmentID;
        this.vortrainingSzenarien = vortrainingSzenarien;
        this.nachtrainingSzenarien = nachtrainingSzenarien;
        this.aktuellesSzenario = 0;
        this.vortrainingBeantwortet = Array(vortrainingSzenarien.length);
        this.nachtrainingBeantwortet = Array(nachtrainingSzenarien.length);
    }
    getVortrainingSzenarioById(id) {
        for (let frage of this.vortrainingBeantwortet) {
            if (frage !== undefined && frage.szenarioID === id) {
                return frage;
            }
        }
        return undefined;
    }
    getNachtrainingSzenarioById(id) {
        for (let frage of this.nachtrainingBeantwortet) {
            if (frage !== undefined && frage.szenarioID === id) {
                return frage;
            }
        }
        return undefined;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "content-screen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 2%;\n  bottom: 2%;\n  right: 2%;\n  left: 2%;\n  display: flex;\n  justify-content: space-around;\n  align-items: stretch;\n  height: 96%;\n  width: 96%;\n}\n\n@media only screen and (max-width: 850px) {\n  [_nghost-%COMP%] {\n    top: 1%;\n    bottom: 1%;\n    right: 1%;\n    left: 1%;\n    height: 98%;\n    width: 98%;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    min-height: none;\n    min-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLE9BQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQUVOO0FBQ0Y7O0FBREE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsT0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQUdOO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgICBwb3NpdGlvbjogZml4ZWRcbiAgICB0b3A6IDIlXG4gICAgYm90dG9tOiAyJVxuICAgIHJpZ2h0OiAyJVxuICAgIGxlZnQ6IDIlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2hcbiAgICBoZWlnaHQ6IDk2JVxuICAgIHdpZHRoOiA5NiVcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweClcbiAgICA6aG9zdFxuICAgICAgICB0b3A6IDElXG4gICAgICAgIGJvdHRvbTogMSVcbiAgICAgICAgcmlnaHQ6IDElXG4gICAgICAgIGxlZnQ6IDElXG4gICAgICAgIGhlaWdodDogOTglXG4gICAgICAgIHdpZHRoOiA5OCVcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcbiAgICA6aG9zdFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgdG9wOiAwXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgICByaWdodDogMFxuICAgICAgICBsZWZ0OiAwXG4gICAgICAgIG1pbi1oZWlnaHQ6IG5vbmVcbiAgICAgICAgbWluLXdpZHRoOiBub25lXG4iXX0= */"] });


/***/ }),

/***/ "TQ7C":
/*!**************************************************************!*\
  !*** ./src/app/pages/inhalte/kapitel1/kapitel1.component.ts ***!
  \**************************************************************/
/*! exports provided: Kapitel1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kapitel1Component", function() { return Kapitel1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Kapitel1Component {
    constructor() { }
    ngOnInit() {
    }
}
Kapitel1Component.ɵfac = function Kapitel1Component_Factory(t) { return new (t || Kapitel1Component)(); };
Kapitel1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Kapitel1Component, selectors: [["app-kapitel1"]], decls: 231, vars: 0, consts: [[1, "kapitel-description"], [1, "text-normal"], [1, "kapitel-reference"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=8", "target", "_blank"], [1, "kapitel-hinweise"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=9", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=10", "target", "_blank"], ["href", "http://www.zendas.de/themen/vernichtung/beispiele_cddvd.html", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=12", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=14", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=15", "target", "_blank"]], template: function Kapitel1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1. Sicherer Umgang mit Computern und Informationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Informationen sind das Kapital jedes Unternehmens. Alle Mitarbeiterinnen und Mitarbeiter m\u00FCssen \u00FCber den Wert der Information Bescheid wissen. Der Missbrauch von Daten kann Wettbewerbsnachteile, Umsatzeinbu\u00DFen, Imageverluste oder rechtliche Probleme zur Folge haben. Daher ist es besonders wichtig, Informationen und Computer vor unberechtigter Verwendung zu sch\u00FCtzen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1.1 Sicherer Umgang mit personenbezogenen Daten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 8: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Der Umgang mit personenbezogenen Daten \u2013 diese k\u00F6nnen nat\u00FCrlichen, aber auch juristischen Personen zugeordnet werden \u2013 wird durch das \u00F6sterreichische Datenschutzgesetz (DSG 2000) geregelt. Dieses Gesetz stellt alle personenbezogenen Daten, insbesondere aber auch \u201Esensible personenbezogene Daten\u201C (zu Rasse und ethnischer Herkunft, politischer Meinung, Gewerkschaftszugeh\u00F6rigkeit, religi\u00F6ser oder philosophischer \u00DCberzeugung, Gesundheit oder Sexualleben) unter besonderen Schutz. Weiters legt es fest, dass alle personenbezogenen Daten nur zu festgelegten Zwecken und aufgrund einer ausdr\u00FCcklichen Anordnung des Dienstgebers verwendet und weitergegeben werden d\u00FCrfen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Ab 25. Mai 2018 wird das Datenschutzgesetz 2000 durch die EU-Datenschutz Grundverordnung (kurz: DSGVO) und das Datenschutzanpassungsgesetz 2018 ersetzt. Die Datenschutz-Grundverordnung ist zwar als EU-Verordnung in jedem EU-Mitgliedstaat unmittelbar anwendbar, sie enth\u00E4lt jedoch zahlreiche \u00D6ffnungsklauseln und l\u00E4sst dem nationalen Gesetzgeber gewisse Spielr\u00E4ume. Es gibt daher auch eine Novelle des \u00F6sterreichischen Datenschutzgesetzes 2000 (das \u201EDatenschutz-Anpassungsgesetz 2018\u201C). Bis zum 25. Mai 2018 m\u00FCssen daher alle Datenanwendungen im Betrieb an die neue Rechtslage angepasst werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Beachten Sie folgende Hinweise:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sie m\u00FCssen personenbezogene Daten, die Ihnen aufgrund Ihrer beruflichen T\u00E4tigkeit anvertraut wurden, geheim halten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ihr Arbeitgeber muss Ihnen klare Anweisungen geben, auf welche Weise diese Daten verarbeitet bzw. an welche andere Personen oder Unternehmen sie weitergegeben werden d\u00FCrfen. Jede andere Nutzung oder Weitergabe personenbezogener Daten ist nicht erlaubt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Der Arbeitgeber hat Sie \u00FCber Ihre Pflichten nach dem DSG 2000 (ab Mai 2018 nach dem DSG und der DSGVO) sowie den internen Vorschriften zu belehren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nach dem Ausscheiden aus dem Betrieb oder dem Wechsel der Arbeitsstelle d\u00FCrfen Sie personenbezogene Daten, die Ihnen beruflich zug\u00E4nglich gemacht wurden, nicht weitergeben oder f\u00FCr andere Zwecke nutzen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Verst\u00F6\u00DFe gegen das Datenschutzrecht werden mit hohen Geldstrafen f\u00FCr Ihr Unternehmen geahndet und k\u00F6nnen auch f\u00FCr Sie arbeitsrechtliche Konsequenzen haben. Zus\u00E4tzlich k\u00F6nnen Gesch\u00E4digte Schadenersatz einklagen. Dazu kommt noch der Vertrauensverlust bei Kunden und Gesch\u00E4ftspartnern. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Es ist daher empfehlenswert, bei der Verwendung personenbezogener Daten besondere Vorsicht walten zu lassen. Sie m\u00FCssen so gespeichert werden, dass sie f\u00FCr unberechtigte Personen nicht zug\u00E4nglich sind.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1.2 Clear Desk Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 9: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Clear Desk-Policy bedeutet, dass die Mitarbeiterinnen und Mitarbeiter alle vertraulichen Unterlagen bei Abwesenheit verschlie\u00DFen, sodass unberechtigte Personen (Besucherinnen und Besucher, Reinigungspersonal, aber auch unbefugte Kolleginnen und Kollegen etc.) keinen Zugriff darauf haben. Dies gilt insbesondere f\u00FCr Gro\u00DFraumb\u00FCros oder R\u00E4ume mit Publikumsverkehr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Beachten Sie folgende Hinweise:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Achten Sie darauf, dass Computerausdrucke oder Kopien mit sensiblen Informationen nicht f\u00FCr Unbefugte frei zug\u00E4nglich herumliegen, z.B. neben dem Drucker oder im Kopierer. Solche Dokumente m\u00FCssen sicher verwahrt oder zuverl\u00E4ssig vernichtet werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Versperren Sie Schriftst\u00FCcke oder Datentr\u00E4ger mit vertraulichen Inhalten an einem sicheren Ort (Schreibtisch, versperrbare K\u00E4sten, Datentr\u00E4gersafe)!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Bewahren Sie unter keinen Umst\u00E4nden Passwortnotizen an Ihrem Arbeitsplatz auf (unter der Schreibtischunterlage, als Post-it am Bildschirm)!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sperren Sie Ihren Computer, wenn Sie Ihren Arbeitsplatz f\u00FCr l\u00E4ngere Zeit verlassen (z. B. unter Windows mit \u201EWindows-Taste + L\u201C)! Unbeaufsichtigte, nicht gesperrte Computer sind ein hohes Sicherheitsrisiko. Unbefugte k\u00F6nnten so Zugang zu vertraulichen Daten erhalten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Konfigurieren Sie einen Bildschirmschoner, der sich nach maximal f\u00FCnf Minuten aktiviert und nur durch Eingabe eines Passworts aufzuheben ist. Falls bereits ein passwortgesch\u00FCtzter Bildschirmschoner installiert ist, deaktivieren Sie ihn nicht!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Richten Sie Ihr Smartphone oder Tablet so ein, dass es nur nach Eingabe einer PIN oder eines Passworts verwendet werden kann. Lassen Sie es nicht entsperrt liegen und geben Sie es nicht unbeaufsichtigt an Andere weiter!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1.3 Datentr\u00E4ger und Papierdokumente richtig entsorgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 10: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Computer, Datentr\u00E4ger und Papierdokumente mit vertraulichen oder personenbezogenen Inhalten, die defekt geworden sind oder nicht mehr ben\u00F6tigt werden, m\u00FCssen auf sichere Art entsorgt werden. Sorglos weggeworfene Dokumente oder liegengelassene Kopien k\u00F6nnen ein ernstes Sicherheitsproblem darstellen, wenn diese Dokumente in falsche H\u00E4nde geraten und missbr\u00E4uchlich verwendet werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Bitte beachten Sie folgende Hinweise, wenn Sie Papierdokumente oder Datentr\u00E4ger wie z.B. USB-Sticks, Festplatten, Speicherkarten, CDs/DVDs, Mikrofiches und Sicherungsb\u00E4nder entsorgen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Werfen Sie Datentr\u00E4ger auf keinen Fall in den Papierkorb! Sofern es sich um Inhalte handelt, die Au\u00DFenstehenden nicht zug\u00E4nglich gemacht werden d\u00FCrfen, m\u00FCssen die Datentr\u00E4ger sicher entsorgt werden. Beachten Sie, dass diese Vorgehensweise auch bei Archivmaterial einzuhalten ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u00DCbergeben Sie die nicht mehr ben\u00F6tigten Datentr\u00E4ger den Verantwortlichen Ihrer EDV-Abteilung bzw. einer eigens zu diesem Zweck bestimmten Person, die f\u00FCr die sichere Entsorgung zust\u00E4ndig ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Wenn Sie eine Festplatte verkaufen oder entsorgen wollen, m\u00FCssen Sie vorher alle Inhalte mit einer geeigneten L\u00F6schsoftware l\u00F6schen. Das Formatieren der Festplatte ist nicht ausreichend! Verwenden Sie stattdessen ein Programm wie Eraser oder Disk Wipe. Beide Programme sind kostenlos und bieten sichere Methoden zur endg\u00FCltigen Bereinigung Ihrer Datentr\u00E4ger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " F\u00FCr USB-Sticks, Solid State-Disks und Speicherkarten sind die oben genannten Programme nicht geeignet! Neuere Modelle k\u00F6nnen \u00FCber den Befehl \u201ESecure Erase\u201C zuverl\u00E4ssig gel\u00F6scht werden, bei vielen \u00E4lteren Typen ist aber kein sicheres L\u00F6schen m\u00F6glich. Solche Datentr\u00E4ger d\u00FCrfen nicht verkauft oder entsorgt werden, wenn sie f\u00FCr das Spei-chern Ihrer sensiblen Daten verwendet wurden. Sie sollten daher von Anfang an alle Daten auf diesen Speichermedien verschl\u00FCsseln: Ohne Ihren Benutzerschl\u00FCssel sind sie \u2013 auch ohne L\u00F6schen \u2013 unlesbar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Optische Datentr\u00E4ger (CDs, DVDs) k\u00F6nnen nur \u201Egel\u00F6scht\u201C werden, indem man sie physisch zerst\u00F6rt. Man kann sie also in m\u00F6glichst kleine Teile zerbrechen oder die Beschichtung auf der Beschriftungsseite gro\u00DFfl\u00E4chig abkratzen. Meistens ist es aber einfacher, solche Medien zu sammeln und zum Shreddern an ein geeignetes Entsorgungsunternehmen zu \u00FCbergeben. Beispiele f\u00FCr die korrekte Entsorgung finden Sie auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "http://www.zendas.de/themen/vernichtung/beispiele_cddvd.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Entsorgen Sie Papierdokumente mit sensiblen Informationen nicht mit dem Altpapier! Kleinere Mengen k\u00F6nnen Sie mit einem handels\u00FCblichen Aktenvernichter (Shredder), gr\u00F6\u00DFere Mengen \u00FCber ein Entsorgungsunternehmen vernichten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Achten Sie darauf, dass bei Verlassen von Besprechungsr\u00E4umen s\u00E4mtliche sensiblen Informationen (z.B. auf Flipcharts) entfernt oder mitgenommen werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Stellen Sie sicher, dass Sie nach dem Kopieren s\u00E4mtliche Dokumente vom Kopierger\u00E4t entfernt haben und entsorgen Sie unben\u00F6tigte Dokumente mit vertraulichem Inhalt auf sichere Art. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "1.4 Sicherer Umgang mit mobilen IT-Ger\u00E4ten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 12: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Der Einsatz mobiler IT-Ger\u00E4te (Notebooks, Smartphones, Tablet-PCs) birgt erhebliche Gefahren f\u00FCr das Unternehmen: Vertrauliche Unternehmensdaten werden au\u00DFerhalb des Unternehmens gespeichert und verwendet. Portable Ger\u00E4te sind f\u00FCr Diebe eine attraktive, leicht zu verkaufende Beute.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Wenn Sie mobile IT-Ger\u00E4te benutzen, sollten Sie Folgendes beachten:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Sorgen Sie f\u00FCr eine diebstahlsichere Aufbewahrung Ihres Ger\u00E4tes. Bewahren Sie es grunds\u00E4tzlich nicht im Fahrzeug auf. Ist dies nicht zu vermeiden, decken Sie das Ger\u00E4t ab oder schlie\u00DFen Sie es im Kofferraum ein. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Lassen Sie das Ger\u00E4t nicht unbeaufsichtigt und \u00FCberlassen Sie es nicht anderen Personen! Sperren Sie es bei kurzen Arbeitspausen oder schalten Sie es ab. Stellen Sie es so ein, dass es nur nach \u00DCberwinden einer Zugriffschutzfunktion (Passwort, PIN, Fingerprint, ...) bedient werden kann. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Es gibt verschiedene Programme und Dienste, die es erlauben, alle Daten auf einem gestohlenen oder verlorenen Smartphone aus der Distanz zu l\u00F6schen. Setzen Sie diese Apps unbedingt ein! Auch der Einsatz von Virenschutzprogrammen f\u00FCr Smartphones und Tablets ist dringend anzuraten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Falls Sie Ihr eigenes Smartphone oder Tablet f\u00FCr berufliche Zwecke einsetzen wollen: Kl\u00E4ren Sie zuvor mit Ihren IT-Zust\u00E4ndigen und Vorgesetzten ab, ob diese Verwendung in Ihrem Unternehmen zugelassen ist. Stellen Sie gemeinsam sicher, dass alle notwendigen Sicherheitsma\u00DFnahmen umgesetzt wurden! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Falls Ihr Unternehmen eine Mobile Device Management-L\u00F6sung einsetzt: Verwenden Sie f\u00FCr berufliche Zwecke ausschlie\u00DFlich die daf\u00FCr vorgesehenen Anwendungen und verarbeiten Sie keine dienstlichen Daten im privaten, ungesch\u00FCtzten Bereich! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Vermeiden Sie kostenlose, \u00F6ffentlich zug\u00E4ngliche WLAN-Netzwerke, wenn Sie Mobilger\u00E4te f\u00FCr berufliche Zwecke einsetzen: Ihre unverschl\u00FCsselte Kommunikation \u00FCber das Netzwerk kann problemlos abgeh\u00F6rt werden. Im schlimmsten Fall k\u00F6nnen auch Daten auf Ihrem Ger\u00E4t ausgelesen werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Sorgen Sie f\u00FCr Sichtschutz, wenn Sie das Ger\u00E4t in der \u00D6ffentlichkeit verwenden (z.B. am Flughafen) \u2013 das verhindert das Aussp\u00E4hen von Unternehmensinformationen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Verschl\u00FCsseln Sie die Festplatteninhalte bzw. wichtige Dateien und verhindern Sie damit unbefugten Zugriff auf Firmendaten. Aktivieren Sie auch auf Ihrem Smartphone oder Tablet die Dateiverschl\u00FCsselung oder setzen Sie eine Verschl\u00FCsselungs-App zum Speichern sensibler Daten ein! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Verwenden Sie Ihren privaten Cloud-Speicherdienst (Dropbox, iCloud, Google Drive) nicht f\u00FCr Unternehmensdaten! Fragen Sie bei Ihren IT-Zust\u00E4ndigen nach, welche M\u00F6g-lichkeiten bestehen, um Firmendokumente \u00FCber das Internet sicher abzuspeichern. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Deaktivieren Sie alle nicht gerade ben\u00F6tigten Ger\u00E4teschnittstellen (USB, WLAN, Infrarot, Bluetooth). Wenn diese Schnittstellen (z.B. WLAN f\u00FCr Internetverbindung) unbedingt notwendig sind, m\u00FCssen entsprechende Schutzma\u00DFnahmen (Personal Firewall, aktuelles Virenschutzprogramm usw.) vorgesehen werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Schalten Sie den GPS-Empf\u00E4nger auf Ihrem Smartphone immer ab, wenn er nicht gebraucht wird. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Auf Smartphones oder Tablets, die Sie f\u00FCr berufliche Zwecke verwenden, d\u00FCrfen Sie nie interne Sicherheitsmechanismen au\u00DFer Kraft setzen (z.B. \u201EJailbreaks\u201C oder \u201CRooten\u201C)! Durch diese Manipulationen entstehen zus\u00E4tzliche Gefahrenquellen f\u00FCr die gespeicherten Unternehmensdaten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Installieren Sie nur Apps, die Ihnen als vertrauensw\u00FCrdig und sicher bekannt sind! Fragen Sie im Zweifelsfall Ihre IT-Zust\u00E4ndigen oder recherchieren Sie im Internet, ob dazu Gefahren bekannt sind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Viele Apps verlangen bei der Installation Zugriff auf verschiedenste Ger\u00E4tefunktionen (WLAN, GPS-Empf\u00E4nger...). \u00DCberlegen Sie selbst, ob es n\u00F6tig ist, dass z.B. eine Spiele-App Zugriff auf Ihr Mikrophon oder Ihr Adressbuch erh\u00E4lt. Installieren Sie nur Apps, deren Zugriffsanforderungen Sie f\u00FCr vertrauensw\u00FCrdig halten! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Lassen Sie Ihr Smartphone bei vertraulichen Besprechungen an Ihrem Arbeitsplatz oder schalten Sie es in den Flugmodus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Bevor Sie ein Smartphone verkaufen, weitergeben oder entsorgen, m\u00FCssen Sie sicherstellen, dass alle gespeicherten Daten gel\u00F6scht wurden. Am besten eignet sich dazu ein \u201EFactory Reset\u201C. Danach m\u00FCssen Sie \u00FCberpr\u00FCfen, ob noch Einstellungen oder Daten erhalten geblieben sind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Melden Sie jeden Diebstahl oder Verlust sofort der IT-Abteilung! M\u00F6glicherweise m\u00FCssen Fernzug\u00E4nge zu Ihrem Unternehmen gesperrt oder Passw\u00F6rter ge\u00E4ndert werden, um unerlaubte Zugriffe zu unterbinden. Die rasche Meldung des Vorfalls kann helfen, weitere Sicherheitsverst\u00F6\u00DFe zu verhindern. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Wenn auf dem Mobilger\u00E4t personenbezogene Daten gespeichert waren, muss unverz\u00FCglich abgekl\u00E4rt werden, ob Ihr Arbeitgeber die Datenschutzbeh\u00F6rde und die betroffenen Personen informieren muss. Ihre rechtzeitige Meldung kann dem Unternehmen daher unter Umst\u00E4nden hohe Geldstrafen ersparen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "1.5 Wechselmedien richtig verwenden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 14: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Wechselmedien sind externe Datentr\u00E4ger wie z.B. USB-Sticks, externe Festplatten, Fotospeicherkarten, CDs oder DVDs. Ihr Einsatz stellt grunds\u00E4tzlich ein Sicherheitsrisiko dar: Einerseits k\u00F6nnen bei Missbrauch sensible Daten wie z.B. Kundenkarteien gelesen werden, andererseits k\u00F6nnen Programme mit Schadfunktionen auf Firmenrechner bzw. in das Firmennetzwerk eingeschleust werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Wenn Wechselmedien in Ihrem Unternehmen verwendet werden, sollten Sie folgende Hinweise (zus\u00E4tzlich zu allf\u00E4lligen Regelungen Ihres Unternehmens) beachten:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Lassen Sie Wechseldatentr\u00E4ger wie z.B. USB-Sticks nie unbeaufsichtigt liegen!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Setzen Sie unbedingt Verschl\u00FCsselungs- oder Sperrfunktionen ein! H\u00E4ufig liegt dem USB-Stick eine Verschl\u00FCsselungssoftware bei, die gespeicherte Daten mittels Passwort sch\u00FCtzt. Auch alle modernen Betriebssysteme bieten M\u00F6glichkeiten zur Datentr\u00E4gerverschl\u00FCsselung an. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Einige Verschl\u00FCsselungsprogramme bieten die M\u00F6glichkeit, den Inhalt des USB-Sticks nach mehrmaliger falscher Passworteingabe automatisch zu l\u00F6schen. Besonders bei sensiblen Inhalten sollten Sie diese M\u00F6glichkeit n\u00FCtzen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Booten Sie Ihren Rechner nicht von einem Wechseldatentr\u00E4ger! Auch das Starten nicht freigegebener Programme von USB-Sticks (z.B. portable Versionen von Browsern oder E-Mail-Clients) ist nicht erlaubt. Sie k\u00F6nnen damit Viren oder andere Schadsoftware in Ihren Computer einschleppen, die sich auf das gesamte Unternehmen ausbreiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Auch f\u00FCr Wechseldatentr\u00E4ger gilt: Jeder Verlust muss sofort gemeldet werden! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Die Installation privater Software kann einzelne PCs oder das gesamte Firmennetz bedrohen! Besonders kostenlose Software aus dem Internet (z.B. Spiele, \u201En\u00FCtzliche\u201C Tools und Apps) enth\u00E4lt oft Schadprogramme. Zudem k\u00F6nnte das Urheberrecht verletzt werden, wenn diese Programme nicht f\u00FCr den kommerziellen Einsatz lizenziert oder illegal kopiert wurden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "1.6 Social Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 15: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Social Engineering bezeichnet das Manipulieren von Personen, um unbefugt Zugang zu vertraulichen Informationen oder IT-Systemen zu erhalten. Typisches Werkzeug des Social Engineers ist das Telefon. Pers\u00F6nliches Auftreten wird wegen des h\u00F6heren Risikos zumeist gescheut, kommt aber ebenfalls vor.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Strategien des Social Engineerings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Social Engineers geben sich gerne als Mitarbeiterinnen oder Mitarbeiter aus. Vielleicht behaupten sie auch, eine Beh\u00F6rde oder ein wichtiges Kundenunternehmen zu vertreten oder zu Ihrer IT-Abteilung zu geh\u00F6ren. Ihre Opfer werden durch firmeninternes Wissen oder Kenntnisse spezieller Fachbegriffe get\u00E4uscht, die sie sich zuvor durch Telefonate oder Gespr\u00E4che mit anderen Kollegen erworben haben. Beim Angriff appellieren sie dann als \u201Egestresster Kollege\u201C an Ihre Hilfsbereitschaft oder drohen als \u201EKunde\u201C mit dem Verlust eines Auftrages. Kommt ein Social Engineer bei einer Mitarbeiterin oder einem Mitarbeiter nicht ans Ziel, wird der Angriff bei der n\u00E4chsten Ansprechperson wiederholt \u2013 bis er erfolgreich ist.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "H\u00E4ufig verlaufen diese angriffe mehrstufig:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Durch gezielte Telefonate werden Insiderinformationen eingeholt, die an sich harmlos sind, deren Kenntnis dem Social Engineer aber hilft, seine Rolle \u00FCberzeugend zu spielen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Oft wird \u00FCber l\u00E4ngere Zeit ein Vertrauensverh\u00E4ltnis aufgebaut, indem die Angreiferin oder der Angreifer z.B. mehrere Telefonate mit ihrem oder seinem Opfer f\u00FChrt und unproblematische Anfragen stellt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Der eigentliche Angriff erfolgt nach diesen Recherchen: Wenn die Opfer den \u201EKollegen\u201C oder \u201EKunden\u201C gut zu kennen glauben, geht der Social Engineer zu seinem eigentlichen Ziel \u00FCber \u2013 und bittet um den entscheidenden \u201EGefallen\u201C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Oft wird ein solcher Angriff nicht einmal bemerkt. Der Social Engineer bleibt unerkannt und kann die anf\u00E4lligen Mitarbeiterinnen und Mitarbeiter bei anderer Gelegenheit wieder nach vertraulichen Informationen aushorchen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Wer besonders Gef\u00E4hrdet ist:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Social Engineering-Attacken k\u00F6nnen sich gegen jede Person im Unternehmen richten. Am st\u00E4rksten gef\u00E4hrdet sind:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "neue Mitarbeiterinnen und Mitarbeiter, die mit den Verh\u00E4ltnissen noch nicht vertraut sind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Personen im Kundenverkehr, da sie besonders kundenorientiert arbeiten. Hier finden sich au\u00DFerdem h\u00E4ufig mehrere Ansprechpersonen mit gleichen Zugriffsrechten, sodass der Social Engineer einen fehlgeschlagenen Angriff bei einem anderen Opfer wiederholen kann.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Ma\u00DFnahmen gegen Social Engineering:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Angriffe dieser Art k\u00F6nnen nie v\u00F6llig unterbunden werden. Bitte beachten Sie aber folgende Vorsichtsma\u00DFnahmen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Informieren Sie sich \u00FCber den Wert und Vertraulichkeitsgrad der Informationen, zu denen Sie Zugang haben! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " H\u00E4ufig ist Unternehmensangeh\u00F6rigen infolge des dauernden Umgangs mit sensiblen Informationen nicht mehr bewusst, dass diese geheim sind. Auch fehlen oft klare Regelungen der Gesch\u00E4ftsf\u00FChrung. In jedem Unternehmen sollte \u2013 am besten in schriftlicher Form \u2013 festgelegt sein, welche Informationen vertraulich zu behandeln sind und welche weitergegeben werden d\u00FCrfen. Sollte dies in Ihrem Unternehmen nicht der Fall sein, regen Sie eine solche Festlegung an oder kl\u00E4ren Sie diesen Bereich zumindest mit Ihren Vorgesetzten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Bestehen Sie bei Anfragen zu vertraulichen oder geheimen Informationen auf schriftliche Form oder pers\u00F6nliche Vorsprache! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Geben Sie \u00FCber anonyme Kan\u00E4le (Telefon, E-Mail, Postf\u00E4cher) grunds\u00E4tzlich keine vertraulichen Informationen weiter! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Vertrauliche Informationen in diesem Sinn sind nicht nur Passw\u00F6rter, Kontodaten oder \u00E4hnliche sensiblen Daten, sondern auch Firmeninterna wie z.B. Abl\u00E4ufe oder Fachw\u00F6rter, die bei einem Angriff dieser Art helfen k\u00F6nnten.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Legen Sie im Vorhinein Methoden fest, wie die Identit\u00E4t von Anfragestellern sicher festgestellt werden kann: Reicht z.B. die Kundennummer oder ist ein zus\u00E4tzliches Passwort n\u00F6tig? So l\u00E4sst sich Zeitdruck vermeiden, der gern als Hilfsmittel bei Social Engineering-Angriffen eingesetzt wird. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Gibt eine Person vor, Mitarbeiterin oder Mitarbeiter eines bestimmten Unternehmens zu sein, sollten Sie bei diesem Unternehmen anfragen, ob die betreffende Person \u00FCberhaupt existiert. Dazu muss aber die Telefonnummer aus \u00F6ffentlichen Quellen (z.B. amtliches Telefonbuch) abgefragt werden \u2013 verwenden Sie nicht jene Telefonnummer, die die Person angegeben hat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Wenn Sie sich bei einer Anfrage nicht sicher sind oder wenn die oder der Anfragende versucht, Sie unter Druck zu setzen, leiten Sie die Anfrage an Ihre Vorgesetzten weiter! Einsch\u00FCchterungsversuche dieser Art geh\u00F6ren zum Standardrepertoire des Social Engineering. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Wenn Sie im Anschluss an ein Gespr\u00E4ch \u201Eein unangenehmes Gef\u00FChl\u201C haben oder unsicher sein, ob Sie nicht \u201Ezu viel gesagt\u201C haben, behalten Sie Ihre Sorgen nicht f\u00FCr sich, sondern sprechen Sie mit Ihren Vorgesetzten dar\u00FCber! M\u00F6glicherweise m\u00FCssen Abwehrma\u00DFnahmen getroffen oder die betroffenen Personen informiert werden. In jedem Fall m\u00FCssen Sie informiert werden, wie Sie bei derartigen F\u00E4llen vorgehen sollen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Besprechen Sie mit Ihren Kolleginnen und Kollegen auff\u00E4llige oder unzul\u00E4ssige Anfragen und dokumentieren Sie diese Anfragen. So wei\u00DF man, ob die Anruferin oder der Anrufer es schon bei anderen versucht hat. In solchen Gespr\u00E4chen k\u00F6nnen auch neue Abwehrmethoden gefunden und ein Gef\u00FChl f\u00FCr den Wert der Firmeninformationen entwickelt werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2FwaXRlbDEuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImthcGl0ZWwxLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgd2lkdGg6IDEwMCVcblxuIl19 */"] });


/***/ }),

/***/ "Vwks":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/fortschritt/fortschritt-page/fortschritt-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FortschrittPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortschrittPageComponent", function() { return FortschrittPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app-dao.service */ "9nnm");
/* harmony import */ var _services_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assessment-api-client.service */ "97vB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_training_result_training_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/training-result/training-result.component */ "72/k");
/* harmony import */ var _components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pruefung-result/pruefung-result.component */ "XZfd");







function FortschrittPageComponent_nav_10_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const training_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vortraining: ", ctx_r6.getPercent(training_r5.vortraining.korrekt, training_r5.vortraining.inkorrekt), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nachtraining: ", ctx_r6.getPercent(training_r5.nachtraining.korrekt, training_r5.nachtraining.inkorrekt), "%");
} }
function FortschrittPageComponent_nav_10_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nicht Abgeschlossen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "disabled": a0, "active": a1 }; };
function FortschrittPageComponent_nav_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FortschrittPageComponent_nav_10_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const training_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.loadTrainingResult(training_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FortschrittPageComponent_nav_10_div_1_div_6_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FortschrittPageComponent_nav_10_div_1_div_7_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const training_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !training_r5.vortraining.abgeschlossen, ctx_r4.activeTraining !== undefined && ctx_r4.activeTraining.assessmentID === training_r5.vortraining.assessmentID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.timestampToDate(training_r5.vortraining.zeitpunkt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.timestampToTime(training_r5.vortraining.zeitpunkt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", training_r5.vortraining.abgeschlossen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !training_r5.vortraining.abgeschlossen);
} }
function FortschrittPageComponent_nav_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FortschrittPageComponent_nav_10_div_1_Template, 8, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.trainingsStatistics);
} }
function FortschrittPageComponent_nav_11_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pruefung_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Ergebnis: ", ctx_r13.getPercent(pruefung_r12.korrekt, pruefung_r12.inkorrekt), "% (", pruefung_r12.korrekt, "/", pruefung_r12.korrekt + pruefung_r12.inkorrekt, ")");
} }
function FortschrittPageComponent_nav_11_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nicht Abgeschlossen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FortschrittPageComponent_nav_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FortschrittPageComponent_nav_11_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const pruefung_r12 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.loadPruefungsResult(pruefung_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FortschrittPageComponent_nav_11_div_1_div_6_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FortschrittPageComponent_nav_11_div_1_div_7_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pruefung_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !pruefung_r12.abgeschlossen, ctx_r11.activePruefung !== undefined && ctx_r11.activePruefung.assessmentID === pruefung_r12.assessmentID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.timestampToDate(pruefung_r12.zeitpunkt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.timestampToTime(pruefung_r12.zeitpunkt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pruefung_r12.abgeschlossen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !pruefung_r12.abgeschlossen);
} }
function FortschrittPageComponent_nav_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FortschrittPageComponent_nav_11_div_1_Template, 8, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pruefungsStatistics);
} }
function FortschrittPageComponent_app_training_result_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-training-result", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("training", ctx_r2.activeTraining);
} }
function FortschrittPageComponent_app_pruefung_result_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pruefung-result", 23);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pruefung", ctx_r3.activePruefung);
} }
const _c1 = function (a0) { return { "active": a0 }; };
class FortschrittPageComponent {
    constructor(router, appDao, apiClient) {
        this.router = router;
        this.appDao = appDao;
        this.apiClient = apiClient;
        this.trainingsAnsicht = true;
        this.pruefungsStatistics = [];
        this.trainingsStatistics = [];
    }
    ngOnInit() {
        if (!this.appDao.user.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        this.loadAssessments();
    }
    loadAssessments() {
        if (this.pruefungsStatistics.length === 0) {
            this.apiClient.getPruefungsAssessmentStatistics(this.appDao.user.getBenutzername(), 10)
                .subscribe(statistics => {
                this.pruefungsStatistics = statistics;
                console.log("pruefungs statistik loaded");
            });
        }
        if (this.trainingsStatistics.length === 0) {
            this.apiClient.getTrainingsAssessmentStatistics(this.appDao.user.getBenutzername(), 20)
                .subscribe(statistics => {
                this.trainingsStatistics = this.aggregateTrainingsStatistics(statistics);
                console.log("trainings statistik loaded");
            });
        }
    }
    loadTrainingResult(statistics) {
        if (statistics.vortraining.abgeschlossen && !(this.activeTraining !== undefined && this.activeTraining.assessmentID === statistics.vortraining.assessmentID)) {
            this.apiClient.getTrainingsAssessmentResults(this.appDao.user.getBenutzername(), statistics.vortraining.assessmentID)
                .subscribe(results => this.setAggregatedTrainingsResult(results, statistics));
        }
    }
    loadPruefungsResult(pruefung) {
        this.activePruefung = undefined;
        if (pruefung.abgeschlossen) {
            console.log("requesting pruefungsresult of " + pruefung.assessmentID);
            this.apiClient.getPruefungsAssessmentResults(this.appDao.user.getBenutzername(), pruefung.assessmentID)
                .subscribe(result => {
                this.activePruefung = result;
            });
        }
    }
    timestampToTime(timestamp) {
        let time = timestamp.replace(/.*T/g, ' ').split(':');
        return time[0] + ":" + time[1];
    }
    timestampToDate(timestamp) {
        let date = timestamp.replace(/T.*/, ' ').split('-');
        return date[2] + "." + date[1] + ". " + date[0];
    }
    getPercent(korrekt, inkorrekt) {
        if (korrekt == 0) {
            return 0;
        }
        return Math.ceil((korrekt / (korrekt + inkorrekt)) * 100);
    }
    aggregateTrainingsStatistics(combinedList) {
        let aggregated = [];
        for (let vortraining of combinedList) {
            if (vortraining.typ == "VORTRAINING") {
                for (let nachtraining of combinedList) {
                    if (nachtraining.typ == "NACHTRAINING" && nachtraining.assessmentID === vortraining.assessmentID) {
                        aggregated.push({
                            vortraining: vortraining,
                            nachtraining: nachtraining
                        });
                    }
                }
            }
        }
        return aggregated;
    }
    setAggregatedTrainingsResult(results, statistics) {
        if (results[0].typ != "VORTRAINING" || results[1].typ != "NACHTRAINING") {
            console.error("no valid assessment results received at loading training");
            return;
        }
        //kapitel nummer and name is needed, retrieved from server
        this.apiClient.requestSzenario(results[0].szenarien[0].szenarioID).subscribe(szenario => {
            this.apiClient.getKapitel(szenario.kapitelnummer).subscribe(kapitel => {
                this.activeTraining = {
                    kapitelnummer: kapitel.kapitelnummer,
                    kapitelname: kapitel.titel,
                    assessmentID: results[0].assessmentID,
                    vortraining: {
                        korrekt: statistics.vortraining.korrekt,
                        total: statistics.vortraining.korrekt + statistics.vortraining.inkorrekt,
                        prozent: this.getPercent(statistics.vortraining.korrekt, statistics.vortraining.inkorrekt),
                        antworten: results[0].szenarien
                    },
                    nachtraining: {
                        korrekt: statistics.nachtraining.korrekt,
                        total: statistics.nachtraining.korrekt + statistics.nachtraining.inkorrekt,
                        prozent: this.getPercent(statistics.nachtraining.korrekt, statistics.nachtraining.inkorrekt),
                        antworten: results[1].szenarien
                    }
                };
            });
        });
    }
}
FortschrittPageComponent.ɵfac = function FortschrittPageComponent_Factory(t) { return new (t || FortschrittPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__["AppDaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentApiClientService"])); };
FortschrittPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FortschrittPageComponent, selectors: [["app-fortschritt-page"]], decls: 15, vars: 10, consts: [[1, "section-darker"], [1, "header"], [1, "title"], [1, "typ-auswahl"], ["id", "training-btn", 3, "ngClass", "click"], ["id", "pr\u00FCfung-btn", 3, "ngClass", "click"], [1, "scroll-container"], ["class", "trainings", 4, "ngIf"], ["class", "pr\u00FCfung", 4, "ngIf"], [1, "section-lighter"], [3, "training", 4, "ngIf"], [3, "pruefung", 4, "ngIf"], [1, "trainings"], ["class", "item active", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "item", "active", 3, "ngClass", "click"], [1, "item-title"], ["class", "details", 4, "ngIf"], [1, "details"], [1, "assessment-title"], [1, "pr\u00FCfung"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "ngClass", "click"], [3, "training"], [3, "pruefung"]], template: function FortschrittPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fortschritt:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FortschrittPageComponent_Template_button_click_5_listener() { return ctx.trainingsAnsicht = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Trainings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FortschrittPageComponent_Template_button_click_7_listener() { return ctx.trainingsAnsicht = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pr\u00FCfungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FortschrittPageComponent_nav_10_Template, 2, 1, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FortschrittPageComponent_nav_11_Template, 2, 1, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FortschrittPageComponent_app_training_result_13_Template, 1, 1, "app-training-result", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FortschrittPageComponent_app_pruefung_result_14_Template, 1, 1, "app-pruefung-result", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.trainingsAnsicht));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, !ctx.trainingsAnsicht));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainingsAnsicht);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.trainingsAnsicht);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainingsAnsicht && ctx.activeTraining != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.trainingsAnsicht && ctx.activePruefung != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_training_result_training_result_component__WEBPACK_IMPORTED_MODULE_5__["TrainingResultComponent"], _components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_6__["PruefungResultComponent"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.header[_ngcontent-%COMP%] {\n  height: 20%;\n}\n.section-darker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 35%;\n  padding: 2rem 0;\n}\n.typ-auswahl[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10%;\n}\n.typ-auswahl[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #234DB0;\n  color: white;\n}\n.typ-auswahl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  text-decoration: none;\n}\n.typ-auswahl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  filter: brightness(90%);\n}\n#training-btn[_ngcontent-%COMP%] {\n  border-radius: 8px 0 0 8px;\n}\n#pr\u00FCfung-btn[_ngcontent-%COMP%] {\n  border-radius: 0 8px 8px 0;\n}\n.scroll-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 80%;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nnav[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #888888;\n  font-weight: 300;\n}\nnav[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: white;\n}\nnav[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  background: none;\n}\n.trainings[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.trainings[_ngcontent-%COMP%]   .assessment-title[_ngcontent-%COMP%] {\n  justify-self: end;\n}\n.pr\u00FCfung[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pr\u00FCfung[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.section-lighter[_ngcontent-%COMP%] {\n  width: 65%;\n  padding: 2rem 0;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9ydHNjaHJpdHQtcGFnZS5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7QUFHSjtBQURBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUlKO0FBRkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSEk7RUFDSSxtQkMxQk87RUQyQlAsWUFBQTtBQUtSO0FBSEk7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBS1I7QUFISTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQUtSO0FBSEE7RUFDSSwwQkFBQTtBQU1KO0FBSkE7RUFDSSwwQkFBQTtBQU9KO0FBTEE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFRSjtBQU5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFTSjtBQU5JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBUVI7QUFMSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQU9SO0FBTEk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFPUjtBQUxJO0VBQ0ksaUJBQUE7QUFPUjtBQUxJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBT1I7QUFISTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQU1SO0FBSkk7RUFDSSxpQkFBQTtBQU1SO0FBSEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFNUjtBQUpJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBTVI7QUFKQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBT0oiLCJmaWxlIjoiZm9ydHNjaHJpdHQtcGFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5zZWN0aW9uLWRhcmtlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG4udHlwLWF1c3dhaGwge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4udHlwLWF1c3dhaGwgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMzREQjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50eXAtYXVzd2FobCBidXR0b24ge1xuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnR5cC1hdXN3YWhsIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG59XG5cbiN0cmFpbmluZy1idG4ge1xuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbn1cblxuI3Byw7xmdW5nLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogODAlO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm5hdiAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzg4ODg4ODtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbm5hdiAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IC5pdGVtLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxubmF2IC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbm5hdiAuZGlzYWJsZWQ6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50cmFpbmluZ3MgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udHJhaW5pbmdzIC5hc3Nlc3NtZW50LXRpdGxlIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5wcsO8ZnVuZyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHLDvGZ1bmcgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc2VjdGlvbi1saWdodGVyIHtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIiRmb250LXN0YWNrOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxuJHByaW1hcnk6ICM1Nzg4RjlcbiRwcmltYXJ5LWRhcms6ICMyMzREQjBcbiRwcmltYXJ5LWxpZ2h0OiAjQ0NEQkZGXG4kc2Vjb25kYXJ5OiBsaW5lYXItZ3JhZGllbnQoMTIyLjU4ZGVnLCAjNzZCNjVBIC01MS41NSUsICM0MTlFMTQgMTAyLjM1JSlcbiRzZWNvbmRhcnktbGlnaHQ6ICNFMEVGREFcbiRncmVlbjogIzQxOUUxNFxuJHJlZDogI0Y5NTc1N1xuJGdyZXk6ICM4ODg4ODhcbiRncmV5LWxpZ2h0OiAjRUJFQkVCXG4kZ3JleS1kYXJrOiAjNDU0NTQ1XG4kYmxhY2s6ICMyMTI1MjlcbiR3aGl0ZS1iZzogcmdiYSgyNTUsMjU1LDI1NSwuOTUpXG4iXX0= */"] });


/***/ }),

/***/ "WXwH":
/*!**********************************************!*\
  !*** ./src/app/services/user-mgt.service.ts ***!
  \**********************************************/
/*! exports provided: UserMgtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMgtService", function() { return UserMgtService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app-dao.service */ "9nnm");






class UserMgtService {
    constructor(http, appDao) {
        this.http = http;
        this.appDao = appDao;
    }
    requestLogin(benutzername, passwort) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            withCredentials: true
        };
        let data = "benutzername=" + benutzername + "&passwort=" + passwort;
        return this.http.post(this.appDao.serverApiUrl + "/login", data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    requestUserInformation() {
        return this.http.get(this.appDao.serverApiUrl + "/whoami", { withCredentials: true });
    }
    requestLogout() {
        return this.http.post(this.appDao.serverApiUrl + "/logout", "", { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error("error status code: " + error.status);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Anfrage Fehlgeschlagen');
    }
}
UserMgtService.ɵfac = function UserMgtService_Factory(t) { return new (t || UserMgtService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_4__["AppDaoService"])); };
UserMgtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserMgtService, factory: UserMgtService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XZfd":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/pruefung-result/pruefung-result.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PruefungResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruefungResultComponent", function() { return PruefungResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/assessment-api-client.service */ "97vB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1, a2) { return { "correct-pill": a0, "incorrect-pill": a1, "disabled": a2 }; };
function PruefungResultComponent_div_9_ng_container_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PruefungResultComponent_div_9_ng_container_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const szenario_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.onClickSzenarioNav(szenario_r5.szenarioID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const szenario_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, szenario_r5.korrekt, !szenario_r5.korrekt, ctx_r4.btnDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](szenario_r5.anzeigeNummer);
} }
function PruefungResultComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PruefungResultComponent_div_9_ng_container_1_button_7_Template, 2, 6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r2 = ctx_r8.index;
    const kapitel_r1 = ctx_r8.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Kapitel ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r3.getPercent(kapitel_r1.korrekt, kapitel_r1.gesammt), "% (", kapitel_r1.korrekt, "/", kapitel_r1.gesammt, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.szenarioKapitelZuweisung[i_r2]);
} }
function PruefungResultComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PruefungResultComponent_div_9_ng_container_1_Template, 8, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kapitel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", kapitel_r1.gesammt !== 0);
} }
class PruefungResultComponent {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.szenarioNavClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.btnDisabled = true;
        this.szenarioKapitelZuweisung = [];
        this.kapitelErfolg = [];
        this.amountGesammtKorrekt = 0;
    }
    ngOnInit() {
        this.updateResults();
    }
    ngOnChanges() {
        this.updateResults();
    }
    onClickSzenarioNav(szenarioID) {
        if (!this.btnDisabled) {
            this.szenarioNavClicked.emit(szenarioID);
        }
    }
    getPercent(korrekt, gesammt) {
        if (korrekt === 0 || gesammt === 0) {
            return 0;
        }
        return Math.ceil((korrekt / gesammt) * 100);
    }
    updateResults() {
        let szenarien = [];
        for (let szenarioResult of this.pruefung.szenarien) {
            this.apiClient.requestSzenario(szenarioResult.szenarioID).subscribe(szenario => {
                szenarien.push(szenario);
                if (szenarien.length === this.pruefung.szenarien.length) {
                    this.setKapitelValues(szenarien);
                }
            });
        }
    }
    setKapitelValues(szenarien) {
        // initialize to discard old values
        let amountGesammtKorrekt = 0;
        let newKapitelZuweisung = [];
        let newKapitelErfolg = [];
        for (let i = 0; i < 5; i++) {
            newKapitelZuweisung.push([]);
            newKapitelErfolg.push({
                gesammt: 0,
                korrekt: 0
            });
        }
        for (let i = 0; i < this.pruefung.szenarien.length; i++) {
            //count asmount gesammt korrekt
            if (this.pruefung.szenarien[i].korrekt) {
                amountGesammtKorrekt++;
            }
            //store szenarien to kapitel
            let szenarioID = this.pruefung.szenarien[i].szenarioID;
            let kapitelnummer = this.getKapitelnummerOfSzenario(szenarien, szenarioID);
            newKapitelZuweisung[kapitelnummer - 1].push({
                anzeigeNummer: i + 1,
                szenarioID: szenarioID,
                korrekt: this.pruefung.szenarien[i].korrekt
            });
            // count amount of szenarien and correct for percentage
            newKapitelErfolg[kapitelnummer - 1].gesammt++;
            if (this.pruefung.szenarien[i].korrekt) {
                newKapitelErfolg[kapitelnummer - 1].korrekt++;
            }
        }
        this.amountGesammtKorrekt = amountGesammtKorrekt;
        this.szenarioKapitelZuweisung = newKapitelZuweisung;
        this.kapitelErfolg = newKapitelErfolg;
    }
    getKapitelnummerOfSzenario(szenarien, id) {
        for (let szenario of szenarien) {
            if (szenario.szenarioID === id) {
                return szenario.kapitelnummer;
            }
        }
        console.error("Szenario with id " + id + " not found in requested szenarien");
        return -1;
    }
}
PruefungResultComponent.ɵfac = function PruefungResultComponent_Factory(t) { return new (t || PruefungResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_1__["AssessmentApiClientService"])); };
PruefungResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruefungResultComponent, selectors: [["app-pruefung-result"]], inputs: { pruefung: "pruefung", btnDisabled: "btnDisabled" }, outputs: { szenarioNavClicked: "szenarioNavClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 4, consts: [[1, "title"], [1, "scroll-box"], [1, "content-box"], [1, "item-box", "gesammt-box"], ["class", "item-box", 4, "ngFor", "ngForOf"], [1, "item-box"], [4, "ngIf"], [1, "kapitel-header"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function PruefungResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pr\u00FCfungsergebnis: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gesammt: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PruefungResultComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.getPercent(ctx.amountGesammtKorrekt, ctx.pruefung.szenarien.length), "% (", ctx.amountGesammtKorrekt, "/", ctx.pruefung.szenarien.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kapitelErfolg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 0 2%;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  border-right: 0px solid #c8c8c8;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  overflow: auto;\n}\n\n.scroll-box[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.item-box[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  margin-top: 1rem;\n}\n\n.gesammt-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #888888;\n}\n\n.kapitel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.kapitel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background: #EBEBEB;\n  margin: 0.1rem;\n  padding: 0.2rem 0.8rem;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 8px 8px 0;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 0 0 8px;\n}\n\nnav[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]:hover {\n  filter: none;\n  cursor: default;\n}\n\nnav[_ngcontent-%COMP%]   .answered[_ngcontent-%COMP%] {\n  background: #CCDBFF;\n}\n\nnav[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background: #234DB0 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJ1ZWZ1bmctcmVzdWx0LmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSUo7O0FBSEk7RUFDSSxnQkFBQTtBQUtSOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKSTtFQUNJLFlBQUE7RUFDQSxtQkNoQ0s7RURpQ0wsY0FBQTtFQUNBLHNCQUFBO0FBTVI7O0FBSkk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFNUjs7QUFKSTtFQUNJLDBCQUFBO0FBTVI7O0FBSkk7RUFDSSwwQkFBQTtBQU1SOztBQUpJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFNUjs7QUFKSTtFQUNJLG1CQ3pEUTtBRCtEaEI7O0FBSkk7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0FBTVIiLCJmaWxlIjoicHJ1ZWZ1bmctcmVzdWx0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIHBhZGRpbmc6IDAgMiVcblxuXG4uY29udGVudC1ib3hcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMClcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG4gICAgb3ZlcmZsb3c6IGF1dG9cblxuLnNjcm9sbC1ib3hcbiAgICBvdmVyZmxvdzogYXV0b1xuICAgIFxuLml0ZW0tYm94XG4gICAgcGFkZGluZzogLjVyZW0gMFxuICAgIG1hcmdpbi10b3A6IDFyZW1cblxuLmdlc2FtbXQtYm94XG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleVxuXG4ua2FwaXRlbC1oZWFkZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgaDNcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMFxuXG5uYXZcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcFxuXG4gICAgYnV0dG9uXG4gICAgICAgIGZsZXgtZ3JvdzogMVxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleS1saWdodFxuICAgICAgICBtYXJnaW46IC4xcmVtXG4gICAgICAgIHBhZGRpbmc6IC4ycmVtIC44cmVtXG5cbiAgICBidXR0b246aG92ZXJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSlcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG5cbiAgICBidXR0b246bGFzdC1jaGlsZFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMFxuXG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4XG5cbiAgICAuZGlzYWJsZWQ6aG92ZXJcbiAgICAgICAgZmlsdGVyOiBub25lXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdFxuXG4gICAgLmFuc3dlcmVkXG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0XG5cbiAgICAuY3VycmVudFxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1kYXJrICFpbXBvcnRhbnRcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcbiIsIiRmb250LXN0YWNrOiAnUm9ib3RvJywgc2Fucy1zZXJpZlxuJHByaW1hcnk6ICM1Nzg4RjlcbiRwcmltYXJ5LWRhcms6ICMyMzREQjBcbiRwcmltYXJ5LWxpZ2h0OiAjQ0NEQkZGXG4kc2Vjb25kYXJ5OiBsaW5lYXItZ3JhZGllbnQoMTIyLjU4ZGVnLCAjNzZCNjVBIC01MS41NSUsICM0MTlFMTQgMTAyLjM1JSlcbiRzZWNvbmRhcnktbGlnaHQ6ICNFMEVGREFcbiRncmVlbjogIzQxOUUxNFxuJHJlZDogI0Y5NTc1N1xuJGdyZXk6ICM4ODg4ODhcbiRncmV5LWxpZ2h0OiAjRUJFQkVCXG4kZ3JleS1kYXJrOiAjNDU0NTQ1XG4kYmxhY2s6ICMyMTI1MjlcbiR3aGl0ZS1iZzogcmdiYSgyNTUsMjU1LDI1NSwuOTUpXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _pages_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/default-page/default-page.component */ "FELF");
/* harmony import */ var _pages_inhalte_kapitel1_kapitel1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/inhalte/kapitel1/kapitel1.component */ "TQ7C");
/* harmony import */ var _pages_inhalte_kapitel2_kapitel2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/inhalte/kapitel2/kapitel2.component */ "Mi8t");
/* harmony import */ var _pages_inhalte_kapitel3_kapitel3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/inhalte/kapitel3/kapitel3.component */ "f5/e");
/* harmony import */ var _pages_inhalte_kapitel4_kapitel4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/inhalte/kapitel4/kapitel4.component */ "ItLh");
/* harmony import */ var _pages_inhalte_kapitel5_kapitel5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/inhalte/kapitel5/kapitel5.component */ "GZ69");
/* harmony import */ var _pages_training_training_page_training_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/training/training-page/training-page.component */ "z1c4");
/* harmony import */ var _pages_pruefung_pruefung_page_pruefung_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pruefung/pruefung-page/pruefung-page.component */ "a3WT");
/* harmony import */ var _pages_fortschritt_fortschritt_page_fortschritt_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/fortschritt/fortschritt-page/fortschritt-page.component */ "Vwks");
/* harmony import */ var _pages_inhalte_inhalte_page_inhalte_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/inhalte/inhalte-page/inhalte-page.component */ "Zy+9");
/* harmony import */ var _pages_components_assessment_assessment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/components/assessment/assessment.component */ "fEjf");
/* harmony import */ var _pages_components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/components/pruefung-result/pruefung-result.component */ "XZfd");
/* harmony import */ var _pages_components_training_result_training_result_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/components/training-result/training-result.component */ "72/k");
/* harmony import */ var _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/monitoring/monitoring.component */ "rh23");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
        _pages_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__["DefaultPageComponent"],
        _pages_inhalte_kapitel1_kapitel1_component__WEBPACK_IMPORTED_MODULE_7__["Kapitel1Component"],
        _pages_inhalte_kapitel2_kapitel2_component__WEBPACK_IMPORTED_MODULE_8__["Kapitel2Component"],
        _pages_inhalte_kapitel3_kapitel3_component__WEBPACK_IMPORTED_MODULE_9__["Kapitel3Component"],
        _pages_inhalte_kapitel4_kapitel4_component__WEBPACK_IMPORTED_MODULE_10__["Kapitel4Component"],
        _pages_inhalte_kapitel5_kapitel5_component__WEBPACK_IMPORTED_MODULE_11__["Kapitel5Component"],
        _pages_training_training_page_training_page_component__WEBPACK_IMPORTED_MODULE_12__["TrainingPageComponent"],
        _pages_pruefung_pruefung_page_pruefung_page_component__WEBPACK_IMPORTED_MODULE_13__["PruefungPageComponent"],
        _pages_fortschritt_fortschritt_page_fortschritt_page_component__WEBPACK_IMPORTED_MODULE_14__["FortschrittPageComponent"],
        _pages_inhalte_inhalte_page_inhalte_page_component__WEBPACK_IMPORTED_MODULE_15__["InhaltePageComponent"],
        _pages_components_assessment_assessment_component__WEBPACK_IMPORTED_MODULE_16__["AssessmentComponent"],
        _pages_components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_17__["PruefungResultComponent"],
        _pages_components_training_result_training_result_component__WEBPACK_IMPORTED_MODULE_18__["TrainingResultComponent"],
        _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_19__["MonitoringComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "Zy+9":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inhalte/inhalte-page/inhalte-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: InhaltePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InhaltePageComponent", function() { return InhaltePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class InhaltePageComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToTop(div) {
        div.scroll(0, 0);
    }
}
InhaltePageComponent.ɵfac = function InhaltePageComponent_Factory(t) { return new (t || InhaltePageComponent)(); };
InhaltePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InhaltePageComponent, selectors: [["app-inhalte-page"]], decls: 28, vars: 0, consts: [[1, "section-darker"], [1, "title"], ["routerLink", "kapitel/1", "routerLinkActive", "active"], ["routerLink", "kapitel/2", "routerLinkActive", "active"], ["routerLink", "kapitel/3", "routerLinkActive", "active"], ["routerLink", "kapitel/4", "routerLinkActive", "active"], ["routerLink", "kapitel/5", "routerLinkActive", "active"], [1, "section-lighter"], [1, "scroll-box"], ["scrollbox", ""], [3, "activate"]], template: function InhaltePageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kapitel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Computer und Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Passwortsicherheit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sicher im Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-Mails und Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Vieren und Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "router-outlet", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function InhaltePageComponent_Template_router_outlet_activate_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx.scrollToTop(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n}\n\n.section-darker[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.section-darker[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.section-darker[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: white;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  padding: 1rem;\n  padding-left: 10%;\n  color: #212529;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  filter: none;\n}\n\n.section-lighter[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 2rem 0 2rem 2rem;\n}\n\n.scroll-box[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n}\n\n@media only screen and (max-width: 850px) {\n  .section-darker[_ngcontent-%COMP%], .section-lighter[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .scroll-box[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .section-darker[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 6%;\n  }\n  .section-darker[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section-darker[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .section-darker[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .section-darker[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex-grow: 2;\n    margin: 0;\n    padding: 1rem;\n  }\n\n  .section-lighter[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 94%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5oYWx0ZS1wYWdlLmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7QUFDUjs7QUFDSTtFQUNJLGlCQUFBO0FBQ1I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2xCQTtBRG9CUjs7QUFBSTtFQUNJLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSTtJQUNJLFVBQUE7RUFLTjs7RUFIRTtJQUNJLGFBQUE7RUFNTjtBQUNGOztBQUxBO0VBQ0k7SUFDSSw4QkFBQTtFQU9OOztFQUxFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7RUFRTjtFQU5NO0lBQ0ksYUFBQTtFQVFWO0VBUE07SUFDSSxtQkFBQTtJQUNBLG9CQUFBO0VBU1Y7RUFQVTtJQUNJLFlBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtFQVNkOztFQVBFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUFVTjtBQUNGIiwiZmlsZSI6ImluaGFsdGUtcGFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgLi4vLi4vLi4vLi4vdmFyaWFibGVzXG46aG9zdFxuICAgIGhlaWdodDogMTAwJVxuICAgIHdpZHRoOiAxMDAlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoXG5cbi5zZWN0aW9uLWRhcmtlclxuICAgIHdpZHRoOiAzMCVcbiAgICBwYWRkaW5nOiAycmVtIDBcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG5cbiAgICAudGl0bGVcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAuYWN0aXZlXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlXG5cbm5hdlxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcblxuICAgIGFcbiAgICAgICAgbWFyZ2luOiAuNXJlbSAwXG4gICAgICAgIHBhZGRpbmc6IDFyZW1cbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCVcbiAgICAgICAgY29sb3I6ICRibGFja1xuXG4gICAgYTpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KVxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAgICAgZmlsdGVyOiBub25lXG5cbi5zZWN0aW9uLWxpZ2h0ZXJcbiAgICB3aWR0aDogODAlXG4gICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbVxuXG4uc2Nyb2xsLWJveFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW1cbiAgICBvdmVyZmxvdzogYXV0b1xuICAgIGhlaWdodDogMTAwJVxuICAgIHdpZHRoOiAxMDAlXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpXG4gICAgLnNlY3Rpb24tZGFya2VyLCAuc2VjdGlvbi1saWdodGVyXG4gICAgICAgIHBhZGRpbmc6IDBcblxuICAgIC5zY3JvbGwtYm94XG4gICAgICAgIHBhZGRpbmc6IDFyZW1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcbiAgICA6aG9zdFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2VcblxuICAgIC5zZWN0aW9uLWRhcmtlclxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDYlXG5cbiAgICAgICAgaDIsIHNwYW5cbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgbmF2XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaFxuXG4gICAgICAgICAgICBhXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbVxuXG4gICAgLnNlY3Rpb24tbGlnaHRlclxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDk0JVxuIiwiJGZvbnQtc3RhY2s6ICdSb2JvdG8nLCBzYW5zLXNlcmlmXG4kcHJpbWFyeTogIzU3ODhGOVxuJHByaW1hcnktZGFyazogIzIzNERCMFxuJHByaW1hcnktbGlnaHQ6ICNDQ0RCRkZcbiRzZWNvbmRhcnk6IGxpbmVhci1ncmFkaWVudCgxMjIuNThkZWcsICM3NkI2NUEgLTUxLjU1JSwgIzQxOUUxNCAxMDIuMzUlKVxuJHNlY29uZGFyeS1saWdodDogI0UwRUZEQVxuJGdyZWVuOiAjNDE5RTE0XG4kcmVkOiAjRjk1NzU3XG4kZ3JleTogIzg4ODg4OFxuJGdyZXktbGlnaHQ6ICNFQkVCRUJcbiRncmV5LWRhcms6ICM0NTQ1NDVcbiRibGFjazogIzIxMjUyOVxuJHdoaXRlLWJnOiByZ2JhKDI1NSwyNTUsMjU1LC45NSlcbiJdfQ== */"] });


/***/ }),

/***/ "a3WT":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pruefung/pruefung-page/pruefung-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: PruefungPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruefungPageComponent", function() { return PruefungPageComponent; });
/* harmony import */ var _PruefungsPhasen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PruefungsPhasen */ "Nn0d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app-dao.service */ "9nnm");
/* harmony import */ var _services_pruefungs_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/pruefungs-controller.service */ "E+nY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/pruefung-result/pruefung-result.component */ "XZfd");
/* harmony import */ var _components_assessment_assessment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/assessment/assessment.component */ "fEjf");








function PruefungPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wie l\u00E4uft eine Pr\u00FCfung Ab?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Modus:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Pr\u00FCfungen bestehen aus zuf\u00E4lligen Aufgaben aller Kapitel. Dabei werden von jedem Kapitel 8 Aufgaben ausgew\u00E4hlt, die Sie beantworten m\u00FCssen. Nachdem Sie alle Aufgaben beantwortet haben, werden diese aufgel\u00F6st und Sie k\u00F6nnen sich Ihre und die korrekten Antworten ansehen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Aufgaben:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Es gibt zwei unterschiedliche Arten von Aufgaben, Multiple Choice Fragen und Zuordnungen: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " In Multiple Choice Aufgaben wird Ihnen eine Frage mit zugeh\u00F6rigen Antworten angezeigt. Sie m\u00FCssen die korrekten Antworten ausw\u00E4hlen, wobei eine, mehrere oder alle Antworten richtig sein k\u00F6nnen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " In Zuordnungs-Aufgaben werden Ihnen mehrere Texte angezeigt. Neben jedem Text befindet sich ein Men\u00FC, in dem Sie einen Begriff ausw\u00E4hlen k\u00F6nnen. Sie m\u00FCssen den angezeigten Texten ihre zugeh\u00F6rigen Begriffe zuordnen. Ein Begriff kann auch mehrmals verwendet und daher mehreren Texten zugeordnet werden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PruefungPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Starten Sie eine Pr\u00FCfung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Hinweis:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Pr\u00FCfungen dauern 40-60 Minuten.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Abgebrochene Pr\u00FCfungen werden nicht gewertet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PruefungPageComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.pruefungsController.startPruefung(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Pr\u00FCfung Starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PruefungPageComponent_div_2_app_pruefung_result_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-pruefung-result", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("szenarioNavClicked", function PruefungPageComponent_div_2_app_pruefung_result_1_Template_app_pruefung_result_szenarioNavClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.pruefungsController.showSzenarioResultWithId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pruefung", ctx_r5.pruefungsController.pruefungsResult)("btnDisabled", false);
} }
const _c0 = function (a0) { return { "feedback-mode": a0 }; };
function PruefungPageComponent_div_2_app_assessment_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-assessment", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("confirmBtn", function PruefungPageComponent_div_2_app_assessment_2_Template_app_assessment_confirmBtn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.pruefungsController.confirmBtnClicked($event); })("exitBtn", function PruefungPageComponent_div_2_app_assessment_2_Template_app_assessment_exitBtn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.pruefungsController.exitBtnClicked($event); })("szenarioNav", function PruefungPageComponent_div_2_app_assessment_2_Template_app_assessment_szenarioNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.pruefungsController.chooseSzenario($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r6.pruefungsController.phase == ctx_r6.PruefungsPhase.Feedback))("title", ctx_r6.pruefungsController.phase)("confirmBtnText", ctx_r6.pruefungsController.confirmBtnText)("exitBtnText", ctx_r6.pruefungsController.exitBtnText)("szenario", ctx_r6.pruefungsController.szenario)("mcAntwortSelected", ctx_r6.pruefungsController.mcAntwortSelected)("zuordnungsAuswahl", ctx_r6.pruefungsController.zuordnungsAuswahl)("currentSzenarioIndex", ctx_r6.pruefungsController.pruefung.aktuellesSzenario)("szenarioFortschritt", ctx_r6.pruefungsController.szenarioFortschritt)("szenarioResults", ctx_r6.pruefungsController.szenarioResults)("feedBackMode", ctx_r6.pruefungsController.phase == ctx_r6.PruefungsPhase.Feedback);
} }
const _c1 = function (a0) { return { "flex-column": a0 }; };
function PruefungPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PruefungPageComponent_div_2_app_pruefung_result_1_Template, 1, 2, "app-pruefung-result", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PruefungPageComponent_div_2_app_assessment_2_Template, 1, 13, "app-assessment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r2.pruefungsController.phase == ctx_r2.PruefungsPhase.Feedback));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.pruefungsController.phase == ctx_r2.PruefungsPhase.Feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.pruefungsController.phase == ctx_r2.PruefungsPhase.Pruefung || ctx_r2.pruefungsController.phase == ctx_r2.PruefungsPhase.Feedback);
} }
class PruefungPageComponent {
    constructor(router, appDao, pruefungsController) {
        this.router = router;
        this.appDao = appDao;
        this.pruefungsController = pruefungsController;
        this.PruefungsPhase = _PruefungsPhasen__WEBPACK_IMPORTED_MODULE_0__["PruefungsPhase"];
    }
    ngOnInit() {
        if (!this.appDao.user.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }
    ngOnDestroy() {
        this.pruefungsController.phase = _PruefungsPhasen__WEBPACK_IMPORTED_MODULE_0__["PruefungsPhase"].Beendet;
    }
}
PruefungPageComponent.ɵfac = function PruefungPageComponent_Factory(t) { return new (t || PruefungPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_3__["AppDaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pruefungs_controller_service__WEBPACK_IMPORTED_MODULE_4__["PruefungsControllerService"])); };
PruefungPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PruefungPageComponent, selectors: [["app-pruefung-page"]], decls: 3, vars: 3, consts: [["class", "section-darker", 4, "ngIf"], ["class", "section-lighter", 4, "ngIf"], ["class", "full-section-lighter pruefung-box", 3, "ngClass", 4, "ngIf"], [1, "section-darker"], [1, "title"], [1, "info"], [1, "section-lighter"], [1, "kapitel"], [1, "secondary-btn", 3, "click"], [1, "full-section-lighter", "pruefung-box", 3, "ngClass"], ["class", "result-screen", 3, "pruefung", "btnDisabled", "szenarioNavClicked", 4, "ngIf"], [3, "ngClass", "title", "confirmBtnText", "exitBtnText", "szenario", "mcAntwortSelected", "zuordnungsAuswahl", "currentSzenarioIndex", "szenarioFortschritt", "szenarioResults", "feedBackMode", "confirmBtn", "exitBtn", "szenarioNav", 4, "ngIf"], [1, "result-screen", 3, "pruefung", "btnDisabled", "szenarioNavClicked"], [3, "ngClass", "title", "confirmBtnText", "exitBtnText", "szenario", "mcAntwortSelected", "zuordnungsAuswahl", "currentSzenarioIndex", "szenarioFortschritt", "szenarioResults", "feedBackMode", "confirmBtn", "exitBtn", "szenarioNav"]], template: function PruefungPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PruefungPageComponent_div_0_Template, 18, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PruefungPageComponent_div_1_Template, 12, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PruefungPageComponent_div_2_Template, 3, 5, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pruefungsController.phase == ctx.PruefungsPhase.Beendet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pruefungsController.phase == ctx.PruefungsPhase.Beendet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pruefungsController.phase != ctx.PruefungsPhase.Beendet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_6__["PruefungResultComponent"], _components_assessment_assessment_component__WEBPACK_IMPORTED_MODULE_7__["AssessmentComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  margin-bottom: 4%;\n}\n\n.section-darker[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  padding-top: 8%;\n  padding-bottom: 2%;\n}\n\n.section-darker[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.5rem;\n  margin: 2rem 0 0.2rem 0;\n  padding: 0;\n}\n\n.section-darker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 0;\n}\n\n.info[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding-left: 4%;\n  padding-right: 4%;\n}\n\n.section-lighter[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 8%;\n  padding-bottom: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.kapitel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.pruefung-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.feedback-mode[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 16px 18px 0;\n  border-left: 1px solid #c8c8c8;\n}\n\n.result-screen[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n@media only screen and (max-width: 850px) {\n  .flex-column[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .result-screen[_ngcontent-%COMP%], .feedback-mode[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50%;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n    overflow: auto;\n  }\n\n  .section-darker[_ngcontent-%COMP%], .section-lighter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .section-darker[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJ1ZWZ1bmctcGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQUVSOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0FBUUo7O0FBTkE7RUFDSTtJQUNJLHNCQUFBO0VBU047O0VBUEU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQVVOO0FBQ0Y7O0FBUEE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQVNOOztFQVBFO0lBQ0ksV0FBQTtFQVVOOztFQVJFO0lBQ0ksa0JBQUE7RUFXTjs7RUFURTtJQUNJLGlCQUFBO0VBWU47QUFDRiIsImZpbGUiOiJwcnVlZnVuZy1wYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgd2lkdGg6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2hcblxuaDJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICBtYXJnaW46MFxuICAgIG1hcmdpbi1ib3R0b206IDQlXG5cbi5zZWN0aW9uLWRhcmtlclxuICAgIHdpZHRoOiA1MCVcbiAgICBwYWRkaW5nOiAycmVtIDBcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIHBhZGRpbmctdG9wOiA4JVxuICAgIHBhZGRpbmctYm90dG9tOiAyJVxuXG4gICAgaDNcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbVxuICAgICAgICBtYXJnaW46IDJyZW0gMCAuMnJlbSAwXG4gICAgICAgIHBhZGRpbmc6IDBcblxuICAgIHBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMFxuICAgICAgICBtYXJnaW46IDBcblxuLmluZm9cbiAgICBvdmVyZmxvdzogYXV0b1xuICAgIHBhZGRpbmctbGVmdDogNCVcbiAgICBwYWRkaW5nLXJpZ2h0OiA0JVxuXG4uc2VjdGlvbi1saWdodGVyXG4gICAgd2lkdGg6IDUwJVxuICAgIHBhZGRpbmctdG9wOiA4JVxuICAgIHBhZGRpbmctYm90dG9tOiAxMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuLmthcGl0ZWxcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4ucHJ1ZWZ1bmctYm94XG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG5cbi5mZWVkYmFjay1tb2RlXG4gICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICBib3JkZXItcmFkaXVzOiAwIDE2cHggMThweCAwXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMClcblxuLnJlc3VsdC1zY3JlZW5cbiAgICB3aWR0aDogNjAlXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpXG4gICAgLmZsZXgtY29sdW1uXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cblxuICAgIC5yZXN1bHQtc2NyZWVuLCAuZmVlZGJhY2stbW9kZVxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDUwJVxuICAgIFxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXG4gICAgOmhvc3RcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgICBvdmVyZmxvdzogYXV0b1xuXG4gICAgLnNlY3Rpb24tZGFya2VyLCAuc2VjdGlvbi1saWdodGVyXG4gICAgICAgIHdpZHRoOiAxMDAlXG5cbiAgICAuc2VjdGlvbi1kYXJrZXJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtXG5cbiAgICAuaW5mb1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZVxuXG4iXX0= */"] });


/***/ }),

/***/ "f5/e":
/*!**************************************************************!*\
  !*** ./src/app/pages/inhalte/kapitel3/kapitel3.component.ts ***!
  \**************************************************************/
/*! exports provided: Kapitel3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kapitel3Component", function() { return Kapitel3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-dao.service */ "9nnm");


class Kapitel3Component {
    constructor(appDao) {
        this.appDao = appDao;
    }
    ngOnInit() {
    }
}
Kapitel3Component.ɵfac = function Kapitel3Component_Factory(t) { return new (t || Kapitel3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_1__["AppDaoService"])); };
Kapitel3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Kapitel3Component, selectors: [["app-kapitel3"]], decls: 179, vars: 3, consts: [[1, "kapitel-description"], [1, "text-normal"], [1, "kapitel-reference"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=20", "target", "_blank"], [1, "kapitel-hinweise"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=22", "target", "_blank"], [1, "inhalte-exkurs-box"], ["href", "https://support.mozilla.org/de/kb/wie-kann-ich-feststellen-ob-meine-verbindung-zu-einer-website-verschluesselt-erfolgt", "target", "_blank"], ["height", "100px", "alt", " ", 3, "src"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=24", "target", "_blank"], ["href", "https://www.wko.at/service/innovation-technologie-digitalisierung/it-sicherheitshandbuch-mitarbeiter.pdf#page=38", "target", "_blank"]], template: function Kapitel3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3. Sicher unterwegs im Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ebenso wie im realen Leben ist man auch im Internet mit Kriminellen und Betr\u00FCgern konfrontiert. Es liegt in Ihrer eigenen Verantwortung, solche Bedrohungen zu erkennen und entsprechend darauf zu reagieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "3.1 Vorsichtsma\u00DFnahmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 20: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Einige einfache Verhaltensregeln reichen aus, um typische Gefahren zu minimieren:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Gebrauchen Sie Ihren gesunden Menschenverstand: Websites, die von bekannten und angesehenen Anbietern ins Netz gestellt werden, ist eher zu vertrauen als unbekannten Seiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Websites, die mit dem Download kostenloser Zusatzsoftware oder unseri\u00F6sen Gewinnspielen locken, ist grunds\u00E4tzlich zu misstrauen. Nat\u00FCrlich gibt es auch seri\u00F6se Anbieter von kostenlosen Free- und Shareware-Programmen im Internet. Sollten Sie sich aber nicht sicher sein, fragen Sie bei Ihren Vorgesetzten oder EDV-Verantwortlichen nach. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Vor dem Download von Zusatzprogrammen \u2013 auch bei scheinbar ungef\u00E4hrlichen Dingen wie Bildschirmschonern, Klingelt\u00F6nen oder Mauszeigern \u2013 ist grunds\u00E4tzlich die Zustimmung Ihrer Vorgesetzten oder EDV-Verantwortlichen einzuholen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Das Herunterladen von Dateien kann \u2013 abgesehen von der Gefahr des Einschleppens von Schadsoftware \u2013 auch zu lizenz- und urheberrechtlichen Problemen f\u00FChren. Das gilt auch f\u00FCr Software, die nicht installiert oder ausgef\u00FChrt wurde und nur auf dem B\u00FCrorechner gespeichert ist. Holen Sie daher vorher die Zustimmung Ihrer Vorgesetzten oder EDV-Verantwortlichen ein. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Meiden Sie Hackerseiten und solche, auf denen kommerzielle Software, m\u00F6glicherweise in gecrackter Form, zum Download angeboten wird (sogenannte \u201EWarez\u201C-Seiten). Die Wahrscheinlichkeit, dadurch Schadsoftware auf den Computer zu laden, ist naturgem\u00E4\u00DF deutlich h\u00F6her als beim Aufsuchen der Website einer Bank oder eines bekannten Unternehmens. \u201EVerd\u00E4chtige\u201C Seiten sollten Sie am besten gar nicht aufrufen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Rufen Sie keine Websites mit pornografischen, gewaltverherrlichenden oder strafrechtlich bedenklichen Inhalten auf. Das kann gravierende rechtliche Probleme \u2013 auch f\u00FCr Ihr Unternehmen \u2013 nach sich ziehen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bei der nutzung von Sozialen Netzwerken sind besondere Vorsichtsma\u00DFnahmen zu ber\u00FCcksichtigen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Soziale Netzwerke, wie Facebook, Xing oder Twitter, erfreuen sich gro\u00DFer Beliebtheit. Viele Plattformen bieten Netzwerke f\u00FCr spezifische Themenbereiche an. Leider n\u00FCtzen aber auch Kriminelle diese Plattformen f\u00FCr ihre Zwecke. Daher sind mit der Benutzung sozialer Netzwerke auch Risiken verbunden. Neben dem Diebstahl pers\u00F6nlicher Daten und dem Verbreiten von Spam oder Schadsoftware sammeln immer mehr Angreifer Informationen, die Nutzerinnen und Nutzer der Plattformen \u00FCber sich und ihr Umfeld preisgeben. Diese Informationen erlauben es, gezielte Angriffe auf Unternehmen durchzuf\u00FChren, indem etwa personalisierte Phishing-Mails an Gesch\u00E4ftsf\u00FChrung, Vertrieb oder Buchhaltung verschickt werden oder ma\u00DFgeschneiderte Schadsoftware Firmengeheimnisse ausspioniert oder zerst\u00F6rt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Bedenken Sie die m\u00F6glichen arbeitsrechtlichen Konsequenzen: Wenn Sie vertrauliche Informationen des Unternehmens preisgeben oder das Unternehmen durch Ihre Aussagen in Verruf bringen, kann dies als Verletzung Ihrer Treuepflicht gedeutet. Wenn Sie das Sicherheitsrisiko bei der Nutzung sozialer Netzwerke minimieren wollen, sollten Sie einige grundlegende Sicherheitshinweise beachten:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Informieren Sie sich, ob in Ihrem Unternehmen die Nutzung sozialer Netzwerke w\u00E4hrend der Arbeitszeit gestattet ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Das Netz vergisst nie! Denken Sie immer daran, dass Informationen, die Sie auf sozialen Netzwerken preisgeben, \u00F6ffentlich sind und oft nur schwer wieder gel\u00F6scht werden k\u00F6nnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Vermeiden Sie es, vertrauliche Informationen \u00FCber Ihr Unternehmen, Ihre berufliche Rolle oder Ihre gesch\u00E4ftliche T\u00E4tigkeit zu ver\u00F6ffentlichen. Alle diese Daten k\u00F6nnen bei Angriffen genutzt werden, um Sicherheitsvorkehrungen zu umgehen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Unterscheiden Sie zwischen Ihrem gesch\u00E4ftlichen und Ihrem privaten Ich und verwenden Sie unterschiedliche Plattformen oder Profile. Private Daten haben auf Gesch\u00E4ftsprofilen nichts verloren und umgekehrt. Damit erschweren Sie den Missbrauch Ihrer Daten f\u00FCr Angriffe und sch\u00FCtzen zudem noch Ihre Privatsph\u00E4re. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Pr\u00FCfen Sie unbedingt die Identit\u00E4t der anfragenden Person, bevor Sie diese zu Ihrem Netzwerk hinzuf\u00FCgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Nutzen Sie die Sicherheits- und Datenschutzoptionen, die vom Plattformanbieter zur Verf\u00FCgung gestellt werden und schr\u00E4nken Sie den Zugang zu Ihrem Profil ein. Kontrollieren Sie regelm\u00E4\u00DFig, ob der Betreiber Ver\u00E4nderungen vorgenommen hat, die unerw\u00FCnschte Zugriffe erm\u00F6glichen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Vorsicht bei externen Links: Bedenken Sie, dass soziale Netzwerke oft genutzt werden, um Schadsoftware zu verbreiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Verwenden Sie auch in sozialen Netzwerken ein sicheres Passwort! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3.2 Verschl\u00FCsselte Daten\u00FCbertragung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 22: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Die Daten\u00FCbertragung zwischen Servern im Internet und Ihrem PC erfolgt im Normalfall unverschl\u00FCsselt. Daher k\u00F6nnen \u00FCbertragene Daten von Personen mit entsprechenden Zugangsm\u00F6glichkeiten problemlos abgeh\u00F6rt oder manipuliert werden. Um dies bei der \u00DCbertragung sensibler Daten zu verhindern, wurde das Protokoll HTTPS mit dem Verschl\u00FCsselungsprotokoll TLS/SSL entwickelt. Dadurch sind folgende Sicherheitsmerkmale gew\u00E4hrleistet:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Die \u00FCbertragenen Daten werden verschl\u00FCsselt und sind f\u00FCr Au\u00DFenstehende nicht lesbar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Die Identit\u00E4t des Webservers, der die Daten verarbeitet, wird anhand eines digitalen Zertifikats gepr\u00FCft. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Die \u00FCbertragenen Daten werden durch verschiedene Rechenverfahren gepr\u00FCft und vor Manipulationen gesch\u00FCtzt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sicherheit durch digitale Zertifikate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Das wichtigste Element einer HTTPS-Verbindung ist das digitale Zertifikat des Website-Betreibers. Dieses Zertifikat wird vom Internet-Browser verwendet, um die Identit\u00E4t des Website-Betreibers festzustellen. Dadurch kann verhindert werden, dass eine gesicherte Verbindung zu einem Anbieter aufgebaut wird, der sich als jemand anderer ausgibt (z.B. einem Betr\u00FCger, der die Website einer Bank nachbaut, um Kunden ihre Passw\u00F6rter zu entlocken).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Folgende Vorsichtsma\u00DFnahmen sollten bei HTTPS-Verbindungen beachtet werden:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Besondere Vorsicht ist geboten, wenn der Internet-Browser auf Schwierigkeiten mit dem Zertifikat hinweist. Er zeigt damit an, dass er den Aussteller des Zertifikats nicht kennt, dass das Zertifikat abgelaufen oder unsicher ist, oder dass der Name im Zertifikat nicht zur Website passt. Oft sind diese Meldungen nicht leicht zu interpretieren. Deswegen sollten Sie entweder Ihre IT-Verantwortlichen oder besser noch kompetente Mitarbeiterinnen oder Mitarbeiter des Unternehmens, dessen Website Sie besuchen wollen, um Rat fragen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Exkurs: Wie kann ich feststellen, ob meine Verbindung zu einer Website verschl\u00FCsselt erfolgt?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " https://support.mozilla.org/de/kb/wie-kann-ich-feststellen-ob-meine-verbindung-zu-einer-website-verschluesselt-erfolgt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Beim Besuch einer Webseite wird in der Adressleiste links neben der Webadresse (URL) die Schaltfl\u00E4che zur Identit\u00E4t einer Website (ein Sperrschloss) angezeigt. Damit k\u00F6nnen Sie schnell feststellen, ob die Verbindung zur gerade angezeigten Website verschl\u00FCsselt ist und in einigen F\u00E4llen sehen Sie auch, wem die Website geh\u00F6rt. Das soll Ihnen dabei helfen, b\u00F6sartige Seiten zu erkennen und zu vermeiden, dass diese an Ihre pers\u00F6nlichen Daten gelangen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Graues Sperrschloss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Ein graues Sperrschloss bedeutet: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Sie sind mit Sicherheit mit jener Webseite verbunden, deren Webadresse (URL) in der Adressleiste angezeigt wird, und die Verbindung wurde nicht abgefangen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Die Verbindung zwischen Firefox und der Webseite ist verschl\u00FCsselt, um Lauschangriffe zu verhindern. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Bei Webseiten, die ein EV-Zertifikat besitzen, zeigt ein Klick auf das graue Sperrschloss auch den Namen des Unternehmens oder der Organisation sowie den Standort des Website-Eigent\u00FCmers an. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Graues Sperrschloss mit gelbem Warndreieck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Ein graues Sperrschloss mit gelbem Warndreieck bedeutet, dass die Verbindung zwischen Firefox [dem Webbrowser] und der Website nur teilweise verschl\u00FCsselt wird und nicht abh\u00F6rsicher ist. Standardm\u00E4\u00DFig blockiert Firefox [oder andere Webbrowser] keine gemischten Inhalte (z. B. Grafiken), Sie sehen nur die Warnung, dass die Seite nicht vollst\u00E4ndig sicher ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Ein graues Sperrschloss mit einem gelben Warndreieck wird auch bei Webseiten mit Zertifikatswarnungen angezeigt, z. B. bei Webseiten, deren Zertifikat selbst signiert oder nicht von einer vertrauensw\u00FCrdigen Zertifizierungsstelle verifiziert wurde. Dieses Problem muss vom Entwickler der Website behoben werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Rot durchgestrichenes graues Sperrschloss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Ein rot durchgestrichenes Sperrschloss bedeutet, dass die Verbindung zwischen Firefox und der Website entweder unter Verwendung eines unsicheren Protokolls (HTTP oder FTP) erfolgt oder dass sie nur teilweise verschl\u00FCsselt ist, da Sie manuell die Blockierung gemischter Inhalte aufgehoben haben. Die Verbindung ist nicht abh\u00F6rsicher und verhindert keine Man-in-the-Middle-Angriffe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Kontrollieren Sie die Internet-Adresse genau, um kriminellen Methoden vorzubeugen. Es gab bereits Betrugsf\u00E4lle, in denen die Opfer auf \u00E4hnlich aussehende URLs gelockt wurden (http://eban-king.bawog.com anstelle von https://ebanking.bawag.com, http://www.paipal.com statt https://www.paypal.com). Durch die Kontrolle der Adresszeile im Browser k\u00F6nnen Sie diesen Betrug erkennen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "3.3 Tracking Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 24: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Cookies sind sehr kleine Dateien, die beim Besuch einer Website auf Ihrem Computer gespeichert werden. Wenn Sie diese Website wieder aufrufen, darf sie ihre eigenen Cookies lesen. Auf diese Weise lassen sich bestimmte Einstellungen speichern, zum Beispiel Ihre Identit\u00E4t nach einer Web-Anmeldung oder Ihr Warenkorb in einem Online-Shop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Sehr viele Websites setzen aber auch sogenannte \u201ETracking Cookies\u201C ein, die von gro\u00DFen Werbeanbietern wie Google oder Facebook erstellt und ausgewertet werden. Damit lassen sich Internetzugriffe \u00FCber mehrere Websites hinweg verfolgen. Die Werbeanbieter k\u00F6nnen damit Bewegungsprofile einzelner User im Internet erstellen und f\u00FCr gezielte Werbung verwenden. Wenn Sie ein Google Plus- oder Facebook-Konto besitzen, k\u00F6nnen sie sogar Ihre Identit\u00E4t bestimmen und diesen \u201EBewegungsprofilen\u201C zuordnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Das ist v\u00F6llig legal \u2013 sofern Sie diesen Cookies zustimmen. Viele Websites bieten Ihnen aber gar nicht die M\u00F6glichkeit, sich zu entscheiden. In solchen F\u00E4llen bleibt Ihnen nur, bestimmte Einstellungen in Ihrem Browser zu setzen, die das \u201ETracking\u201C unterbinden:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Die meisten Browser bieten die M\u00F6glichkeit, die besuchten Websites dazu aufzufordern, Ihre Aktivit\u00E4ten nicht zu verfolgen. Diese Einstellung wird auch als \u201EDo Not Track\u201C bezeichnet. Viele Websites halten sich allerdings nicht an diese Auflage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Eine weitere M\u00F6glichkeit besteht darin, Cookies regelm\u00E4\u00DFig zu l\u00F6schen, z.B. nach jeder Internetsitzung. Das kann recht aufw\u00E4ndig werden; in manchen Browsern l\u00E4sst es sich aber automatisieren. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Einige Browser erlauben es, gezielt Cookies von Drittanbietern (das sind fast immer Tracking Cookies) zu blockieren. Die Cookies der besuchten Website sowie Session Cookies bleiben erlaubt, sodass die Funktion der Website dadurch nicht beeintr\u00E4chtigt wird. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Guten Schutz gegen Tracking bieten spezielle kostenlose Zusatzprogramme (Add-ons) wie z.B. Ghostery oder uBlock. Diese analysieren den Internetverkehr und blockieren anhand spezieller Listen alle unerw\u00FCnschten Cookies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Es ist nat\u00FCrlich einfacher, Tracking einfach zuzulassen. Die Entscheidung dar\u00FCber sollte aber Ihnen vorbehalten bleiben. Die oben angef\u00FChrten Einstellungen bieten zusammengenommen eine gute M\u00F6glichkeit, die Nachverfolgung Ihrer Internet-Aktivit\u00E4ten zu unterbinden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Begriffe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Referenz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " WKO Sicherheitshandbuch f\u00FCr Mitarbeiterinnen und Mitarbeiter, Seite 38: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Cookies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Cookies werden eingesetzt, um Informationen zu fr\u00FCher aufgerufenen Websites in kleinen Dateien auf dem Computer zu speichern. Sie erm\u00F6glichen beispielsweise, pers\u00F6nliche Einstellungen aus fr\u00FCheren Sitzungen wiederherzustellen oder Informationen aus Online-Shops ohne explizite Benutzeranmeldung zu speichern. Im Allgemeinen sind Cookies ungef\u00E4hrlich, allerdings k\u00F6nnen sie dazu verwendet werden, das individuelle Surfverhalten auszuforschen und so f\u00FCr zielgruppengerechte Werbung genutzt werden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Digitale Zertifikate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Digitale Zertifikate bilden die Grundlage f\u00FCr die Authentifizierung von Webservern beim Einsatz von HTTPS. Sie werden au\u00DFerdem auch zur Verschl\u00FCsselung und zum Signieren von E-Mails gen\u00FCtzt. Zertifikate werden von einer Zertifizierungsstelle herausgegeben und weisen die Identit\u00E4t des Zertifikatsinhabers aus. Diese Zertifizierungsstellen k\u00F6nnen wieder durch andere Stellen zertifiziert sein; insgesamt bildet sich so eine Zertifizierungskette oder Zertifikatshierarchie, die bis zu einer obersten Stammzertifizierungsstelle reicht.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "URL:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " URl ist die Abk\u00FCrzung f\u00FCr Uniform Resource Locator, sie ist gewisserma\u00DFen die Adressangabe f\u00FCr einen Dienst in einem Computernetzwerk. Die URL f\u00FCr die Website von it-safe ist z.B. http://www.it-safe.at. Eine URL besteht aus der Zugriffsmethode auf diesen Dienst \u2013 im Web \u00FCblicherweise http oder https, f\u00FCr Daten\u00FCbertragungen auch ftp \u2013 und dem Ort des Dienstes. An die URL kann noch, durch ein Fragezeichen getrennt, ein weiterer Textteil angeschlossen werden, um z.B. eine Anfrage an den verarbeitenden Server zu \u00FCbertragen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "HTTP:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " HTTP ist die Abk\u00FCrzung f\u00FCr HyperText Transfer Protocol, dem typischen \u00DCbertragungsprotokoll f\u00FCr Webseiten. \u00DCber HTTP werden Webseiten, d.h. Texte und Bilder von Servern im Internet an den jeweiligen Browser \u00FCbertragen. Es k\u00F6nnen aber auch in Gegenrichtung Daten vom Browser an den Server gesendet werden, z.B. um eine Suchanfrage oder Daten in einem Webformular zur weiteren Verarbeitung an den Webserver zu schicken. HTTP ist ein relativ unsicheres Protokoll, das Daten unverschl\u00FCsselt \u00FCbertr\u00E4gt und keinen Schutz vor dem Abfangen oder Umleiten von Daten bietet. Zur \u00DCbermittlung sensibler Daten ist es daher nicht geeignet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "HTTPS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " HTTPS ist die Abk\u00FCrzung f\u00FCr HyperText Transfer Protocol Secure, das durch die Verwendung des Verschl\u00FCsselungsprotokolls SSL/TLS ausreichende Sicherheit f\u00FCr die \u00DCbertragung sensibler Daten bietet. Mit Hilfe dieses Protokolls werden einerseits die \u00FCbertragenen Daten verschl\u00FCsselt und abh\u00F6rsicher gemacht, andererseits wird durch die Verwendung von digitalen Zertifikaten die Identit\u00E4t des Webservers gesichert. Angreifern sollte es daher \u2013 die richtige Handhabung vorausgesetzt \u2013 nicht m\u00F6glich sein, sich z.B. als E-Banking-Server auszugeben, um Internet-Usern Passw\u00F6rter, PINs oder TANs zu entlocken.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "FTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " FTP ist die Abk\u00FCrzung f\u00FCr File Transfer Protocol, ein Verfahren zur \u00DCbertragung von Dateien zwischen Kommunikationspartnern. Die Daten\u00FCbertragung ist in beide Richtungen m\u00F6glich, mittels FTP-Client k\u00F6nnen Daten vom Server zum Client oder vom Client zum Server \u00FCbertragen werden. \u00C4hnlich wie bei HTTP werden dabei die Daten (auch Passw\u00F6rter) unverschl\u00FCsselt \u00FCbertragen. In Zusammenhang mit dem Internet wird FTP vor allem dazu verwendet, Softwareinstallationsdateien von FTP-Servern auf Clients zu \u00FCbertragen oder neue Webseiteninhalte auf Servern einzuspielen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appDao.getImageUrl("/images/kapitel/3/themen/2/grey_lock.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appDao.getImageUrl("/images/kapitel/3/themen/2/grey_lock_warn.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appDao.getImageUrl("/images/kapitel/3/themen/2/open_lock.jpg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca2FwaXRlbDMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImthcGl0ZWwzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgd2lkdGg6IDEwMCVcbiJdfQ== */"] });


/***/ }),

/***/ "fEjf":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/assessment/assessment.component.ts ***!
  \*********************************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_type_check_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/type-check.service */ "t4yD");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app-dao.service */ "9nnm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function AssessmentComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.szenario.frage);
} }
function AssessmentComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.szenario.anweisung);
} }
function AssessmentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.appDao.serverBaseUrl + ctx_r2.szenario.bild_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.appDao.serverBaseUrl + ctx_r2.szenario.bild_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1, a2) { return { "selected": a0, "correct": a1, "incorrect": a2 }; };
function AssessmentComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssessmentComponent_div_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const antwort_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.toggleMcAntwort(antwort_r10.antwortID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const antwort_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r9.isAusgewaehlt(antwort_r10.antwortID), ctx_r9.feedBackMode && ctx_r9.isCorrectlyAnswered(antwort_r10), ctx_r9.feedBackMode && ctx_r9.isIncorrectlyAnswered(antwort_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", antwort_r10.text, " ");
} }
function AssessmentComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssessmentComponent_div_6_div_1_Template, 2, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.szenario.antworten);
} }
const _c1 = function (a0) { return { "correct-pill": a0 }; };
function AssessmentComponent_div_7_ng_container_1_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionEintrag_r17 = ctx.$implicit;
    const eintrag_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", optionEintrag_r17.begriff)("selected", optionEintrag_r17.begriff == ctx_r16.getSelectedEintrag(eintrag_r14))("disabled", ctx_r16.feedBackMode && !(optionEintrag_r17.begriff == ctx_r16.getSelectedEintrag(eintrag_r14)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r16.feedBackMode && eintrag_r14.begriff == optionEintrag_r17.begriff));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](optionEintrag_r17.begriff);
} }
const _c2 = function (a0, a1) { return { "correct-pill": a0, "incorrect-pill": a1 }; };
function AssessmentComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssessmentComponent_div_7_ng_container_1_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const eintrag_r14 = ctx.$implicit; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.selectedEintrag(eintrag_r14, _r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssessmentComponent_div_7_ng_container_1_option_6_Template, 2, 7, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const eintrag_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eintrag_r14.beschreibung);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r13.feedBackMode && ctx_r13.isZuweisungsAntwortCorrect(eintrag_r14), ctx_r13.feedBackMode && !ctx_r13.isZuweisungsAntwortCorrect(eintrag_r14)))("value", ctx_r13.getSelectedEintrag(eintrag_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.feedBackMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.sortZuordnungsbegriffe(ctx_r13.szenario.eintraege));
} }
function AssessmentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssessmentComponent_div_7_ng_container_1_Template, 7, 8, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.szenario.eintraege);
} }
const _c3 = function (a0) { return { "red-btn": a0 }; };
function AssessmentComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssessmentComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.exitBtnClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, !ctx_r5.feedBackMode && ctx_r5.exitBtnText != "zu den Inhalten"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.exitBtnText);
} }
function AssessmentComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssessmentComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.confirmButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.confirmBtnText);
} }
const _c4 = function (a0, a1) { return { "answered": a0, "current": a1 }; };
function AssessmentComponent_nav_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssessmentComponent_nav_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const i_r27 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.szenarioNavClicked(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, item_r26 === true, ctx_r25.currentSzenarioIndex === i_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r27 + 1);
} }
function AssessmentComponent_nav_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssessmentComponent_nav_11_button_1_Template, 2, 5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.szenarioFortschritt);
} }
const _c5 = function (a0, a1, a2) { return { "correct-pill": a0, "incorrect-pill": a1, "current": a2 }; };
function AssessmentComponent_nav_12_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssessmentComponent_nav_12_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r32 = ctx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.szenarioNavClicked(i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c5, item_r31, !item_r31, ctx_r30.currentSzenarioIndex === i_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r32 + 1);
} }
function AssessmentComponent_nav_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssessmentComponent_nav_12_button_1_Template, 2, 6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.szenarioResults);
} }
class AssessmentComponent {
    constructor(typeCheck, appDao) {
        this.typeCheck = typeCheck;
        this.appDao = appDao;
        this.confirmBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exitBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.szenarioNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "";
        this.confirmBtnText = "Weiter";
        this.exitBtnText = "";
        this.currentSzenarioIndex = -1;
        this.feedBackMode = false;
    }
    ngOnInit() {
    }
    confirmButtonClicked() {
        if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
            this.confirmBtn.emit(this.mcAntwortSelected);
        }
        else if (this.typeCheck.isSzenarioZuordnung(this.szenario)) {
            this.confirmBtn.emit(this.zuordnungsAuswahl);
        }
    }
    exitBtnClicked() {
        if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
            this.exitBtn.emit(this.mcAntwortSelected);
        }
        else if (this.typeCheck.isSzenarioZuordnung(this.szenario)) {
            this.exitBtn.emit(this.zuordnungsAuswahl);
        }
    }
    szenarioNavClicked(position) {
        if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
            this.szenarioNav.emit({ answer: this.mcAntwortSelected, nextSzenarioIndex: position });
        }
        else if (this.typeCheck.isSzenarioZuordnung(this.szenario)) {
            this.szenarioNav.emit({ answer: this.zuordnungsAuswahl, nextSzenarioIndex: position });
        }
    }
    toggleMcAntwort(antwortID) {
        if (!this.feedBackMode) {
            if (this.mcAntwortSelected.has(antwortID)) {
                this.mcAntwortSelected.delete(antwortID);
            }
            else {
                this.mcAntwortSelected.add(antwortID);
            }
        }
    }
    isAusgewaehlt(antwortID) {
        return this.mcAntwortSelected.has(antwortID);
    }
    isCorrectlyAnswered(antwort) {
        if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
            let ausgewaehlt = this.mcAntwortSelected.has(antwort.antwortID);
            return ausgewaehlt && antwort.korrekt;
        }
        return false;
    }
    isIncorrectlyAnswered(antwort) {
        if (this.typeCheck.isSzenarioMCFrage(this.szenario)) {
            let ausgewaehlt = this.mcAntwortSelected.has(antwort.antwortID);
            return ausgewaehlt && !antwort.korrekt || !ausgewaehlt && antwort.korrekt;
        }
        return false;
    }
    selectedEintrag(eintrag, value) {
        this.zuordnungsAuswahl.set(eintrag.eintragID, value);
    }
    getSelectedEintrag(eintrag) {
        let selected = this.zuordnungsAuswahl.get(eintrag.eintragID);
        if (selected !== undefined) {
            return selected;
        }
        return "";
    }
    isZuweisungsAntwortCorrect(eintrag) {
        return eintrag.begriff == this.zuordnungsAuswahl.get(eintrag.eintragID);
    }
    sortZuordnungsbegriffe(eintrag) {
        return eintrag.sort((a, b) => a.begriff.localeCompare(b.begriff));
    }
}
AssessmentComponent.ɵfac = function AssessmentComponent_Factory(t) { return new (t || AssessmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_type_check_service__WEBPACK_IMPORTED_MODULE_1__["TypeCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__["AppDaoService"])); };
AssessmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssessmentComponent, selectors: [["app-assessment"]], inputs: { title: "title", confirmBtnText: "confirmBtnText", exitBtnText: "exitBtnText", szenario: "szenario", mcAntwortSelected: "mcAntwortSelected", zuordnungsAuswahl: "zuordnungsAuswahl", currentSzenarioIndex: "currentSzenarioIndex", szenarioFortschritt: "szenarioFortschritt", szenarioResults: "szenarioResults", feedBackMode: "feedBackMode" }, outputs: { confirmBtn: "confirmBtn", exitBtn: "exitBtn", szenarioNav: "szenarioNav" }, decls: 13, vars: 10, consts: [[1, "title-sm"], [4, "ngIf"], ["class", "img-container", 4, "ngIf"], [1, "content"], ["class", "mcfrage", 4, "ngIf"], ["class", "zuordnung", 4, "ngIf"], [1, "buttons"], ["class", "confirm-btn primary-btn", 3, "ngClass", "click", 4, "ngIf"], ["class", "confirm-btn primary-dark-btn", 3, "click", 4, "ngIf"], [1, "img-container"], ["target", "_blank", 3, "href"], ["alt", "", 3, "src"], [1, "mcfrage"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "zuordnung"], [4, "ngFor", "ngForOf"], [3, "ngClass", "value", "change"], ["select", ""], ["value", "", 3, "disabled"], [3, "value", "selected", "disabled", "ngClass", 4, "ngFor", "ngForOf"], [3, "value", "selected", "disabled", "ngClass"], [1, "confirm-btn", "primary-btn", 3, "ngClass", "click"], [1, "confirm-btn", "primary-dark-btn", 3, "click"]], template: function AssessmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssessmentComponent_h2_2_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AssessmentComponent_h2_3_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AssessmentComponent_div_4_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssessmentComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssessmentComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AssessmentComponent_button_9_Template, 2, 4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AssessmentComponent_button_10_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AssessmentComponent_nav_11_Template, 2, 1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AssessmentComponent_nav_12_Template, 2, 1, "nav", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeCheck.isSzenarioMCFrage(ctx.szenario));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeCheck.isSzenarioZuordnung(ctx.szenario));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeCheck.isSzenarioMCFrage(ctx.szenario) && ctx.szenario.bild_url != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeCheck.isSzenarioMCFrage(ctx.szenario));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeCheck.isSzenarioZuordnung(ctx.szenario));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exitBtnText != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmBtnText != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.szenarioFortschritt !== undefined && ctx.szenarioResults === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.szenarioResults !== undefined && ctx.szenarioFortschritt === undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]], styles: [".fade-in[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], img[_ngcontent-%COMP%], .mcfrage[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .zuordnung[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  animation: fade-in 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.slide-in-left[_ngcontent-%COMP%] {\n  animation: slide-in-left 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) both;\n}\n\n.lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #fff;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.036s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.072s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.108s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.144s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.18s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.216s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.252s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.288s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3%;\n  overflow-y: auto;\n  min-width: 25rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-left: 5%;\n  margin-right: 5%;\n  max-width: 60rem;\n}\nimg[_ngcontent-%COMP%] {\n  margin: 1rem;\n  max-width: 100%;\n}\n.img-container[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  display: flex;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  flex-grow: 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mcfrage[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: 1fr;\n  column-gap: 1rem;\n  row-gap: 1rem;\n  justify-items: center;\n}\n.mcfrage[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border-radius: 8px;\n  text-align: center;\n  background: #EBEBEB;\n}\n.mcfrage[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  filter: brightness(90%);\n  cursor: pointer;\n}\n.mcfrage[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: #CCDBFF;\n}\n.mcfrage[_ngcontent-%COMP%]   .correct[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  outline: 2px solid #419E14;\n}\n.mcfrage[_ngcontent-%COMP%]   .incorrect[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  outline: 2px solid #F95757;\n}\n.zuordnung[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr auto;\n  align-items: center;\n  overflow: auto;\n  margin: 0.5rem;\n}\n.zuordnung[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-size: 1rem;\n  background: #5788F9;\n  color: white;\n  border: none !important;\n  border-radius: 8px;\n  font-family: \"Roboto\", sans-serif;\n}\n.zuordnung[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n.zuordnung[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: #234DB0;\n  color: white;\n}\n.zuordnung[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  max-width: 40rem;\n  background: #EBEBEB;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.confirm-btn[_ngcontent-%COMP%] {\n  margin: 1rem 2rem;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #EBEBEB;\n  margin: 0.1rem;\n  padding: 0.2rem 0.8rem;\n}\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 8px 8px 0;\n}\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 0 0 8px;\n}\nnav[_ngcontent-%COMP%]   .answered[_ngcontent-%COMP%] {\n  background: #CCDBFF;\n}\nnav[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background: #234DB0 !important;\n  color: white !important;\n}\n@media only screen and (max-width: 850px) {\n  [_nghost-%COMP%] {\n    padding: 1rem;\n    min-width: 0;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 500;\n  }\n\n  .confirm-btn[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    margin-bottom: 1rem;\n  }\n\n  .mcfrage[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-rows: 1fr;\n    column-gap: 1rem;\n    row-gap: 1rem;\n    justify-items: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .zuordnung[_ngcontent-%COMP%] {\n    display: grid;\n    margin: 0;\n    padding: 0;\n  }\n  .zuordnung[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    margin-left: 0.5rem;\n    padding: 0.5rem;\n    font-size: 0.9rem;\n  }\n  .zuordnung[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0.5 0;\n    padding: 0.5rem;\n    border-radius: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFuaW1hdGlvbnMuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXNzbWVudC5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxREFBQTtBQUlBO0VBRUUsZ0VBQUE7QUNBRjtBREVBOzs7OztxREFBQTtBQU9BOzs7O0lBQUE7QUFZQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjtBREFBO0VBRUUscUVBQUE7QUNFRjtBREFBOztJQUFBO0FBS0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBREVFO0VBQ0UsZ0VBQUE7RUFDQSwyQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNESjtBRElFO0VBQ0Usd0JBQUE7QUNGSjtBREtFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNISjtBRE1FO0VBQ0Usd0JBQUE7QUNKSjtBRE9FO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNMSjtBRFFFO0VBQ0Usd0JBQUE7QUNOSjtBRFNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNQSjtBRFVFO0VBQ0Usd0JBQUE7QUNSSjtBRFdFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNUSjtBRFlFO0VBQ0UsdUJBQUE7QUNWSjtBRGFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNYSjtBRGNFO0VBQ0Usd0JBQUE7QUNaSjtBRGVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNiSjtBRGdCRTtFQUNFLHdCQUFBO0FDZEo7QURpQkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2ZKO0FEa0JFO0VBQ0Usd0JBQUE7QUNoQko7QURtQkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2pCSjtBRG1CQTtFQUNFO0lBQ0UsdUJBQUE7RUNoQkY7RURrQkE7SUFDRSx5QkFBQTtFQ2hCRjtBQUNGO0FBNUhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUE4SEo7QUF6SEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBNEhKO0FBMUhBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUE2SEo7QUEzSEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBOEhKO0FBNUhBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBK0hKO0FBN0hBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQWdJSjtBQTlISTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQzFDSztBRDBLYjtBQTlISTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQWdJUjtBQTlISTtFQUNJLG1CQ3ZEUTtBRHVMaEI7QUE5SEk7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FBZ0lSO0FBOUhJO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQWdJUjtBQTlIQTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFpSUo7QUEvSEk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJDOUVFO0VEK0VGLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNDbkZLO0FEb05iO0FBL0hJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBaUlSO0FBL0hJO0VBQ0ksbUJDeEZPO0VEeUZQLFlBQUE7QUFpSVI7QUEvSEk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkN2Rks7RUR3RkwsYUFBQTtFQUNBLGtCQUFBO0FBaUlSO0FBL0hBO0VBQ0ksaUJBQUE7QUFrSUo7QUFoSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFtSUo7QUFqSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBb0lKO0FBbElJO0VBQ0ksbUJDeEdLO0VEeUdMLGNBQUE7RUFDQSxzQkFBQTtBQW9JUjtBQWxJSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQW9JUjtBQWxJSTtFQUNJLDBCQUFBO0FBb0lSO0FBbElJO0VBQ0ksMEJBQUE7QUFvSVI7QUFsSUk7RUFDSSxtQkM3SFE7QURpUWhCO0FBbElJO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtBQW9JUjtBQWxJQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7RUFxSU47O0VBbklFO0lBQ0ksU0FBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFzSU47O0VBcElFO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VBdUlOOztFQXJJRTtJQUNJLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtFQXdJTjtBQUNGO0FBdklBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUF5SU47RUF2SU07SUFDSSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQXlJVjtFQXRJTTtJQUNJLGFBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUF3SVY7QUFDRiIsImZpbGUiOiJhc3Nlc3NtZW50LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQU5JTUFUSU9OUyBieSBBbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmFkZS1pblxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAwLjRzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aFxuICBhbmltYXRpb246IGZhZGUtaW4gMC40cyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGhcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtNS0yMiAxNDo5OjUyXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW5cbiAgMCUgXG4gICAgb3BhY2l0eTogMFxuXG4gIDEwMCUgXG4gICAgb3BhY2l0eTogMVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW5cbiAgMCVcbiAgICBvcGFjaXR5OiAwXG5cbiAgMTAwJVxuICAgIG9wYWNpdHk6IDFcblxuLnNsaWRlLWluLWxlZnRcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWxlZnQgMC40cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGJvdGhcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBib3RoXG5cbi8qXG4gU1BJTk5FUiBBTklNQVRJT04gRlJPTS5cbiBodHRwczovL2xvYWRpbmcuaW8vY3NzL1xuICovXG5cbi5sZHMtcm9sbGVyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgd2lkdGg6IDgwcHhcbiAgaGVpZ2h0OiA4MHB4XG5cblxuICAmIGRpdlxuICAgIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGVcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHhcblxuXG4gICYgZGl2OmFmdGVyXG4gICAgY29udGVudDogXCIgXCJcbiAgICBkaXNwbGF5OiBibG9ja1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHdpZHRoOiA3cHhcbiAgICBoZWlnaHQ6IDdweFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxuICAgIGJhY2tncm91bmQ6ICNmZmZcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHhcblxuXG4gICYgZGl2Om50aC1jaGlsZCgxKVxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2c1xuXG5cbiAgJiBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyXG4gICAgdG9wOiA2M3B4XG4gICAgbGVmdDogNjNweFxuXG5cbiAgJiBkaXY6bnRoLWNoaWxkKDIpXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzXG5cblxuICAmIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXJcbiAgICB0b3A6IDY4cHhcbiAgICBsZWZ0OiA1NnB4XG5cblxuICAmIGRpdjpudGgtY2hpbGQoMylcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHNcblxuXG4gICYgZGl2Om50aC1jaGlsZCgzKTphZnRlclxuICAgIHRvcDogNzFweFxuICAgIGxlZnQ6IDQ4cHhcblxuXG4gICYgZGl2Om50aC1jaGlsZCg0KVxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0c1xuXG5cbiAgJiBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyXG4gICAgdG9wOiA3MnB4XG4gICAgbGVmdDogNDBweFxuXG5cbiAgJiBkaXY6bnRoLWNoaWxkKDUpXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHNcblxuXG4gICYgZGl2Om50aC1jaGlsZCg1KTphZnRlclxuICAgIHRvcDogNzFweFxuICAgIGxlZnQ6IDMycHhcblxuXG4gICYgZGl2Om50aC1jaGlsZCg2KVxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2c1xuXG5cbiAgJiBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyXG4gICAgdG9wOiA2OHB4XG4gICAgbGVmdDogMjRweFxuXG5cbiAgJiBkaXY6bnRoLWNoaWxkKDcpXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzXG5cblxuICAmIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXJcbiAgICB0b3A6IDYzcHhcbiAgICBsZWZ0OiAxN3B4XG5cblxuICAmIGRpdjpudGgtY2hpbGQoOClcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHNcblxuXG4gICYgZGl2Om50aC1jaGlsZCg4KTphZnRlclxuICAgIHRvcDogNTZweFxuICAgIGxlZnQ6IDEycHhcblxuQGtleWZyYW1lcyBsZHMtcm9sbGVyXG4gIDAlXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcblxuICAxMDAlXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogKiBBTklNQVRJT05TIGJ5IEFuaW1pc3RhXG4gKiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mYWRlLWluLCBoMiwgaW1nLCAubWNmcmFnZSBkaXYsIC56dW9yZG51bmcgc2VsZWN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC40cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuICBhbmltYXRpb246IGZhZGUtaW4gMC40cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTUtMjIgMTQ6OTo1MlxuICogKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXG4gKiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKipcbiAqICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogKiBhbmltYXRpb24gZmFkZS1pblxuICogKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uc2xpZGUtaW4tbGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMC40cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGJvdGg7XG59XG5cbi8qIFNQSU5ORVIgQU5JTUFUSU9OIEZST00uXG4gKiBodHRwczovL2xvYWRpbmcuaW8vY3NzL1xuICogKi9cbi5sZHMtcm9sbGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDYzcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogNTZweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogMTdweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4td2lkdGg6IDI1cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1heC13aWR0aDogNjByZW07XG59XG5cbmltZyB7XG4gIG1hcmdpbjogMXJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleC1ncm93OiA1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1jZnJhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIHJvdy1nYXA6IDFyZW07XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5tY2ZyYWdlIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0VCRUJFQjtcbn1cbi5tY2ZyYWdlIGRpdjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWNmcmFnZSAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjQ0NEQkZGO1xufVxuLm1jZnJhZ2UgLmNvcnJlY3Qge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNDE5RTE0O1xufVxuLm1jZnJhZ2UgLmluY29ycmVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3V0bGluZTogMnB4IHNvbGlkICNGOTU3NTc7XG59XG5cbi56dW9yZG51bmcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwLjVyZW07XG59XG4uenVvcmRudW5nIHNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogIzU3ODhGOTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi56dW9yZG51bmcgb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi56dW9yZG51bmcgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzIzNERCMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnp1b3JkbnVuZyBwIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIG1heC13aWR0aDogNDByZW07XG4gIGJhY2tncm91bmQ6ICNFQkVCRUI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNvbmZpcm0tYnRuIHtcbiAgbWFyZ2luOiAxcmVtIDJyZW07XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5uYXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0VCRUJFQjtcbiAgbWFyZ2luOiAwLjFyZW07XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XG59XG5uYXYgYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiBidXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xufVxubmF2IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xufVxubmF2IC5hbnN3ZXJlZCB7XG4gIGJhY2tncm91bmQ6ICNDQ0RCRkY7XG59XG5uYXYgLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjM0REIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5jb25maXJtLWJ0biB7XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5tY2ZyYWdlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgIGNvbHVtbi1nYXA6IDFyZW07XG4gICAgcm93LWdhcDogMXJlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnp1b3JkbnVuZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuenVvcmRudW5nIHNlbGVjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnp1b3JkbnVuZyBwIHtcbiAgICBtYXJnaW46IDAuNSAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn0iLCIkZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWZcbiRwcmltYXJ5OiAjNTc4OEY5XG4kcHJpbWFyeS1kYXJrOiAjMjM0REIwXG4kcHJpbWFyeS1saWdodDogI0NDREJGRlxuJHNlY29uZGFyeTogbGluZWFyLWdyYWRpZW50KDEyMi41OGRlZywgIzc2QjY1QSAtNTEuNTUlLCAjNDE5RTE0IDEwMi4zNSUpXG4kc2Vjb25kYXJ5LWxpZ2h0OiAjRTBFRkRBXG4kZ3JlZW46ICM0MTlFMTRcbiRyZWQ6ICNGOTU3NTdcbiRncmV5OiAjODg4ODg4XG4kZ3JleS1saWdodDogI0VCRUJFQlxuJGdyZXktZGFyazogIzQ1NDU0NVxuJGJsYWNrOiAjMjEyNTI5XG4kd2hpdGUtYmc6IHJnYmEoMjU1LDI1NSwyNTUsLjk1KVxuIl19 */"] });


/***/ }),

/***/ "kl1M":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.benutzername = "";
        this.vorname = "";
        this.nachname = "";
        this.rolle = "";
        this.loggedIn = false;
    }
    login(benutzername, vorname, nachname, rolle) {
        this.benutzername = benutzername;
        this.vorname = vorname;
        this.nachname = nachname;
        this.rolle = rolle;
        this.loggedIn = true;
    }
    logout() {
        this.benutzername = "";
        this.vorname = "";
        this.nachname = "";
        this.rolle = "";
        this.loggedIn = false;
    }
    getBenutzername() {
        return this.benutzername;
    }
    getVorname() {
        return this.vorname;
    }
    getNachname() {
        return this.nachname;
    }
    getRolle() {
        return this.rolle;
    }
    isLoggedIn() {
        return this.loggedIn;
    }
}


/***/ }),

/***/ "rh23":
/*!**********************************************************!*\
  !*** ./src/app/pages/monitoring/monitoring.component.ts ***!
  \**********************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-dao.service */ "9nnm");
/* harmony import */ var _services_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/assessment-api-client.service */ "97vB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pruefung-result/pruefung-result.component */ "XZfd");






const _c0 = function (a0) { return { "active": a0 }; };
function MonitoringComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonitoringComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.loadPruefungen(user_r3.benutzername); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Letzte Pr\u00FCfung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.activeUser == user_r3.benutzername));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r3.vorname, " ", user_r3.nachname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.letztePruefung);
} }
function MonitoringComponent_div_11_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pruefung_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Ergebnis: ", ctx_r7.getPercent(pruefung_r6.korrekt, pruefung_r6.inkorrekt), "% (", pruefung_r6.korrekt, "/", pruefung_r6.korrekt + pruefung_r6.inkorrekt, ") ");
} }
function MonitoringComponent_div_11_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nicht Abgeschlossen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "disabled": a0, "active": a1 }; };
function MonitoringComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonitoringComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const pruefung_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.loadPruefungsResult(pruefung_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonitoringComponent_div_11_span_7_Template, 2, 3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MonitoringComponent_div_11_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pruefung_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, !pruefung_r6.abgeschlossen, ctx_r1.activePruefung !== undefined && ctx_r1.activePruefung.assessmentID === pruefung_r6.assessmentID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.timestampToDate(pruefung_r6.zeitpunkt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.timestampToTime(pruefung_r6.zeitpunkt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pruefung_r6.abgeschlossen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !pruefung_r6.abgeschlossen);
} }
function MonitoringComponent_app_pruefung_result_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pruefung-result", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pruefung", ctx_r2.activePruefung);
} }
class MonitoringComponent {
    constructor(router, appDao, apiClient) {
        this.router = router;
        this.appDao = appDao;
        this.apiClient = apiClient;
        this.allUsers = [];
        this.activeUser = "";
        this.pruefungsStatistics = [];
    }
    ngOnInit() {
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
                    .subscribe(pruefung => this.allUsers[i].letztePruefung = pruefung[0] ? this.timestampToDate(pruefung[0].zeitpunkt) : '');
            }
        });
    }
    loadPruefungen(benutzername) {
        this.activePruefung = undefined;
        this.activeUser = benutzername;
        console.log("requesting pruefungen");
        this.apiClient.getPruefungsAssessmentStatistics(benutzername, 10)
            .subscribe(statistics => {
            this.pruefungsStatistics = statistics;
            console.log("pruefungs statistik loaded");
        });
    }
    loadPruefungsResult(pruefung) {
        this.activePruefung = undefined;
        if (pruefung.abgeschlossen) {
            console.log("requesting pruefungsresult of " + pruefung.assessmentID);
            this.apiClient.getPruefungsAssessmentResults(this.activeUser, pruefung.assessmentID)
                .subscribe(result => {
                this.activePruefung = result;
            });
        }
    }
    timestampToTime(timestamp) {
        let time = timestamp.replace(/.*T/g, ' ').split(':');
        return time[0] + ":" + time[1];
    }
    timestampToDate(timestamp) {
        let date = timestamp.replace(/T.*/, ' ').split('-');
        return date[2] + "." + date[1] + ". " + date[0];
    }
    getPercent(korrekt, inkorrekt) {
        if (korrekt == 0) {
            return 0;
        }
        return Math.ceil((korrekt / (korrekt + inkorrekt)) * 100);
    }
}
MonitoringComponent.ɵfac = function MonitoringComponent_Factory(t) { return new (t || MonitoringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_2__["AppDaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_assessment_api_client_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentApiClientService"])); };
MonitoringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonitoringComponent, selectors: [["app-monitoring"]], decls: 14, vars: 3, consts: [[1, "section-darker"], [1, "title"], [1, "scroll-container"], ["class", "item active", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "section-dark"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "section-lighter"], [3, "pruefung", 4, "ngIf"], [1, "item", "active", 3, "ngClass", "click"], [1, "item-title"], [1, "details"], [1, "item", 3, "ngClass", "click"], [4, "ngIf"], [3, "pruefung"]], template: function MonitoringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Personal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonitoringComponent_div_5_Template, 9, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pr\u00FCfungen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MonitoringComponent_div_11_Template, 9, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MonitoringComponent_app_pruefung_result_13_Template, 1, 1, "app-pruefung-result", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pruefungsStatistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activePruefung !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _components_pruefung_result_pruefung_result_component__WEBPACK_IMPORTED_MODULE_5__["PruefungResultComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.section-darker[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.78);\n  width: 25%;\n  height: 100%;\n  padding: 2rem 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.section-dark[_ngcontent-%COMP%], .section-darker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.section-dark[_ngcontent-%COMP%] {\n  border-left: 1px solid #c8c8c8;\n  width: 25%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.85);\n  padding-top: 2rem;\n}\n\n.section-lighter[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  padding: 2rem 1rem;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 80%;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nnav[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 1vw;\n  border-top: 1px solid #888888;\n  font-weight: 300;\n}\n\nnav[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: white;\n}\n\nnav[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  background: none;\n}\n\nnav[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\nnav[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb25pdG9yaW5nLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREE7RUFDSSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBTVI7O0FBSEk7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7QUFLUjs7QUFISTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFLUjs7QUFISTtFQUNJLGlCQUFBO0FBS1I7O0FBSEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFLUjs7QUFISTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQUtSOztBQUhRO0VBQ0ksb0JBQUE7QUFLWiIsImZpbGUiOiJtb25pdG9yaW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi8uLi92YXJpYWJsZXNcbjpob3N0XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG5cbi5zZWN0aW9uLWRhcmtlclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjc4KVxuICAgIHdpZHRoOiAyNSVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBwYWRkaW5nOiAycmVtIDBcblxuaDJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuLnNlY3Rpb24tZGFyaywgLnNlY3Rpb24tZGFya2VyXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cblxuLnNlY3Rpb24tZGFya1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDApXG4gICAgd2lkdGg6IDI1JVxuICAgIGhlaWdodDogMTAwJVxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjg1KVxuICAgIHBhZGRpbmctdG9wOiAycmVtXG5cblxuLnNlY3Rpb24tbGlnaHRlclxuICAgIHdpZHRoOjUwJVxuICAgIGhlaWdodDogMTAwJVxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbVxuXG4uc2Nyb2xsLWNvbnRhaW5lclxuICAgIG92ZXJmbG93LXk6IGF1dG9cbiAgICBoZWlnaHQ6IDgwJVxuXG5uYXZcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG5cbiAgICAuaXRlbVxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgcGFkZGluZzogMXJlbSAxdndcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmV5XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDBcblxuXG4gICAgLml0ZW06aG92ZXJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LC42KVxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgIC5pdGVtLXRpdGxlXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcFxuXG4gICAgLmFjdGl2ZVxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxuXG4gICAgLmRpc2FibGVkOmhvdmVyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lXG5cbiAgICAuZGV0YWlsc1xuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxuICAgICAgICBcbiAgICAgICAgc3BhbiBcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW1cbiJdfQ== */"] });


/***/ }),

/***/ "t4yD":
/*!************************************************!*\
  !*** ./src/app/services/type-check.service.ts ***!
  \************************************************/
/*! exports provided: TypeCheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCheckService", function() { return TypeCheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TypeCheckService {
    constructor() { }
    isSzenarioMCFrage(szenario) {
        if (szenario === undefined) {
            return false;
        }
        return "frage" in szenario;
    }
    isSzenarioMCFrageBeantwortet(szenario) {
        if (szenario === undefined) {
            return false;
        }
        return "ausgewaehlt" in szenario;
    }
    isSzenarioZuordnung(szenario) {
        if (szenario === undefined) {
            return false;
        }
        return "anweisung" in szenario;
    }
    isSzenarioZuordnungBeantwortet(szenario) {
        if (szenario === undefined) {
            return false;
        }
        return "zugeordnet" in szenario;
    }
}
TypeCheckService.ɵfac = function TypeCheckService_Factory(t) { return new (t || TypeCheckService)(); };
TypeCheckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypeCheckService, factory: TypeCheckService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/default-page/default-page.component */ "FELF");
/* harmony import */ var _pages_fortschritt_fortschritt_page_fortschritt_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/fortschritt/fortschritt-page/fortschritt-page.component */ "Vwks");
/* harmony import */ var _pages_inhalte_inhalte_page_inhalte_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inhalte/inhalte-page/inhalte-page.component */ "Zy+9");
/* harmony import */ var _pages_pruefung_pruefung_page_pruefung_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pruefung/pruefung-page/pruefung-page.component */ "a3WT");
/* harmony import */ var _pages_training_training_page_training_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/training/training-page/training-page.component */ "z1c4");
/* harmony import */ var _pages_inhalte_kapitel1_kapitel1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/inhalte/kapitel1/kapitel1.component */ "TQ7C");
/* harmony import */ var _pages_inhalte_kapitel2_kapitel2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/inhalte/kapitel2/kapitel2.component */ "Mi8t");
/* harmony import */ var _pages_inhalte_kapitel3_kapitel3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/inhalte/kapitel3/kapitel3.component */ "f5/e");
/* harmony import */ var _pages_inhalte_kapitel4_kapitel4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/inhalte/kapitel4/kapitel4.component */ "ItLh");
/* harmony import */ var _pages_inhalte_kapitel5_kapitel5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/inhalte/kapitel5/kapitel5.component */ "GZ69");
/* harmony import */ var _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/monitoring/monitoring.component */ "rh23");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    {
        path: 'inhalte', component: _pages_inhalte_inhalte_page_inhalte_page_component__WEBPACK_IMPORTED_MODULE_3__["InhaltePageComponent"], children: [
            {
                path: 'kapitel/1', component: _pages_inhalte_kapitel1_kapitel1_component__WEBPACK_IMPORTED_MODULE_6__["Kapitel1Component"]
            }, {
                path: 'kapitel/2', component: _pages_inhalte_kapitel2_kapitel2_component__WEBPACK_IMPORTED_MODULE_7__["Kapitel2Component"]
            }, {
                path: 'kapitel/3', component: _pages_inhalte_kapitel3_kapitel3_component__WEBPACK_IMPORTED_MODULE_8__["Kapitel3Component"]
            }, {
                path: 'kapitel/4', component: _pages_inhalte_kapitel4_kapitel4_component__WEBPACK_IMPORTED_MODULE_9__["Kapitel4Component"]
            }, {
                path: 'kapitel/5', component: _pages_inhalte_kapitel5_kapitel5_component__WEBPACK_IMPORTED_MODULE_10__["Kapitel5Component"]
            }, {
                path: '', redirectTo: 'kapitel/1', pathMatch: 'full'
            }
        ]
    },
    { path: 'training', component: _pages_training_training_page_training_page_component__WEBPACK_IMPORTED_MODULE_5__["TrainingPageComponent"] },
    { path: 'pruefung', component: _pages_pruefung_pruefung_page_pruefung_page_component__WEBPACK_IMPORTED_MODULE_4__["PruefungPageComponent"] },
    { path: 'fortschritt', component: _pages_fortschritt_fortschritt_page_fortschritt_page_component__WEBPACK_IMPORTED_MODULE_2__["FortschrittPageComponent"] },
    { path: 'monitoring', component: _pages_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_11__["MonitoringComponent"] },
    { path: '', component: _pages_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__["DefaultPageComponent"], pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "z1c4":
/*!*************************************************************************!*\
  !*** ./src/app/pages/training/training-page/training-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: TrainingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageComponent", function() { return TrainingPageComponent; });
/* harmony import */ var _TrainingsPhase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TrainingsPhase */ "Gwgn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app-dao.service */ "9nnm");
/* harmony import */ var _services_training_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/training-controller.service */ "CHVP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_training_result_training_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/training-result/training-result.component */ "72/k");
/* harmony import */ var _inhalte_kapitel1_kapitel1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../inhalte/kapitel1/kapitel1.component */ "TQ7C");
/* harmony import */ var _inhalte_kapitel2_kapitel2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../inhalte/kapitel2/kapitel2.component */ "Mi8t");
/* harmony import */ var _inhalte_kapitel3_kapitel3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../inhalte/kapitel3/kapitel3.component */ "f5/e");
/* harmony import */ var _inhalte_kapitel4_kapitel4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../inhalte/kapitel4/kapitel4.component */ "ItLh");
/* harmony import */ var _inhalte_kapitel5_kapitel5_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../inhalte/kapitel5/kapitel5.component */ "GZ69");
/* harmony import */ var _components_assessment_assessment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/assessment/assessment.component */ "fEjf");














function TrainingPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wie l\u00E4uft ein Training Ab?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Trainings bestehen aus vier Phasen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Vortrainings-Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lernen der Inhalte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nachtrainings-Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Empfehlung");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Assessments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sie m\u00FCssen eine Reihe von zuf\u00E4llig ausgew\u00E4hlten Aufgaben l\u00F6sen. Aufgaben sind Multiple-Choice oder Zuordnungs-Aufgaben. Nachdem Sie alle Aufgaben eines Assessments beantwortet haben, werden diese aufgel\u00F6st und Sie k\u00F6nnen sich Ihre und die korrekten Antworten ansehen. Danach geht es zur n\u00E4chsten Phase. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " In Multiple Choice Aufgaben wird Ihnen eine Frage mit zugeh\u00F6rigen Antworten angezeigt. Sie m\u00FCssen die korrekten Antworten ausw\u00E4hlen, wobei eine, mehrere oder alle Antworten richtig sein k\u00F6nnen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " In Zuordnungs-Aufgaben werden Ihnen mehrere Texte angezeigt. Neben jedem Text befindet sich ein Men\u00FC, in dem Sie einen Begriff ausw\u00E4hlen k\u00F6nnen. Sie m\u00FCssen den angezeigten Texten ihre zugeh\u00F6rigen Begriffe zuordnen. Ein Begriff kann auch mehrmals verwendet und daher mehreren Texten zugeordnet werden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Lernen der Inhalte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Beim lernen der Inhalte werden Ihnen IT-Sicherheitsrelevante Informationen, die auch unter \u201CInhalte\u201D verf\u00FCgbar sind, angezeigt. Sie k\u00F6nnen sich diese Inhalte ansehen und \u00DCbungsaufgaben machen. \u00DCbungsaufgaben sind Aufgaben wie in den Assessments, die aber nach beantwortung sofort korrekt aufgel\u00F6st werden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TrainingPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Starten Sie ein Training:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Kapitel ausw\u00E4hlen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "1. Computer und Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "2. Passwortsicherheit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "3. Sicher im Internet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "4. E-Mails und Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "5. Vieren und Malware");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrainingPageComponent_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.controller.startTraining(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Training Starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function TrainingPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Trainingsphasen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Vortrainings-Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nachtrainings-Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Empfehlung");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.controller.phase == ctx_r2.TrainingsPhase.Vortraining || ctx_r2.controller.phase == ctx_r2.TrainingsPhase.VortrainingFeedback));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r2.controller.phase == ctx_r2.TrainingsPhase.Inhalte || ctx_r2.controller.phase == ctx_r2.TrainingsPhase.Ueben));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r2.controller.phase == ctx_r2.TrainingsPhase.Nachtraining || ctx_r2.controller.phase == ctx_r2.TrainingsPhase.NachtrainingFeedback));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r2.controller.phase == ctx_r2.TrainingsPhase.Empfehlung));
} }
function TrainingPageComponent_div_3_app_training_result_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-training-result", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("szenarioNavClicked", function TrainingPageComponent_div_3_app_training_result_1_Template_app_training_result_szenarioNavClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.controller.empfehlungSzenarioNavClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("training", ctx_r13.controller.trainingResult)("btnDisabled", false);
} }
function TrainingPageComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrainingPageComponent_div_3_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.controller.beenden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fertig");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TrainingPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrainingPageComponent_div_3_app_training_result_1_Template, 1, 2, "app-training-result", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TrainingPageComponent_div_3_div_2_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.controller.trainingResult !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.controller.trainingResult !== undefined);
} }
function TrainingPageComponent_app_kapitel1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kapitel1");
} }
function TrainingPageComponent_app_kapitel2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kapitel2");
} }
function TrainingPageComponent_app_kapitel3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kapitel3");
} }
function TrainingPageComponent_app_kapitel4_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kapitel4");
} }
function TrainingPageComponent_app_kapitel5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kapitel5");
} }
function TrainingPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-assessment", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("confirmBtn", function TrainingPageComponent_div_16_Template_app_assessment_confirmBtn_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.controller.confirmBtnClicked($event); })("exitBtn", function TrainingPageComponent_div_16_Template_app_assessment_exitBtn_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.controller.exitBtnClicked($event); })("szenarioNav", function TrainingPageComponent_div_16_Template_app_assessment_szenarioNav_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.controller.szenarioNavClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r9.controller.phase)("confirmBtnText", ctx_r9.controller.assessmentConfirmBtnText)("exitBtnText", ctx_r9.controller.assessmentExitBtnText)("szenario", ctx_r9.controller.currentSzenario)("mcAntwortSelected", ctx_r9.controller.mcAntwortSelected)("zuordnungsAuswahl", ctx_r9.controller.zuordnungsAuswahl)("currentSzenarioIndex", ctx_r9.controller.training.aktuellesSzenario)("szenarioFortschritt", ctx_r9.controller.szenarioFortschritt)("szenarioResults", ctx_r9.controller.szenarioResults)("feedBackMode", ctx_r9.controller.feedBackMode);
} }
const _c1 = function (a0) { return { "hidden": a0 }; };
class TrainingPageComponent {
    constructor(router, appDao, controller) {
        this.router = router;
        this.appDao = appDao;
        this.controller = controller;
        this.TrainingsPhase = _TrainingsPhase__WEBPACK_IMPORTED_MODULE_0__["TrainingsPhase"];
    }
    ngOnInit() {
        if (!this.appDao.user.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }
}
TrainingPageComponent.ɵfac = function TrainingPageComponent_Factory(t) { return new (t || TrainingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_dao_service__WEBPACK_IMPORTED_MODULE_3__["AppDaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_training_controller_service__WEBPACK_IMPORTED_MODULE_4__["TrainingControllerService"])); };
TrainingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrainingPageComponent, selectors: [["app-training-page"]], decls: 17, vars: 13, consts: [["class", "section-darker introduction-left", 4, "ngIf"], ["class", "section-lighter introduction-right", 4, "ngIf"], ["class", "section-darker phase-guide", 4, "ngIf"], ["class", "section-lighter content-container", 4, "ngIf"], [1, "section-lighter", "content-container", "inhalte-box", 3, "ngClass"], [1, "content-box"], [4, "ngIf"], [1, "content-nav"], [1, "primary-dark-btn", 3, "click"], [1, "primary-btn", 3, "click"], [1, "section-darker", "introduction-left"], [1, "title"], [1, "info"], [1, "section-lighter", "introduction-right"], [1, "kapitel"], ["for", "kapitel"], ["name", "kapitel", "id", "kapitel"], ["kapitelnummer", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "secondary-btn", 3, "click"], [1, "section-darker", "phase-guide"], [1, "title-sm"], [1, "phasen-box"], [1, "phasen-item", 3, "ngClass"], [1, "section-lighter", "content-container"], ["class", "content-box", 3, "training", "btnDisabled", "szenarioNavClicked", 4, "ngIf"], ["class", "content-nav", 4, "ngIf"], [1, "content-box", 3, "training", "btnDisabled", "szenarioNavClicked"], [3, "title", "confirmBtnText", "exitBtnText", "szenario", "mcAntwortSelected", "zuordnungsAuswahl", "currentSzenarioIndex", "szenarioFortschritt", "szenarioResults", "feedBackMode", "confirmBtn", "exitBtn", "szenarioNav"]], template: function TrainingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrainingPageComponent_div_0_Template, 29, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrainingPageComponent_div_1_Template, 20, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TrainingPageComponent_div_2_Template, 16, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TrainingPageComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TrainingPageComponent_app_kapitel1_6_Template, 1, 0, "app-kapitel1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TrainingPageComponent_app_kapitel2_7_Template, 1, 0, "app-kapitel2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TrainingPageComponent_app_kapitel3_8_Template, 1, 0, "app-kapitel3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TrainingPageComponent_app_kapitel4_9_Template, 1, 0, "app-kapitel4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TrainingPageComponent_app_kapitel5_10_Template, 1, 0, "app-kapitel5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrainingPageComponent_Template_button_click_12_listener() { return ctx.controller.initAssessment(ctx.TrainingsPhase.Nachtraining); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "zur n\u00E4chsten Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrainingPageComponent_Template_button_click_14_listener() { return ctx.controller.initUebung(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Zu den \u00DCbungsaufgaben");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TrainingPageComponent_div_16_Template, 2, 10, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.phase == ctx.TrainingsPhase.Beendet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.phase == ctx.TrainingsPhase.Beendet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.phase != ctx.TrainingsPhase.Beendet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.phase == ctx.TrainingsPhase.Empfehlung && !ctx.controller.showAssessmentScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.controller.phase != ctx.TrainingsPhase.Inhalte));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.kapitelnummer === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.kapitelnummer === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.kapitelnummer === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.kapitelnummer === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.kapitelnummer === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.controller.showAssessmentScreen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _components_training_result_training_result_component__WEBPACK_IMPORTED_MODULE_7__["TrainingResultComponent"], _inhalte_kapitel1_kapitel1_component__WEBPACK_IMPORTED_MODULE_8__["Kapitel1Component"], _inhalte_kapitel2_kapitel2_component__WEBPACK_IMPORTED_MODULE_9__["Kapitel2Component"], _inhalte_kapitel3_kapitel3_component__WEBPACK_IMPORTED_MODULE_10__["Kapitel3Component"], _inhalte_kapitel4_kapitel4_component__WEBPACK_IMPORTED_MODULE_11__["Kapitel4Component"], _inhalte_kapitel5_kapitel5_component__WEBPACK_IMPORTED_MODULE_12__["Kapitel5Component"], _components_assessment_assessment_component__WEBPACK_IMPORTED_MODULE_13__["AssessmentComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  margin-bottom: 4%;\n}\n\n.introduction-left[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-top: 8%;\n  padding-bottom: 2%;\n}\n\nol[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 0;\n  margin-top: 1rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 2rem 0 0.2rem 0;\n  padding: 0;\n}\n\np[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 0;\n}\n\n.info[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding-left: 4%;\n  padding-right: 4%;\n}\n\n.introduction-right[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 8%;\n  padding-bottom: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.introduction-right[_ngcontent-%COMP%]   .kapitel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.introduction-right[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 300;\n  margin-bottom: 1rem;\n}\n\n.introduction-right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 300;\n  background: #CCDBFF;\n  padding: 0.6rem 1.2rem;\n}\n\n.introduction-right[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: white;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n}\n\n.introduction-right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  background: #CCDBFF;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  height: 90%;\n}\n\n.content-nav[_ngcontent-%COMP%] {\n  height: 10%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.inhalte-box[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n.inhalte-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  overflow: auto;\n}\n\n.content-container-splitscreen[_ngcontent-%COMP%] {\n  width: 40% !important;\n}\n\n.phase-guide[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 4% 0;\n}\n\n.phase-guide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.phase-guide[_ngcontent-%COMP%]   .phasen-box[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.phase-guide[_ngcontent-%COMP%]   .phasen-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 8%;\n  margin: 8% 0;\n}\n\n.phase-guide[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.68);\n  color: #234DB0;\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n    overflow: auto;\n  }\n\n  .introduction-left[_ngcontent-%COMP%], .introduction-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n\n  .introduction-right[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .introduction-right[_ngcontent-%COMP%]   .kapitel[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n  }\n  .introduction-right[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .phase-guide[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .content-box[_ngcontent-%COMP%] {\n    height: 100%;\n    padding-bottom: 4rem !important;\n  }\n\n  .content-nav[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 3;\n    bottom: 8%;\n    height: 8%;\n    width: 100%;\n  }\n  .content-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 45%;\n    height: 80%;\n    font-size: 0.95rem;\n    padding: 0.2rem 0.5rem;\n  }\n\n  .inhalte-box[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  .inhalte-box[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJhaW5pbmctcGFnZS5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPUjs7QUFMSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9SOztBQUxJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJDN0RRO0VEOERSLHNCQUFBO0FBT1I7O0FBTEk7RUFDSSxpQkFBQTtFQUNBLGlDQ3JFSztFRHNFTCxnQkFBQTtBQU9SOztBQUxJO0VBQ0ksbUJDdEVRO0FENkVoQjs7QUFMQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0FBV0o7O0FBVEk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFXUjs7QUFUQTtFQUNJLHFCQUFBO0FBWUo7O0FBVkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFhSjs7QUFYSTtFQUNJLHFCQUFBO0FBYVI7O0FBWEk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFhUjs7QUFYSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFhUjs7QUFYSTtFQUNJLHFDQUFBO0VBQ0EsY0N2SE87QURvSWY7O0FBVEE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQVlOOztFQVZFO0lBQ0ksV0FBQTtFQWFOOztFQVhFO0lBQ0ksaUJBQUE7RUFjTjs7RUFaRTtJQUNJLGtCQUFBO0VBZU47RUFiTTtJQUNJLGNBQUE7RUFlVjtFQWJNO0lBQ0ksaUJBQUE7RUFlVjs7RUFiRTtJQUNJLGFBQUE7RUFnQk47O0VBZEU7SUFDSSxXQUFBO0VBaUJOOztFQWZFO0lBQ0ksWUFBQTtJQUNBLCtCQUFBO0VBa0JOOztFQWhCRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQW1CTjtFQWxCTTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQW9CVjs7RUFsQkU7SUFDSSxjQUFBO0VBcUJOO0VBbkJNO0lBQ0ksYUFBQTtFQXFCVjtBQUNGIiwiZmlsZSI6InRyYWluaW5nLXBhZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uLy4uL3ZhcmlhYmxlc1xuOmhvc3RcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICB3aWR0aDogMTAwJVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaFxuXG5oMlxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIG1hcmdpbjogMFxuICAgIG1hcmdpbi1ib3R0b206IDQlXG5cbi5pbnRyb2R1Y3Rpb24tbGVmdFxuICAgIHdpZHRoOiA1MCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG4gICAgcGFkZGluZy10b3A6IDglXG4gICAgcGFkZGluZy1ib3R0b206IDIlXG5cbm9sXG4gICAgZm9udC13ZWlnaHQ6IDMwMFxuICAgIG1hcmdpbjogMFxuICAgIG1hcmdpbi10b3A6IDFyZW1cblxuaDNcbiAgICBmb250LXdlaWdodDogMzAwXG4gICAgbWFyZ2luOiAycmVtIDAgLjJyZW0gMFxuICAgIHBhZGRpbmc6IDBcblxucFxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcbiAgICBtYXJnaW46IDBcblxuLmluZm9cbiAgICBvdmVyZmxvdzogYXV0b1xuICAgIHBhZGRpbmctbGVmdDogNCVcbiAgICBwYWRkaW5nLXJpZ2h0OiA0JVxuXG4uaW50cm9kdWN0aW9uLXJpZ2h0XG4gICAgd2lkdGg6IDUwJVxuICAgIHBhZGRpbmctdG9wOiA4JVxuICAgIHBhZGRpbmctYm90dG9tOiAxMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuICAgIC5rYXBpdGVsXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXG5cbiAgICBsYWJlbFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbVxuICAgICAgICBmb250LXdlaWdodDogMzAwXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW1cblxuICAgIHNlbGVjdFxuICAgICAgICBib3JkZXI6IG5vbmVcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbVxuICAgICAgICBmb250LXdlaWdodDogMzAwXG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0XG4gICAgICAgIHBhZGRpbmc6IC42cmVtIDEuMnJlbVxuXG4gICAgb3B0aW9uXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFja1xuICAgICAgICBmb250LXdlaWdodDogMzAwXG5cbiAgICBzZWxlY3Q6aG92ZXJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHRcblxuLmNvbnRlbnQtY29udGFpbmVyXG4gICAgd2lkdGg6IDgwJVxuICAgIGhlaWdodDogMTAwJVxuXG4uY29udGVudC1ib3hcbiAgICBoZWlnaHQ6IDkwJVxuXG4uY29udGVudC1uYXZcbiAgICBoZWlnaHQ6IDEwJVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuLmluaGFsdGUtYm94XG4gICAgcGFkZGluZy10b3A6IDFyZW1cblxuICAgIC5jb250ZW50LWJveFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW1cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG9cblxuLmNvbnRlbnQtY29udGFpbmVyLXNwbGl0c2NyZWVuXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50XG5cbi5waGFzZS1ndWlkZVxuICAgIHdpZHRoOiAyMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIHBhZGRpbmc6IDQlIDBcblxuICAgIGgyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZFxuXG4gICAgLnBoYXNlbi1ib3hcbiAgICAgICAgZmxleC1ncm93OiAyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuXG4gICAgLnBoYXNlbi1pdGVtXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gOCVcbiAgICAgICAgbWFyZ2luOiA4JSAwXG5cbiAgICAuYWN0aXZlXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY4KVxuICAgICAgICBjb2xvcjogJHByaW1hcnktZGFya1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxuICAgIDpob3N0XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG9cblxuICAgIC5pbnRyb2R1Y3Rpb24tbGVmdCwgLmludHJvZHVjdGlvbi1yaWdodFxuICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgLmluZm9cbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcblxuICAgIC5pbnRyb2R1Y3Rpb24tcmlnaHRcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtXG5cbiAgICAgICAgLmthcGl0ZWxcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwXG5cbiAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXG5cbiAgICAucGhhc2UtZ3VpZGVcbiAgICAgICAgZGlzcGxheTogbm9uZVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyXG4gICAgICAgIHdpZHRoOiAxMDAlXG5cbiAgICAuY29udGVudC1ib3hcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cmVtICFpbXBvcnRhbnRcblxuICAgIC5jb250ZW50LW5hdlxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgei1pbmRleDogM1xuICAgICAgICBib3R0b206IDglXG4gICAgICAgIGhlaWdodDogOCVcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICB3aWR0aDogNDUlXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJVxuICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW1cbiAgICAgICAgICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtIFxuXG4gICAgLmluaGFsdGUtYm94XG4gICAgICAgIHBhZGRpbmctdG9wOiAwXG5cbiAgICAgICAgLmNvbnRlbnQtYm94XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtXG4iLCIkZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWZcbiRwcmltYXJ5OiAjNTc4OEY5XG4kcHJpbWFyeS1kYXJrOiAjMjM0REIwXG4kcHJpbWFyeS1saWdodDogI0NDREJGRlxuJHNlY29uZGFyeTogbGluZWFyLWdyYWRpZW50KDEyMi41OGRlZywgIzc2QjY1QSAtNTEuNTUlLCAjNDE5RTE0IDEwMi4zNSUpXG4kc2Vjb25kYXJ5LWxpZ2h0OiAjRTBFRkRBXG4kZ3JlZW46ICM0MTlFMTRcbiRyZWQ6ICNGOTU3NTdcbiRncmV5OiAjODg4ODg4XG4kZ3JleS1saWdodDogI0VCRUJFQlxuJGdyZXktZGFyazogIzQ1NDU0NVxuJGJsYWNrOiAjMjEyNTI5XG4kd2hpdGUtYmc6IHJnYmEoMjU1LDI1NSwyNTUsLjk1KVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map