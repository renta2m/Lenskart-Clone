import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address?: any;
  addressForm = this.formBuilder.group({
    aptNo: ['', Validators.required],
    streetName: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]], // Assuming a 5-digit zip code
  });

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.address = this.data.address;
      
      if (this.address) {
        this.addressForm.patchValue({
          aptNo: this.data.address.aptNo,
          streetName: this.data.address.streetName,
          city: this.data.address.city,
          state: this.data.address.state,
          zipCode: this.data.address.zipCode,
        });
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    if (this.addressForm.valid) {
      this.dialogRef.close(this.addressForm.value);
    }
  }
}
