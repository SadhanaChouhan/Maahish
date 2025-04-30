import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from '../../../service/feature.service';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent {

  @Input() product: any;
  wishlist: number[] = [];

  constructor(private router:Router,private featureService: FeatureService){}


  isWishlisted(productId: number): boolean {
    return this.wishlist.includes(productId);
  }
  
  openProductDetils(path:any){
    this.featureService.setSelectedProduct(this.product);
    localStorage.setItem("productId",this.product.id);
    this.router.navigate([path]
    );
  }

  addToWishlist(productId: number) {
    const userId = 1; // Get from auth or storage
    this.featureService.addToWishlist(userId, productId).subscribe({
      next: res => alert("Added to wishlist!"),
      error: err => alert(err.error.message || "Already in wishlist")
    });
  }
}
