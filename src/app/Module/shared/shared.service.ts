import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = BASE_API_URL;
  userDatials: any = [];
  sareeList: any = [];
  scarfList: any = [];
  womenKurtaList: any = [];
  constructor(private http: HttpClient, private store: Store) { }
 
  searchProducts(keyword: any) {
    return this.http.get(`${this.apiUrl}/product/search?keyword=${keyword}`);
  }
  
}
