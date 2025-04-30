import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/Module/admin/component/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() address: any
  userDatials: any;


   constructor(
      private dialog: MatDialog,
      private router: Router
    ){
  
    }

  ngOnInit(): void {
    let user: any = localStorage.getItem("userDatials");
    this.userDatials = JSON.parse(user);
  }

  deleteAddress(){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '300px',
        data: { message: 'Are you sure you want to delete this Address?' }
      });
    
      // dialogRef.afterClosed().subscribe(result => {
      //   if (result) {
      //     this.adminService.deleteProduct(id).subscribe(res=>{
      //       window.location.reload();
      //     });
      //   } else {
         
      //   }
      // });
      
    }
}
