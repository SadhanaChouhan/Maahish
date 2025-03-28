import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AddProductsComponent } from './component/add-products/add-products.component';

const routes: Routes = [
  {path:"",component:AdminComponent,
    children:[
      {path:"",component:DashboardComponent},
      {path:"products",component:AdminProductsComponent},
      {path:"orders-table",component:OrdersTableComponent},
      {path:"customers",component:CustomersComponent},
      {path:"add",component:AddProductsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
