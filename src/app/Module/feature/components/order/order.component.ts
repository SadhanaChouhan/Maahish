import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
orders=[[1,1],[1,1,1]]

constructor(private router:Router){}

   navigateToOrderDetails=()=>{
    this.router.navigate(['order-details'])
   }

orderFilter=[
  { value:"on the way",label:"On The Way"},
  {value:"deliverd",label:"Deliverd"},
  {value:"cancelled",label:"Cancelled"},
  {value:"returned",label:"Returned"}
]
}
