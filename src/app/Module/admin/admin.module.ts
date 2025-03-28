import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AddProductsComponent } from './component/add-products/add-products.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProductsComponent,
    OrdersTableComponent,
    CustomersComponent,
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
