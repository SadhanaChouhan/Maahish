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
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    AddressCardComponent,
    OrderTrackerComponent,
    StarRatingComponent,
    UserProfileComponent,
   
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
    AddressCardComponent,
    OrderTrackerComponent,
    StarRatingComponent,

  ]
})
export class SharedModule { }
