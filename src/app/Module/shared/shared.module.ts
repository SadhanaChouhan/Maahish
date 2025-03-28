import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import{MatRadioModule} from '@angular/material/radio';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
   
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule,
    
    // FeatureModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ]
})
export class SharedModule { }
