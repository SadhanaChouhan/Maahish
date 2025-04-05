import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  productName: string = '';
  productPrice: number = 2500;
  productCategory: string = 'sarees'; 
  productDescription: string = '';
  fabricType: string = '';
  productQuantity: number = 1;
  color: string = '';
  length: string = '';
  discountedPrice: File | null = null;
  productImageUrl: string | null = null;

  constructor(private adminService: AdminService,
      private snackBar: MatSnackBar,
  ){

  }
  // Handle Image Upload
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.discountedPrice = file;

      // Generate Image Preview
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.productImageUrl = reader.result as string;
      };

      console.log('Selected Image:', file.name);
    }
  }

  addProduct() {
    if (!this.productName || this.productPrice <= 0) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const newProduct = {
      name: this.productName,
      price: this.productPrice,
      category: this.productCategory,
      description: this.productDescription,
      fabricType: this.fabricType,
      quantity: this.productQuantity,
      color: this.color,
      length: this.length,
      discountedPrice: this.discountedPrice 
    };

    console.log('Product Added:', newProduct);
    this.adminService.addProduct(newProduct).subscribe(res=>{
      this.getToastMsg('Product added successfully!');
    });

    // Reset Form
    this.productName = '';
    this.productPrice = 0;
    this.productCategory = 'sarees';
    this.productDescription = '';
    this.fabricType = '';
    this.productQuantity = 1;
    this.color = '';
    this.length = '';
    this.discountedPrice = null;
    this.productImageUrl = null;
  }

  getToastMsg(msg:any){
    this.snackBar.open(msg, "",  {
      duration: 3000,  horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }
}