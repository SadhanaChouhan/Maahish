import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature.component';
import { HomeComponent } from './components/home/home.component';
import { MainSliderComponent } from './components/home/main-slider/main-slider.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ReviewCardComponent } from './components/product-details/review-card/review-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderCartComponent } from './components/order/order-cart/order-cart.component';
import { AboutComponent } from './components/about/about.component';
import { VideoComponent } from './components/about/video/video.component';
import { AboutCardComponent } from './components/about/about-card/about-card.component';
import { AdminModule } from '../admin/admin.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainSliderComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductDetailsComponent,
    CartComponent,
    FilterProductsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ReviewCardComponent,
    AddressFormComponent,
    OrderCartComponent,
    AboutComponent,
    VideoComponent,
    AboutCardComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
    MatRadioModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AdminModule,
    MatCardModule,
    MatSelectModule,

    // ProductCardComponent
    // Add your other imports here if needed
  ],
  exports: [
    FeatureComponent,
    HomeComponent,
    FilterProductsComponent

  ]
})
export class FeatureModule { }
