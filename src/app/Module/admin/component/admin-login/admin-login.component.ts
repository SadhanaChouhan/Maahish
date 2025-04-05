import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { AdminRegisterComponent } from '../admin-register/admin-register.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private formBuilder:FormBuilder, private store:Store , private authService:AuthService,
      @Inject(MAT_DIALOG_DATA) private data: any,
      private dialogRef: MatDialogRef<AdminLoginComponent>,
      private router :Router,
      private dialog:MatDialog
    
    ){}
  
    loginForm: FormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

    submitForm(){}

  cancelDialog(){
    this.dialogRef.close();
  }


    changeToRegister(){
      this.dialogRef.close();
  
      this.openRegisterDialog();
    }
  
     openRegisterDialog(){
        const dialogRef = this.dialog.open(AdminRegisterComponent,{
          width:"500px",
          disableClose:true,
          autoFocus : true,
        });
        dialogRef.afterClosed.arguments((res:any)=>{
    
        });
      }

}
