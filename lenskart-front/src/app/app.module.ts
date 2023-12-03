import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsComponent } from './components/products/products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RegisterComponent } from './components/register/register.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AddProductComponent } from './components/add-product/add-product.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import {MatListModule} from '@angular/material/list';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { ShipmentDetailsComponent } from './components/shipment-details/shipment-details.component';
import { ReviewComponent } from './components/review/review.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    RegisterComponent,
    AddProductComponent,
    ProductListComponent,
    EmployeeListComponent,
    OrderListComponent,
    AddEmployeeComponent,
    CustomerListComponent,
    PrescriptionComponent,
    OrderDetailsComponent,
    AddToCartComponent,
    CheckoutComponent,
    AddressComponent,
    ShipmentDetailsComponent,
    ReviewComponent,
    ReviewsComponent,
    WarehouseComponent,
    AddWarehouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatSnackBar, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
