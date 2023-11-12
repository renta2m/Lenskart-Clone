import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  { path: '', redirectTo: "/products", pathMatch: "full" },
  { path: 'login', component: HomeComponent },
  { path: 'employee-login', component: HomeComponent },
  { path: 'home', component: ProductsComponent },
  { path:'register', component: RegisterComponent },
  { path:'add-product', component: AddProductComponent },
  { path:'add-employee', component: AddEmployeeComponent },
  { path:'edit-customer/:custId', component: RegisterComponent },
  { path:'edit-product/:prodId', component: AddProductComponent },
  { path:'edit-employee/:empId', component: AddEmployeeComponent },
  { path:'products', component: ProductListComponent },
  { path:'employees', component: EmployeeListComponent },
  { path:'customers', component: CustomerListComponent },
  { path:'orders', component: OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
