import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
})
export class authservice {
    user: any;
    loggedIn = false;

    constructor(private http: HttpClient) {
        this.user = {}
    }

    signup(email: string, password: string) {
        return this.http.post('http://localhost:3000/auth',
            {
                email: email,
                password: password

            })
    }

    login(email: string, password: string) {
        return this.http.post('http://localhost:3000/login',
            {
                email: email,
                password: password

            })
    }
    logout(): void {
        // this.loggedIn = false;
        this.user = {}
        // Additional logout logic if needed
    }
    // logout() {
    //     this.loggedIn = false;

    // }
    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    setLoggedIn(value: boolean) {
        this.loggedIn = value;
    }




}
