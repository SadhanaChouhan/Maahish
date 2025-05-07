import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor(private router:Router, private sharedService: SharedService){}

  navigateTo(path:any){
    this.router.navigate([path])
  }

  logOut(){
    console.log("logout")
    localStorage.clear();
    this.sharedService.userDatials = [];
    this.router.navigate([""]);
  }
}
