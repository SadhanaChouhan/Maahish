import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainSliderComponent } from './home/main-slider/main-slider.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavContentComponent } from './navbar/nav-content/nav-content.component';
import {MatIconModule} from  '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainSliderComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    NavbarComponent,
    NavContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
