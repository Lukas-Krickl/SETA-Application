/**
 * The application user, of which there exists just one instance, accessible through the app-dao-service
 *  Attributes are set with the login function
 */
export class User {
    private benutzername: string = "";
    private vorname: string = "";
    private nachname: string = "";
    private rolle: string = "";
    private loggedIn: boolean = false;

    constructor() { }

    /**
     * Logs the user in and sets all user attributes
     */
    public login(benutzername: string, vorname: string, nachname: string, rolle: string) {
        this.benutzername = benutzername;
        this.vorname = vorname;
        this.nachname = nachname;
        this.rolle = rolle;
        this.loggedIn = true;
    }

    /**
     * resets all user information and marks the user to logged out 
     */
    public logout() {
        this.benutzername = "";
        this.vorname = "";
        this.nachname = "";
        this.rolle = "";
        this.loggedIn = false;
    }


    public getBenutzername(): string {
        return this.benutzername;
    }

    public getVorname(): string {
        return this.vorname;
    }

    public getNachname(): string {
        return this.nachname;
    }


    public getRolle(): string {
        return this.rolle;
    }

    public isLoggedIn() {
        return this.loggedIn;
    }
}