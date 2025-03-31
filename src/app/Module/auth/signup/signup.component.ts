import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  @Input() changeTamplate: any


  constructor(private formBuilder: FormBuilder, private store: Store, private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SignupComponent>,
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

  //  openSignInDialog(){
  //     const dialogRef = this.dialog.open(SigninComponent,{
  //       width:"500px",
  //       disableClose:true,
  //       autoFocus : true,
  //     });
  //     dialogRef.afterClosed.arguments((res:any)=>{
  
  //     });
  //   }
}
