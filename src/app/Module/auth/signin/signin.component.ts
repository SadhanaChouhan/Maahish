import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { AdminRegisterComponent } from '../../admin/component/admin-register/admin-register.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  @Input() changeTamplate:any


  constructor(private formBuilder:FormBuilder, private store:Store , private authService:AuthService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SigninComponent>,
    private router :Router,
    private dialog:MatDialog
  
  ){}

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  submitForm(): void{
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      console.log("login required  data", this.loginForm.value)
    }
  }
  cancelDialog(){
    this.dialogRef.close();
  }

  changeToRegister(){
    this.dialogRef.close();

    this.openRegisterDialog();
  }

   openRegisterDialog(){
      const dialogRef = this.dialog.open(SignupComponent,{
        width:"500px",
        disableClose:true,
        autoFocus : true,
      });
      dialogRef.afterClosed.arguments((res:any)=>{
  
      });
    }

    changeAdminRegister(){
      this.dialogRef.close();
      this.openAdminRegisterDialog();
    }

    openAdminRegisterDialog(){ 
      const dialogRef = this.dialog.open(AdminRegisterComponent,{
          width:"500px",
          disableClose:true,
          autoFocus : true,
        });
        dialogRef.afterClosed.arguments((res:any)=>{
    
        });}
}
