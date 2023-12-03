import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  custId?: number;
  customer?: Customer;
  path = '';
  customerForm = this.formBuilder.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: [''],
    apartmentNo: ['', Validators.required],
    streetName: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    status: ['ACTIVE', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private userService: CustomerService, public utilService: UtilityService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.custId = Number(params.get('custId'));
      // get customer details to edit i.e when user id is present in url
      if (this.custId) {
        this.userService.getCustomerById(this.custId).subscribe({
          next: ((respose: Customer) => {
            this.customer = respose;
            this.updateFormContent(this.customer);
          }),
          error: (err: HttpErrorResponse) => {
            this.utilService.error(err.error.message, 'ok');
          }
        });
      }
    });
    this.path = this.route.snapshot.url[0].path;
  }

  // save customer details from form
  saveCustomer() {
    const customer: Customer = {};
    customer.apartmentNo = this.customerForm.get('apartmentNo')?.value || '';
    customer.streetName = this.customerForm.get('streetName')?.value || '';
    customer.city = this.customerForm.get('city')?.value || '';
    customer.zipCode = this.customerForm.get('zipCode')?.value || '';
    customer.state = this.customerForm.get('state')?.value || '';
    customer.email = this.customerForm.get('email')?.value || '';
    customer.phoneNumber = this.customerForm.get('phoneNumber')?.value?.toString() || '';
    customer.firstName = this.customerForm.get('firstName')?.value || '';
    customer.lastName = this.customerForm.get('lastName')?.value || '';
    customer.password = this.customerForm.get('password')?.value || '';
    customer.activeYN = this.customerForm.get('status')?.value || '';

    if (this.customer?.id) {
      customer.id = this.customer?.id;
    }

    //service call to customer api
    this.userService.saveCustomer(customer).subscribe({
      next: (() => {
        if (this.customer?.id) {
          this.utilService.success("details updated", "ok"); 
        } else {
          this.utilService.success("account created", "ok");
        }
        this.utilService.refreshPage(this.router, this.route);
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

  updateFormContent(customer: Customer) {
    this.customerForm.get('id')?.setValue(customer.id as unknown as string);
    this.customerForm.get('firstName')?.setValue(customer.firstName!);
    this.customerForm.get('lastName')?.setValue(customer.lastName!);
    this.customerForm.get('streetName')?.setValue(customer.streetName!);
    this.customerForm.get('email')?.setValue(customer.email!);
    this.customerForm.get('city')?.setValue(customer.city!);
    this.customerForm.get('state')?.setValue(customer.state!);
    this.customerForm.get('apartmentNo')?.setValue(customer.apartmentNo!);
    this.customerForm.get('phoneNumber')?.setValue(customer.phoneNumber!);
    this.customerForm.get('zipCode')?.setValue(customer.zipCode!);
    this.customerForm.get('status')?.setValue(customer.activeYN!);

    this.customerForm.get('password')?.setValue(customer?.password!);
    this.customerForm.get('confirmPassword')?.setValue(customer?.password!);

    this.customerForm?.markAllAsTouched();
  }
}
