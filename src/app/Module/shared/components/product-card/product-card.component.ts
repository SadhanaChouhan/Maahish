import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FeatureService } from 'src/app/Module/feature/service/feature.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input() product:any
  wishlist: number[] = [];
  deliveryEstimate: string = '';

constructor(private router: Router,private featureService:FeatureService){}


ngOnInit(): void {
    this.featureService.getDeliveryEstimate().subscribe(data =>{
      this.deliveryEstimate=data;
    });
}
  goToDetail(){
    this.featureService.setSelectedProduct(this.product);
    localStorage.setItem("productId",this.product.id);
    this.router.navigate(["../product-details"]);
    // window.location.reload();
  }

  addToWishlist(productId: number) {
    const userId = 1; // Get from auth or storage
    this.featureService.addToWishlist(userId, productId).subscribe({
      next: res => alert("Added to wishlist!"),
      error: err => alert(err.error.message || "Already in wishlist")
    });
  }
  
}
