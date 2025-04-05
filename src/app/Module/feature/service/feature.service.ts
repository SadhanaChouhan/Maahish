import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
 private apiUrl=BASE_API_URL;
    constructor(private http:HttpClient, private store: Store){}

    getProductList(){
        return this.http.get(`${this.apiUrl}/product/getProductList`);
    }

    selectedProduct: any;
    setSelectedProduct(selectedProduct: any){
      this.selectedProduct = selectedProduct;
    }
    getSelectedProduct(){
      return this.setSelectedProduct;
    }
}
