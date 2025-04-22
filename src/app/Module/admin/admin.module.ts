import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminRegisterComponent } from './component/admin-register/admin-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProductsComponent,
    OrdersTableComponent,
    CustomersComponent,
    AddProductsComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserModule,
    MatSnackBarModule,
    AdminRoutingModule,
    MatMenuModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule
  ],
  exports:[
    ConfirmDialogComponent
  ]


})
export class AdminModule { }
