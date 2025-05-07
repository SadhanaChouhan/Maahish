import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../service/feature.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

orders : any = [];
selectedAddress: any;

constructor(private featureService: FeatureService){

}
ngOnInit(): void {
  let address: any = localStorage.getItem("address");
  this.selectedAddress = JSON.parse(address);
  this.getOrders();
}

steps=[
  {id:0,title:"PLACED",isCompleted:true},
  {id:1,title:"CONFIRMED",isCompleted:true},
  {id:2,title:"SHIPPED",isCompleted:false},
  {id:3,title:"DELIVERED",isCompleted:false},

]

  getOrders() {
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    this.featureService.getOrderList(userDatials.id).subscribe((res:any)=> {
      this.orders = res[0].orderitems;
    });
  }
}
