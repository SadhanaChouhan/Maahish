import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeatureService } from '../../../service/feature.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit{

  addressList: any = [];
  myForm: FormGroup = this.formBuilder.group({
    nation:["", Validators.required],
    dist: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    streetAddress: ["", Validators.required],
    city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    state: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    mobile: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
    email: ['', [Validators.required, Validators.email]]
  })
  userDatials: any;
  constructor(private formBuilder: FormBuilder
    , private router: Router, private featureService: FeatureService
  ) {
    let user: any = localStorage.getItem("userDatials");
    this.userDatials = JSON.parse(user);
  }
  ngOnInit(): void {
    this.getAddresList();
  }
  handleCreateOrder(item: any) { 
    localStorage.setItem("address",JSON.stringify(item));
    this.router.navigate(['payment']);
  }

  handleSubmit() { }

  navigetToPayement(path: any) {
    
    let address = {
      nation: this.myForm.value.nation,
      dist: this.myForm.value.dist,
      streetAddress: this.myForm.value.streetAddress,
      city: this.myForm.value.city,
      state: this.myForm.value.state,
      zipCode: this.myForm.value.zipCode,
      user: {id:this.userDatials.id},
      mobile: this.myForm.value.mobile
    }
    this.featureService.addAddress(address).subscribe(res=>{
      console.log(res);
      
      this.router.navigate([path]);
    });
  }

  getAddresList(){
    this.featureService.getAddress(this.userDatials.id).subscribe(res=>{
      this.addressList = res;
    });
  }
}
