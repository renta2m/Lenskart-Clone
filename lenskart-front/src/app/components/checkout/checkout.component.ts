import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Order, OrderItem } from 'src/app/models/order.model';
import { Prescription } from 'src/app/models/prescription.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddressComponent } from '../address/address.component';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderItems?: OrderItem[] = [];
  totalPrice = 0;
  prescription?: Prescription;
  address?: any;

  paymentForm = this.fb.group({
    nameOnCard: ['', Validators.required],
    cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]],
    cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    expiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?(2[3-9]|[3-9][0-9])$')]]
  });

  constructor(private fb: FormBuilder, private orderService: OrderService, private cartService: CartService,
    private dialog: MatDialog, private router: Router, private utilService: UtilityService) {
  }

  ngOnInit(): void {
    this.prepareOrderItems();
  }

  onSubmit(): void {
  }

  getTotal(orderItems: OrderItem[]): number {
    let total = 0;
    for (const item of orderItems) {
      total += item.unitPrice! * item.quantity!;
    }
    return total;
  }

  prepareOrderItems() {
    const cartItems = this.cartService.getCartItems();
    let orderItems: OrderItem[] = [];
    for (const item of cartItems.values()) {
      let orderItem: OrderItem = {};

      orderItem.product = item.product;
      orderItem.unitPrice = item.product.price;
      orderItem.quantity = item.quantity;
      orderItem.status = 'placed';
      orderItems.push(orderItem);
    }

    this.totalPrice = this.getTotal(orderItems);
    this.orderItems = orderItems;
  }
  placeOrder() {
    const order: Order = this.prepareOrder();

    this.orderService.saveOrder(order).subscribe({
      next: ((respose: Order) => {
        this.cartService.clearCart();
        this.router.navigate([`order-details/${respose.id}`]);
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

  prepareOrder(): Order {
    const order: Order = {};

    this.orderItems?.forEach((item) => {
      item.aptNo = this.address.aptNo;
      item.streetName = this.address.streetName;
      item.city = this.address.city;
      item.state = this.address.state;
      item.zipCode = this .address.zipCode;
      item.status = 'placed'
    })

    order.prescription = this.prescription;
    order.orderItems = this.orderItems;
    order.cardNumber = this.paymentForm.get('cardNumber')?.value || '';

    let expiry = this.paymentForm.get('expiry')?.value;
    let date: string[] = expiry?.split('/') || [];
    order.expiryDate = new Date('01-' + date[0] + '-20' + date[0]);
    order.cvv = this.paymentForm.get('cvv')?.value || '';
    order.nameOnCard = this.paymentForm.get('nameOnCard')?.value || '';
    order.activeYN = 'ACTIVE';
    order.customer = { id: Number(localStorage.getItem('id')!) };
    order.prescription!.customer = { id: Number(localStorage.getItem('id')!) };
    
    return order;
  }

  openPrescription() {
    const dialogRef = this.dialog.open(PrescriptionComponent, {
      width: 'auto',
      data: { prescription: this.prescription, edit: true },
    });

    dialogRef?.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.prescription = result;
    });
  }

  openAddress() {
    const dialogRef = this.dialog.open(AddressComponent, {
      width: 'auto',
      data: { address: this.address },
    });

    dialogRef?.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.address = result;
    });
  }
}
