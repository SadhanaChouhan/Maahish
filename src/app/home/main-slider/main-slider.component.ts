import { Component } from '@angular/core';
import { homeSliderData } from 'src/Data/mainSlider';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
sliderData:any
currentSlide=0;
interval:any;



ngOnInit(){
  this.sliderData=homeSliderData;
  this.autoPlay();
}

autoPlay(){
  setInterval(()=>{
    this.nextSlide();
  },2000)
}

nextSlide(){
  this.currentSlide=(this.currentSlide+1) % this.sliderData.length
}


}
