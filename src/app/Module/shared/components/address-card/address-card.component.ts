import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() address: any
  userDatials: any;

  ngOnInit(): void {
    let user: any = localStorage.getItem("userDatials");
    this.userDatials = JSON.parse(user);
  }
}
