import { Component } from '@angular/core';
import { sareesData } from 'src/Data/sarees';
import { scarfsDatta } from 'src/Data/scarfs';
import { womenKurtaData } from 'src/Data/womenKurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sarees:any
  scarfs:any
  womenKurta:any

  ngOnInit() {
    this.sarees=sareesData;
    this.scarfs=scarfsDatta;
    this.womenKurta=womenKurtaData;
  }
}
