import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order, OrderItem } from 'src/app/models/order.model';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent {
  shipmentForm = this.formBuilder.group({
    shipper: ['', [Validators.required]],
    shippingDate: [new Date(), Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<ShipmentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderItem,
    private formBuilder: FormBuilder
  ) {}

  submit() {
    if (this.shipmentForm.valid) {
      this.dialogRef.close(this.prepareOrderItem());
    }
  }

  prepareOrderItem() {
    const orderItem: OrderItem = this.data;
    orderItem.shipper = this.shipmentForm.get('shipper')?.value || '';
    orderItem.shippingDate = this.shipmentForm.get('shippingDate')?.value || new Date();

    return orderItem;
  }

  cancel() {
    this.dialogRef.close();
  }
}
