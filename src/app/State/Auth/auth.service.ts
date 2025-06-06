import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./auth.action";
import { BASE_API_URL } from "src/app/config/api";

@Injectable({
    providedIn: 'root',
})

export class AuthService{
    // private apiUrl=BASE_API_URL+"/auth";
    private apiUrl=BASE_API_URL;
    constructor(private http:HttpClient, private store: Store){}

    login(loginData:any){
        return this.http.post(`${this.apiUrl}/signin`, loginData);
    }

    register(user:any){
        return this.http.post(`${this.apiUrl}/signup`, user); 
    }

    emailVerify(loginData:any){
        return this.http.post(`${this.apiUrl}/emailVerify`, loginData);
    }

    otpVerify(email:any, otp:any){
        return this.http.post(`${this.apiUrl}/verify-otp?email=${email}&otp=${otp}`, []);
    }
}