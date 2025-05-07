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
import { AboutComponent } from './Module/feature/components/about/about.component';
import { WishlistItemComponent } from './Module/shared/components/wishlist-item/wishlist-item.component';
import { AboutCardComponent } from './Module/feature/components/about/about-card/about-card.component';
import { VideoComponent } from './Module/feature/components/about/video/video.component';
import { RefundComponent } from './Module/feature/components/about/refund/refund.component';
import { ConnectUsComponent } from './Module/feature/components/about/connect-us/connect-us.component';
import { UserProfileComponent } from './Module/shared/components/user-profile/user-profile.component';

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
  {path:"about",component:AboutComponent},
  {path:"Wishlist",component:WishlistItemComponent},
  {path:"photos",component:AboutCardComponent},
  {path:"video",component:VideoComponent},
  {path:"refund",component:RefundComponent},
  {path:"connect",component:ConnectUsComponent},
  {path:"profile",component:UserProfileComponent},
  





 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
