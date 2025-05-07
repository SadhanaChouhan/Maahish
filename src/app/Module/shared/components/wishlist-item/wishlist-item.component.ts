import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from 'src/app/Module/feature/service/feature.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent implements OnInit {


 wishlist: any = [];
 @Input() item: any;
userId=3;

  constructor(private router: Router,private featureService:FeatureService,

  ){}
  

ngOnInit(): void {
  
  const user = JSON.parse(localStorage.getItem("userDatials") || '{}');
  this.userId = user.id;

  this.loadWishlist();

  this.featureService.wishlistUpdated$.subscribe(() => {
    this.loadWishlist(); // re-fetch from backend
  });
}

loadWishlist() {
  this.featureService.getWishlist(this.userId).subscribe((data: any) => {
    this.wishlist = data;
  });
}

removeFromWishlist(productId: number) {
 
  this.featureService.removeFromWishlist(this.userId, productId).subscribe(() => {
    this.wishlist = this.wishlist.filter((item:any) => item.product.id !== productId);
  });
}

openProductDetails(path:any){
  this.featureService.setSelectedProduct(this.item);
  localStorage.setItem("productId",this.item.id);
  this.router.navigate([path]
  );
}
}
