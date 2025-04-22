import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = BASE_API_URL;
  private editProduct: any = [];
  constructor(private http: HttpClient, private store: Store) { }

  addProduct(productJson: any) {
    return this.http.post(`${this.apiUrl}/product/createProduct`, productJson);
  }

  getProductList() {
    return this.http.get(`${this.apiUrl}/product/getProductList`);
  }

  getProduct(id: any) {
    return this.http.get(`${this.apiUrl}/product/getProduct/` + id);
  }

  deleteProduct(id: any){
    return this.http.get(`${this.apiUrl}/product/deleteProduct/` + id);
  }

  setEditProduct(editProduct: any) {
    this.editProduct = editProduct;
  }

  getEditProduct() {
    return this.editProduct;
  }
}
