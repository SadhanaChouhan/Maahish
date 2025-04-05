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

  constructor(private router:Router,private featureService: FeatureService){}

  openProductDetils(path:any){
    this.featureService.setSelectedProduct(this.product);
    this.router.navigate([path]);
  }
}
