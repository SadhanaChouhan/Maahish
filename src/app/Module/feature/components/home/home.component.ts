import { Component } from '@angular/core';
import { mensKurtaData } from 'src/Data/menKurta';
import { sareesData } from 'src/Data/sarees';
import { scarfsDatta } from 'src/Data/scarfs';
import { womenKurtaData } from 'src/Data/womenKurta';
import { FeatureService } from '../../service/feature.service';
import { filter } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sarees:any
  scarfs:any
  womenKurta:any
  menKurta:any

  constructor(private featureService: FeatureService){

  }
  ngOnInit() {
    this.sarees=sareesData.slice(0,10);
    this.scarfs=scarfsDatta.slice(0,5);
    this.womenKurta=womenKurtaData.slice(0,10);
    this.menKurta=mensKurtaData.slice(0,5);
    this.getProductList();
  }

  getProductList(){
    this.featureService.getProductList().subscribe(res=>{
      if(res){
        this.sarees = _.filter(res,(obj:any)=>
          obj.category === "sarees"
        );
        this.womenKurta = _.filter(res,(obj:any)=>
          obj.category === "sut-materials"
        );
      }
    });
  }
}
