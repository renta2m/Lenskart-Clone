import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Prescription } from 'src/app/models/prescription.model';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  prescription?: Prescription;
  edit = false;
  prescriptionForm = this.fb.group({
    odPower: [0, Validators.required],
    odCyl: [0, Validators.required],
    odAxis: [0, Validators.required],
    odBC: [0, Validators.required],
    odDia: [0, Validators.required],
    osPower: [0, Validators.required],
    osCyl: [0, Validators.required],
    osAxis: [0, Validators.required],
    osBC: [0, Validators.required],
    osDia: [0, Validators.required],
  });

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<PrescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.data) {
      this.prescription = this.data.prescription;
      this.edit = this.data.edit;
      if (this.prescription) {
        this.setContentToForm();
      }
    }
  }

  setContentToForm() {
    this.prescriptionForm.get('odPower')?.setValue(this.prescription?.odPower!);
    this.prescriptionForm.get('odCyl')?.setValue(this.prescription?.odCyl!);
    this.prescriptionForm.get('odAxis')?.setValue(this.prescription?.odAxis!);
    this.prescriptionForm.get('odBC')?.setValue(this.prescription?.odBC!);
    this.prescriptionForm.get('odDia')?.setValue(this.prescription?.odDia!);
    
    this.prescriptionForm.get('osPower')?.setValue(this.prescription?.osPower!);
    this.prescriptionForm.get('osCyl')?.setValue(this.prescription?.osCyl!);
    this.prescriptionForm.get('osAxis')?.setValue(this.prescription?.osAxis!);
    this.prescriptionForm.get('osBC')?.setValue(this.prescription?.osBC!);
    this.prescriptionForm.get('osDia')?.setValue(this.prescription?.osDia!);
  }

  add() {
    if (this.prescriptionForm.valid) {
      this.dialogRef.close(this.prescriptionForm.value);
    }
  }
}
