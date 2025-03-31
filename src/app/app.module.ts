import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeatureModule } from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { AdminModule } from './Module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './Module/auth/auth.module';
import { authReducer } from './State/Auth/auth.reducer';
import { userReducer } from './State/user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/cart/cart.reducer';
import { orderReducer } from './State/order/order.reducer';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      product:productReducer,
      cart:cartReducer,
      order:orderReducer
    },
  {}),
    HttpClientModule,
     MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatCheckboxModule,
        FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
