import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private apiUrl=BASE_API_URL;
    constructor(private http:HttpClient, private store: Store){}

    addProduct(productJson:any){
        return this.http.post(`${this.apiUrl}/product/createProduct`, productJson);
    }
}
