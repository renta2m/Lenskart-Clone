import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Warehouse } from 'src/app/models/warehouse.model';
import { UtilityService } from 'src/app/services/utility.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {
  warehouseId?: number;
  warehouse?: Warehouse;
  warehouseForm = this.formBuilder.group({
    id: [''],
    apartmentNo: ['', Validators.required],
    streetName: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required],
    status: ['ACTIVE', Validators.required],
    createdDate:[new Date()]
  });

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private warehouseService: WarehouseService,
    public utilService: UtilityService) { }

  ngOnInit(): void {
    if (this.data) {
      this.warehouseService.getWarehouseById(this.data).subscribe({
        next: ((response: Warehouse) => {
          this.warehouse = response;
          this.updateFormContent(this.warehouse);
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'OK');
        }
      });
    }
  }

  // Save warehouse details from form
  saveWarehouse() {
    const warehouse: Warehouse = {
      apartmentNo: this.warehouseForm.get('apartmentNo')?.value || '',
      streetName: this.warehouseForm.get('streetName')?.value || '',
      city: this.warehouseForm.get('city')?.value || '',
      state: this.warehouseForm.get('state')?.value || '',
      zipcode: this.warehouseForm.get('zipcode')?.value || '',
      activeYN: this.warehouseForm.get('status')?.value || '',
      createdDate: this.warehouseForm.get('createdDate')?.value || new Date()
    };

    if (this.warehouse?.id) {
      warehouse.id = this.warehouse?.id;
    }
    warehouse.lastUpdatedDate = new Date();
    // Service call to warehouse API
    this.warehouseService.saveWarehouse(warehouse).subscribe({
      next: ((response: Warehouse) => {
        if (this.warehouse?.id) {
          this.utilService.success("Warehouse updated", "OK");
        } else {
          this.utilService.success("Warehouse created", "OK");
        }
        this.dialogRef.close(response);
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'OK');
      }
    });
  }

  // Set the data to form for editing
  updateFormContent(warehouse: Warehouse) {
    this.warehouseForm.get('id')?.setValue(warehouse.id as unknown as string);
    this.warehouseForm.get('apartmentNo')?.setValue(warehouse.apartmentNo!);
    this.warehouseForm.get('streetName')?.setValue(warehouse.streetName!);
    this.warehouseForm.get('city')?.setValue(warehouse.city!);
    this.warehouseForm.get('state')?.setValue(warehouse.state!);
    this.warehouseForm.get('zipcode')?.setValue(warehouse.zipcode!);
    this.warehouseForm.get('status')?.setValue(warehouse.activeYN!);
    this.warehouseForm.get('createdDate')?.setValue(warehouse.createdDate! as Date);

    this.warehouseForm?.markAllAsTouched();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
