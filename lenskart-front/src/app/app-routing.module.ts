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
import { UserService } from './services/user.service';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'login', component: HomeComponent },
  { path: 'employee-login', component: HomeComponent },
  { path: 'home', component: ProductsComponent },
  { path:'register', component: RegisterComponent },
  { path:'add-product', component: AddProductComponent, canActivate: [UserService] },
  { path:'add-employee', component: AddEmployeeComponent, canActivate: [UserService] },
  { path:'edit-customer/:custId', component: RegisterComponent, canActivate: [UserService] },
  { path:'your-profile/:custId', component: RegisterComponent, canActivate: [UserService] },
  { path:'edit-product/:productId', component: AddProductComponent, canActivate: [UserService] },
  { path:'edit-employee/:empId', component: AddEmployeeComponent, canActivate: [UserService] },
  { path:'order-details/:orderId', component: OrderDetailsComponent, canActivate: [UserService] },
  { path:'your-orders', component: OrderListComponent, canActivate: [UserService] },
  { path:'products', component: ProductListComponent, canActivate: [UserService] },
  { path:'employees', component: EmployeeListComponent, canActivate: [UserService] },
  { path:'customers', component: CustomerListComponent, canActivate: [UserService] },
  { path:'orders', component: OrderListComponent, canActivate: [UserService] },
  { path:'warehouses', component: WarehouseComponent, canActivate: [UserService] },
  { path:'cart', component: AddToCartComponent },
  { path:'checkout', component: CheckoutComponent, canActivate: [UserService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
