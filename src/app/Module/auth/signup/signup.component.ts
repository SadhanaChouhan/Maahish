import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { SigninComponent } from '../signin/signin.component';
import { AdminLoginComponent } from '../../admin/component/admin-login/admin-login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  @Input() changeTamplate: any


  constructor(private formBuilder: FormBuilder, private store: Store, private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SignupComponent>,
    private snackBar: MatSnackBar,
    private router:Router,
    private dialog:MatDialog
  ) { }
  ngOnInit(): void {
    this.loginForm.get('otp')?.valueChanges.subscribe(value => {
      console.log('OTP changed:', value);
      // You can add validation or custom logic here
    });
  }

  loginForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    isAdmin: false,
    otp:0
  })

  submitForm() {
    if (this.loginForm.valid) {
      console.log("login required  data", this.loginForm.value)
      this.authService.register(this.loginForm.value).subscribe((res:any)=>{
        if(res.status === "success"){
          this.getToastMsg("User create successfully.");
          this.dialogRef.close();
        }else{
          if(res.errorMsg){
            this.getToastMsg(res.errorMsg);
          }else{
            this.getToastMsg("User not created");
          }
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

  // changeToLogin(){
  //   this.openSignInDialog();
  // }

   openLogInDialog(){
      const dialogRef = this.dialog.open(SigninComponent,{
        width:"500px",
        disableClose:true,
        autoFocus : true,
      });
      dialogRef.afterClosed.arguments((res:any)=>{
  
      });
    }
  openLoginForm() {
    this.dialogRef.close();
    this.openLogInDialog();
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

  verifyEmail(){
    this.authService.emailVerify(this.loginForm.value).subscribe(res=>{
      console.log(res);
    });
  }
  
  onOtpChange(event: any){
    if(this.loginForm.value.otp.length === 6)
    this.authService.otpVerify(this.loginForm.value.email , this.loginForm.value.otp).subscribe(res=>{
      console.log(res);
    });
  }
}
