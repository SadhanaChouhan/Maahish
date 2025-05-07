import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from '../../service/feature.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  products = []
  selectedAddress: any;
  cart: any;
  cartItems: any;
  constructor(private router: Router,private featureService: FeatureService,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    let address: any = localStorage.getItem("address");
    this.selectedAddress = JSON.parse(address);
    this.findUserCartItems();
  }

  navigetToPaymentSuccess(path: any) {
    // this.router.navigate([path])
    this.payNow();
  }

  payNow() {
    // First call backend to create Razorpay Order
    this.featureService.initiatePayment({amount: this.cart.finalPrice}).subscribe((order: any) => {
        console.log(order);
        const options: any = {
          key: 'rzp_test_TvhIAolPPJPHgG', // Razorpay Key ID
          amount: order.amount,
          currency: order.currency,
          name: 'Maahish',
          description: 'Maheshwari Saree Purchase',
          order_id: order.id, // This comes from backend
          handler: function (response: any) {
            console.log('Payment Success', response);
            // You can call your backend to confirm the payment
            const verifyData = {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature
            };
  
            this.http.post(`http://localhost:8081/api/payment/verify-signature`, verifyData)
              .subscribe((result:any) => {
                console.log('Verification Success', result);
              }, (error:any) => {
                console.error('Verification Failed', error);
            });
          },
          prefill: {
            name: '',
            email: '',
            contact: ''
          },
          theme: {
            color: '#3399cc'
          }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      });
  }
  
  findUserCartItems() {
    let user: any = localStorage.getItem("userDatials");
    let userDatials = JSON.parse(user);
    this.featureService.findUserCart(userDatials.id).subscribe((res:any)=>{
      this.cart = res;
      this.cart.finalPrice =this. cart.totalDiscountedPrice + 99;
      this.cartItems = res.cartItems;
    });
  }

}
