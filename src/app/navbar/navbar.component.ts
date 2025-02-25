import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentSection:any
  isNavbarContentOpen:any

  openNavbarContent(section:any){
    this.isNavbarContentOpen=true;
    this.currentSection=section;

  }
  closeNavbarContent(){
    this.isNavbarContentOpen=false;
    this.currentSection=null;
  }

  navigateTo(path:any){

  }

  // handle document click event to close navbar if it's open
  @HostListener('document:click', ['$event'])  // bind to document's click event
  onDocumentClick(event:MouseEvent){
const modalContainer = document.querySelector(".model-container");
const openButtons: NodeListOf<Element> = document.querySelectorAll(".open-button");
let clickInsidebutton = false;

openButtons.forEach((button:Element) => {
  if(button.contains(event.target as Node)){
    clickInsidebutton = true;
  }
})
if(modalContainer && !clickInsidebutton && this.isNavbarContentOpen){
  this.closeNavbarContent();
  }

  }

}
