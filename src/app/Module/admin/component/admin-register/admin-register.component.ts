import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { AdminLoginComponent } from '../admin-login/admin-login.component';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {

  constructor(private formBuilder: FormBuilder, private store: Store, private authService: AuthService,
      @Inject(MAT_DIALOG_DATA) private data: any,
      private dialogRef: MatDialogRef<AdminRegisterComponent>,
      private snackBar: MatSnackBar,
      private router:Router,
      private dialog:MatDialog
    ) { }
  
    loginForm: FormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  cancelDialog(){
    this.dialogRef.close();
  }

  changeAdminLogin(){
    this.dialogRef.close();
    this.openAdminLogInDialog();
  }

  openAdminLogInDialog(){
    const dialogRef = this.dialog.open(AdminLoginComponent,{
            width:"500px",
            disableClose:true,
            autoFocus : true,
          });
          dialogRef.afterClosed.arguments((res:any)=>{
      
          });
  }
}
