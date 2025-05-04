import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FeatureService } from 'src/app/Module/feature/service/feature.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product:any
  wishlist: number[] = [];

constructor(private router: Router,private featureService:FeatureService){}

  goToDetail(){
    this.featureService.setSelectedProduct(this.product);
    localStorage.setItem("productId",this.product.id);
    this.router.navigate(["../product-details"]);
    window.location.reload();
  }

  addToWishlist(productId: number) {
    const userId = 1; // Get from auth or storage
    this.featureService.addToWishlist(userId, productId).subscribe({
      next: res => alert("Added to wishlist!"),
      error: err => alert(err.error.message || "Already in wishlist")
    });
  }
  
}
