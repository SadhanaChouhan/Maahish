import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from '../../../service/feature.service';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent implements OnInit{

  @Input() product: any;
  @Input() address: any;
  @Input() item: any;
  wishlist: number[] = [];
  deliveryEstimate: string = '';
  userId:any

  constructor(private router:Router,private featureService: FeatureService){}


  ngOnInit(): void {
      this.featureService.getDeliveryEstimate().subscribe(data =>{
        this.deliveryEstimate = data;
      });
  }
  isWishlisted(productId: number): boolean {
    return this.wishlist.includes(productId);
  }
  
  openProductDetils(path:any){
    this.featureService.setSelectedProduct(this.product);
    localStorage.setItem("productId",this.product.id);
    this.router.navigate([path]
    );
  }

  // addToWishlist(productId: number) {
  //   const userId = 1; // Get from auth or storage
  //   this.featureService.addToWishlist(userId, productId).subscribe({
  //     next: res => alert("Added to wishlist!"),
  //     error: err => alert(err.error.message || "Already in wishlist")
  //   });
  // }

  addToWishlist(productId: number) {
    
    const user = localStorage.getItem("userDatials");
  
  if (user) {
    const userDetails = JSON.parse(user);
    const userId = userDetails.id;

    this.featureService.addToWishlist(userId, productId).subscribe({
      next: () => {
        this.wishlist.push(productId); // optional UI update
      },
      error: (err) => {
        console.error('Failed to add to wishlist:', err);
      }
    });
  } else {
    console.error("User not logged in.");
  }

   }
}
