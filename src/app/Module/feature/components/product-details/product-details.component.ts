import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
 @Input() product:any

  reviews=[1,1,1]

  constructor(private router:Router){}
  handleAddToCart(){
    this.router.navigate(['cart'])
  }
}
