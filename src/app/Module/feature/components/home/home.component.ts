import { Component } from '@angular/core';
import { mensKurtaData } from 'src/Data/menKurta';
import { sareesData } from 'src/Data/sarees';
import { scarfsDatta } from 'src/Data/scarfs';
import { womenKurtaData } from 'src/Data/womenKurta';
import { FeatureService } from '../../service/feature.service';
import { filter } from 'rxjs';
import * as _ from 'lodash';
import { SharedService } from 'src/app/Module/shared/shared.service';

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
  address: any = [];
  constructor(private featureService: FeatureService,
    public sharedService: SharedService
  ){

  }
  ngOnInit() {
    this.sharedService.sareeList=sareesData.slice(0,10);
    this.sharedService.scarfList=scarfsDatta.slice(0,5);
    this.sharedService.womenKurtaList=womenKurtaData.slice(0,10);
    // this.menKurta=mensKurtaData.slice(0,5);
    this.getProductList();
    this.getAddress();
  }

  getProductList(){
   let abc =  this.featureService.getProductList()
   abc.subscribe(res=>{
      if(res){
        this.sortProduct(res);
      }
    });

  }

  getAddress(){
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    this.featureService.getAddress(userDatials.id).subscribe(res=>{
      this.address = res;
    });
    
  }


  sortProduct(res: any){
    this.sharedService.sareeList = _.filter(
      res,(obj:any)=>
      obj.category === "sarees"
    );
    this.sharedService.womenKurtaList = _.filter(res,(obj:any)=>
      obj.category === "suit-materials"
    );
    this.sharedService.scarfList = _.filter(res,(obj:any)=>
      obj.category === "scarfs"
    );
  }
}
