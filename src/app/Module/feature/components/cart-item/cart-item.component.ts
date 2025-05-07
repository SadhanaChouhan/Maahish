import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatureService } from '../../service/feature.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/Module/admin/component/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  @Output() updateCart =  new EventEmitter();

  constructor(private featureService: FeatureService,private router: Router,
     private dialog: MatDialog,
  ){

  }
  updateCartItem(change:number){
    this.item.quantity += change;
    if(this.item.quantity<1){
      this.item.quantity = 1;
    }
    this.addToCart(this.item)
  }

  addToCart(item: any) {
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    if (userDatials == null) {
      this.openConfirmationDialog();
    } else {
      let json = {
        quantity: item.quantity,
        productId: this.item.product.id,
      }
      this.featureService.updateCartItemQuantity(userDatials.id, json).subscribe((response: any) => {
        if(response != null){
          this.item.discountedPrice = response.discountedPrice;
          this.item.price = response.price;
          this.updateCart.emit(response);
        }
      });
    }
  }

    openConfirmationDialog() {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '300px',
        data: { message: 'For continue shopping please login!' }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // this.openSignInDialog();
        }
      });
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
