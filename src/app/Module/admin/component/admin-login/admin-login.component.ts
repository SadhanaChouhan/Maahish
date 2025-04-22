import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { AdminRegisterComponent } from '../admin-register/admin-register.component';
import { SharedService } from 'src/app/Module/shared/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      private dialog:MatDialog,
      public sharedService: SharedService,
      private snackBar: MatSnackBar
    
    ){}
  
    loginForm: FormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isAdmin: true
    })

    submitForm(){
      if(this.loginForm.valid){
        this.authService.login(this.loginForm.value).subscribe((res:any)=>{
          if(res.Error){
            this.getToastMsg(res.Error);
          }else{
            localStorage.setItem("userDatials",(res.token));
            this.sharedService.userDatials = JSON.parse(res.token);
            this.dialogRef.close();
          }
        });
      }
    }

    getToastMsg(msg:any){
      this.snackBar.open(msg, "",  {
        duration: 3000,  horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['custom-snackbar']
      });
    }

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
