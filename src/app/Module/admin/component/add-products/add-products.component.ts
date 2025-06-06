import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  selectedFile: any;
  productName: string = '';
  productTitle: string = '';
  productPrice: number = 2500;
  productCategory: string = 'sarees'; 
  productDescription: string = '';
  fabricType: string = 'Silk By Cotton';
  productQuantity: number = 1;
  color: string = '';
  length: string = '6.3 Meter';
  discountPersent :number = 10;
  discountedPrice:number=2500;
  productImageUrl: string | ArrayBuffer | null = null;
  product: any = [];
  isAdd: any = true;
  constructor(private adminService: AdminService,
      private snackBar: MatSnackBar,
      private route: ActivatedRoute,
  ){

  }
  ngOnInit(): void {
    this.isAdd = this.route.snapshot.queryParamMap.get('isAdd');
    this.isAdd = this.isAdd === 'false'? false: true;
    if(!this.isAdd){
      this.product = this.adminService.getEditProduct();
      this.productName = this.product.name;
      this.productTitle= this.product.title;
      this.productPrice = this.product.price;
      this.productCategory = this.product.category;
      this.productDescription = this.product.description;
      this.fabricType = this.product.fabric;
      this.productQuantity = this.product.quantity;
      this.color = this.product.color;
      this.length = this.product.length;
      this.discountedPrice = this.product.discountedPrice;
      // this.discountedPrice= this.productPrice * 0.9;
      this.discountPersent = this.product.discountPersent;
      this.productImageUrl = this.product.imageUrl;
    }
  }
  // Handle Image Upload
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // this.discountedPrice = file;
      this.selectedFile = file;
      // Generate Image Preview
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.productImageUrl = reader.result;
      };

      console.log('Selected Image:', file.name);
    }
  }

  addProduct() {
    if (!this.productName || this.productPrice <= 0) {
      alert('Please fill in all required fields correctly.');
      return;
    }
    let imagePath = "./assets/";
    if(this.productCategory === "suit-materials"){
      imagePath += "womenKurta/"
    }else{
      imagePath += "sarees/"
    }
    const newProduct: any = {
      title: this.productTitle,
      name: this.productName,
      price: this.productPrice,
      category: this.productCategory,
      description: this.productDescription,
      fabric: this.fabricType,
      quantity: this.productQuantity,
      color: this.color,
      length: this.length,
      discountedPrice: this.discountedPrice,
      discountPersent:this.discountPersent,
      imageUrl: this.selectedFile? imagePath + this.selectedFile.name: this.product.imageUrl,
     
      brand: "Maheshwari"
    };
    if(!this.isAdd)
      newProduct.id = this.product.id;

    console.log('Product Added:', newProduct);
    this.adminService.addProduct(newProduct).subscribe(res=>{
      if(this.isAdd)
        this.getToastMsg('Product added successfully!');
      else
        this.getToastMsg('Product updated successfully!');
    });

    // Reset Form
    this.productName = '';
    this.productTitle='';
    this.productPrice = 0;
    this.productCategory = 'sarees';
    this.productDescription = '';
    this.fabricType = 'Silk By Cotton';
    this.productQuantity = 1;
    this.color = '';
    this.length = '6.3 Meter';
    this.discountedPrice =0;
    this.productImageUrl = null;
    this.discountPersent=10;
  }

  getToastMsg(msg:any){
    this.snackBar.open(msg, "",  {
      duration: 3000,  horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }

  calculateDiscountedPrice() {
    if (this.productPrice && this.discountPersent >= 0) {
      this.discountedPrice = this.productPrice - (this.productPrice * this.discountPersent / 100);
    } else {
      this.discountedPrice = 0;
    }
  }
  

}