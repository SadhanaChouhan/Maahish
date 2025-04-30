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


  constructor(private router: Router,private featureService:FeatureService){}
  

ngOnInit() {
  const userId = 1;
  this.featureService.getWishlist(userId).subscribe((data:any) => {
    this.wishlist = data;
  });
}

removeFromWishlist(productId: number) {
  const userId = 1;
  this.featureService.removeFromWishlist(userId, productId).subscribe(() => {
    this.wishlist = this.wishlist.filter((item:any) => item.productId !== productId);
  });
}
}
