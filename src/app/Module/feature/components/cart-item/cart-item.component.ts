import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatureService } from '../../service/feature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() showButton:any;
  @Input() item: any;
  quantity: number = 1;

  @Output() removeItem = new EventEmitter();
  constructor(private featureService: FeatureService,private router: Router){

  }
  updateCartItem(change:number){
    this.quantity += change;
    if(this.quantity<1){
      this.quantity =1;
    }
  }

  removeCartItem(){
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    this.featureService.deleteCartItem(userDatials.id, this.item.id).subscribe(res=>{
      this.removeItem.emit("delete");
    });
  }

  goToDetailsPage(){
    this.featureService.setSelectedProduct(this.item.product);
    localStorage.setItem("productId",this.item.product.id);
    this.router.navigate(["../product-details"]);
  }
}
