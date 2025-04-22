import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { AdminService } from '../../admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  products: any = [];
  constructor(private adminService: AdminService,
    private dialog: MatDialog,
    private router: Router
  ){

  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.adminService.getProductList().subscribe(res=>{
      if(res){
        this.products = res;
      }
    });
  }

  editProduct(event: any){
    this.adminService.setEditProduct(event);
    this.router.navigate(["/add-products"],
      { queryParams:{isAdd:false} }
    );
  }
  deleteProduct(id: any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this item?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteProduct(id).subscribe(res=>{
          window.location.reload();
        });
      } else {
       
      }
    });
    
  }
}
