import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainSliderComponent } from './home/main-slider/main-slider.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainSliderComponent,
    ProductSliderComponent,
    HomeProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
