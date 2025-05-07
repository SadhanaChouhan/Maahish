import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = BASE_API_URL;
  private wishlistUpdated = new BehaviorSubject<boolean>(false);
  wishlistUpdated$ = this.wishlistUpdated.asObservable();

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

  updateCartItemQuantity(userId:any, product: any){
    return this.http.post(`${this.apiUrl}/api/cart/updateCartItemQuantity/`+ userId, product);
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

    addToWishlist(userId:any, productId: number) {
    return this.http.post(`${this.apiUrl}/api/wishlist/add?userId=${userId}&productId=${productId}`, {});
  }

  getWishlist(userId: number) {
    return this.http.get(`${this.apiUrl}/api/wishlist/${userId}`);
  }

  removeFromWishlist(userId: number, productId: number) {
  
    return this.http.delete(`${this.apiUrl}/api/wishlist/remove?userId=${userId}&productId=${productId}`);
  }

  notifyWishlistChange() {
    this.wishlistUpdated.next(true);
  }

  initiatePayment(json: any){
    return this.http.post(`${this.apiUrl}/api/payment/create-order`, json);
  }

  verifyPaymentSignature(json: any){
    return this.http.post(`${this.apiUrl}/api/payment/verify-signature`, json);
  }

  removeAddress(userId:any, address:any){
    return this.http.get(`${this.apiUrl}/api/address/removeAddress/`+ userId+'/'+address); 
  }

  getDeliveryEstimate(): Observable<string> {
    return this.http.get(`${this.apiUrl}/api/delivery/estimate`, { responseType: 'text' });
  }
}
