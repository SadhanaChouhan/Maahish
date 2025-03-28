import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  address=[1,1,1,11,1]
  myForm:FormGroup=this.formBuilder.group({
    firstName:["", Validators.required],
    lastName:["", Validators.required],
    streetAddress:["", Validators.required],
    city:["", Validators.required],
    state:["", Validators.required],
    zipCode:["", Validators.required],
    mobile:["", Validators.required],
    email:["", Validators.required]
  })

  constructor(private formBuilder:FormBuilder
    , private router :Router
  ){

  }
  handleCreateOrder(item:any){}

  handleSubmit(){}

  navigetToPayement(path:any){
this.router.navigate([path])
  }
}
