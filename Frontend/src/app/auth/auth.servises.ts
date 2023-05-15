import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable( {
    providedIn : 'root'
})
export class authservice{

    constructor( private http : HttpClient) {

    }

    signup(email : string , password : string) {
        return this.http.post('http://localhost:3000/auth' ,
        {
            email : email,
            password : password
                    
        })
    }


}
