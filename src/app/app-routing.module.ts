import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/components/home/home.component';

import { CartComponent } from './Module/feature/components/cart/cart.component';
import { FilterProductsComponent } from './Module/feature/components/filter-products/filter-products.component';
import { ProductDetailsComponent } from './Module/feature/components/product-details/product-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';
import { PaymentComponent } from './Module/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/components/payment-success/payment-success.component';
import { CheckoutComponent } from './Module/feature/components/checkout/checkout.component';
import { OrderComponent } from './Module/feature/components/order/order.component';
import { OrderDetailsComponent } from './Module/feature/components/order-details/order-details.component';
import { SignupComponent } from './Module/auth/signup/signup.component';
import { SigninComponent } from './Module/auth/signin/signin.component';

const routes: Routes = [
  {path:"admin",loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>AdminRoutingModule)},
  {path:"", component:HomeComponent},
  {path:"filter", component:FilterProductsComponent},
  {path:"cart", component:CartComponent},
  {path:"product-details", component:ProductDetailsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"payment-success",component:PaymentSuccessComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"order",component:OrderComponent},
  {path:"order-details",component:OrderDetailsComponent},
  {path:"sign-up",component:SignupComponent},
  {path:"sign-in",component:SigninComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
