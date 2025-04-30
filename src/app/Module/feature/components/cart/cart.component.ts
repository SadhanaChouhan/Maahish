import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: any = [];
  cartItems: any = [];
  constructor(private router: Router, private featureService: FeatureService) { }
  ngOnInit(): void {
    this.findUserCartItems();
  }

  navigateToCheckout() {
    this.router.navigate(['checkout'])
  }

  findUserCartItems() {
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    this.featureService.findUserCart(userDatials.id).subscribe((res:any)=>{
      this.cart = res;
      this.cart.finalPrice =this. cart.totalDiscountedPrice + 99;
      this.cartItems = res.cartItems;
      console.log("findUserCartItems ===== ", res);
    });
  }

  itemRemoved(event:any){
    this.findUserCartItems();
  }
}
