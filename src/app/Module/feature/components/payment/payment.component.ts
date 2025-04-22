import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  products = [1, 1, 1]
  selectedAddress: any;
  cart: any;
  cartItems: any;
  constructor(private router: Router,private featureService: FeatureService) { }
  ngOnInit(): void {
    let address: any = localStorage.getItem("address");
    this.selectedAddress = JSON.parse(address);
    this.findUserCartItems();
  }

  navigetToPaymentSuccess(path: any) {
    this.router.navigate([path])
  }

  
  findUserCartItems() {
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    this.featureService.findUserCart(userDatials.id).subscribe((res:any)=>{
      this.cart = res;
      this.cart.finalPrice =this. cart.totalDiscountedPrice + 99;
      this.cartItems = res.cartItems;
    });
  }

}
