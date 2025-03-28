import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { AuthComponent } from 'src/app/Module/auth/auth.component';
import { SigninComponent } from 'src/app/Module/auth/signin/signin.component';
import { SignupComponent } from 'src/app/Module/auth/signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private router:Router, private dialog:MatDialog){}

  navigateTo(path:any){
    this.router.navigate([path])
  }

  handleOpenRegisterModal(){
    this.openSignUpDialog();
  }

  openSignUpDialog(){
    const dialogRef = this.dialog.open(SignupComponent,{
      width:"500px",
      disableClose:true,
      autoFocus : true,
    });
    dialogRef.afterClosed.arguments((res:any)=>{

    });
  }
  isLoginModalOpen:boolean=false;
  handleOpenLoginModal() {
    this.openSignInDialog();
    // this.dialog.open(SigninComponent,{
    //   width:"500px",
    //   disableClose:true,
    //   autoFocus : true,
    // });

    if (!this.isLoginModalOpen) {
      this.isLoginModalOpen = true;
      // Open modal logic
    }
  }

  openSignInDialog(){
    const dialogRef = this.dialog.open(SigninComponent,{
      width:"500px",
      disableClose:true,
      autoFocus : true,
    });
    dialogRef.afterClosed.arguments((res:any)=>{

    });
  }
//   currentSection:any
//   isNavbarContentOpen:any

//   openNavbarContent(section:any){
//     this.isNavbarContentOpen=true;
//     this.currentSection=section;

//   }
//   closeNavbarContent(){
//     this.isNavbarContentOpen=false;
//     this.currentSection=null;
//   }

//   navigateTo(path:any){

//   }

//   // handle document click event to close navbar if it's open
//   @HostListener('document:click', ['$event'])  // bind to document's click event
//   onDocumentClick(event:MouseEvent){
// const modalContainer = document.querySelector(".model-container");
// const openButtons: NodeListOf<Element> = document.querySelectorAll(".open-button");
// let clickInsidebutton = false;

// openButtons.forEach((button:Element) => {
//   if(button.contains(event.target as Node)){
//     clickInsidebutton = true;
//   }
// })
// // if(modalContainer && !clickInsidebutton && this.isNavbarContentOpen){
// //   this.closeNavbarContent();
// //   }

//   }

}
