import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    children: [
      { path: 'login', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
    ]
  },
  { path:'register', component: RegisterComponent },
  { path:'add-product', component: AddProductComponent },
  { path:'customer/edit/:userId', component: RegisterComponent },
  { path:'product/edit/:prodId', component: AddProductComponent },
  { path:'products', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
