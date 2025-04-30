import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = BASE_API_URL;
  constructor(private http: HttpClient, private store: Store) { }

  getProductList() {
    return this.http.get(`${this.apiUrl}/product/getProductList`);
  }

  getProduct(id: any) {
    return this.http.get(`${this.apiUrl}/product/getProduct/` + id);
  }

  addToCart(userId:any, product: any){
    return this.http.post(`${this.apiUrl}/api/cart/add/`+ userId, product);
  }

  findUserCart(userId: any){
    return this.http.get(`${this.apiUrl}/api/cart/getCartItem/`+ userId); 
  }

  deleteCartItem(userId: any,id: any){
    return this.http.get(`${this.apiUrl}/api/cart/deleteCartItem/`+ userId+'/'+id); 
  }

  addAddress(addressJson: any){
    return this.http.post(`${this.apiUrl}/api/address/addAddress`, addressJson);
  }

  getAddress(userId: any){
    return this.http.get(`${this.apiUrl}/api/address/getAddress/`+ userId); 
  }
  selectedProduct: any;

  setSelectedProduct(selectedProduct: any) {
    this.selectedProduct = selectedProduct;
  }
  getSelectedProduct() {
    return this.selectedProduct;
  }

    addToWishlist(userId: number, productId: number) {
    return this.http.post(`${this.apiUrl}/api/wishlist/add?userId=${userId}&productId=${productId}`, {});
  }

  getWishlist(userId: number) {
    return this.http.get(`${this.apiUrl}/api/wishlist/${userId}`);
  }

  removeFromWishlist(userId: number, productId: number) {
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('productId', productId.toString());
    return this.http.delete(`${this.apiUrl}/api/wishlist/remove`, {params});
  }

  initiatePayment(json: any){
    return this.http.post(`${this.apiUrl}/api/payment/create-order`, json);
  }

  verifyPaymentSignature(json: any){
    return this.http.post(`${this.apiUrl}/api/payment/verify-signature`, json);
  }
}
