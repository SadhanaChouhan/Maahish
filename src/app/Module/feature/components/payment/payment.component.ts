import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
products=[1,1,1]
constructor(private router:Router){}

navigetToPaymentSuccess(path:any){
this.router.navigate([path])
}
}
