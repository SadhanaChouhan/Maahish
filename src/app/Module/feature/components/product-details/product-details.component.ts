import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { sareesData } from 'src/Data/sarees';
import { FeatureService } from '../../service/feature.service';
import * as _ from 'lodash';
import { womenKurtaData } from 'src/Data/womenKurta';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from 'src/app/Module/auth/signin/signin.component';
import { ConfirmDialogComponent } from 'src/app/Module/admin/component/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input()
  product: any

  reviews = [1];
  reletedProducts: any;




  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.featureService.getProduct(localStorage.getItem("productId")).subscribe(res => {
      this.product = res;
    });
    console.log(this.product, "hhhh");
    this.reletedProducts = sareesData;
    this.getProductList();

    this.reletedProducts = womenKurtaData;
    this.getProductList();
  }

  constructor(private router: Router, 
    private featureService: FeatureService, 
    private dialog: MatDialog,
    private viewportScroller: ViewportScroller,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.featureService.getProduct(localStorage.getItem("productId")).subscribe(res => {
      this.product = res;
    });
    console.log(this.product, "hhhh");
    this.reletedProducts = sareesData;
    this.getProductList();
  }
  handleAddToCart() {
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    if (userDatials == null) {
      this.openConfirmationDialog();
    } else {
      let json = {
        quantity:1,
        productId: this.product.id,
      }
      this.featureService.addToCart(userDatials.id, json).subscribe(response => {
        this.router.navigate(['cart']);
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
        this.openSignInDialog();
      }
    });
  }

  openSignInDialog() {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: "500px",
      disableClose: true,
      autoFocus: true,
    });
    dialogRef.afterClosed.arguments((res: any) => {

    });
  }
  getProductList() {
    this.featureService.getProductList().subscribe(res => {
      if (res) {
        if (this.product.category == "sarees") {
          this.reletedProducts = _.filter(res, (obj: any) =>
            obj.category === "sarees"
          );
        }
        if (this.product.category == "suit-materials") {
          this.reletedProducts = _.filter(res, (obj: any) =>
            obj.category === "suit-materials"
          );
        }

        if (this.product.category == "scarfs") {
          this.reletedProducts = _.filter(res, (obj: any) =>
            obj.category === "scarfs"
          );
        }
      }
    });
  }
}
