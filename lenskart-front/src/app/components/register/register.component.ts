import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer, User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Validator } from 'src/app/services/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  custId?: number;
  customer?: Customer;
  customerForm = this.formBuilder.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: [''],
    apartmentNo: ['', Validators.required],
    streetName: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    createdDate: [new Date() as Date],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    password: ['', [Validators.required, Validator.createPasswordStrengthValidator()]],
    confirmPassword: ['', [Validators.required, Validator.createPasswordStrengthValidator()]]
  }, {
    validators:
      [Validator.passwordValidator()]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private userService: UserService, public utilService: UtilityService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.custId = Number(params.get('userId'));
      // get customer details to edit i.e when user id is present in url
      if (this.custId) {
        this.userService.getCustomerById(this.custId).subscribe({
          next: ((respose: Customer) => {
            this.customer = respose;
            this.updateFormContent(this.customer);
          }),
          error: (err: HttpErrorResponse) => {
            console.log(err.error.message);
          }
        });
      }
    });
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
    const user: User = { userRole: 'CUSTOMER' };
    user.userId = this.customerForm.get('email')?.value || '';
    user.password = this.customerForm.get('password')?.value || '';

    if (this.customer?.id) {
      customer.id = this.customer?.id;
      user.id = this.customer?.user?.id;
    }
    customer.user = user;

    //service call to customer api
    this.userService.saveCustomer(customer).subscribe({
      next: (() => {
        if (this.customer?.id) {
          this.utilService.success("customer updated", "ok"); 
        } else {
          this.utilService.success("customer created", "ok");
        }
        this.router.navigate(['home/login']);
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

  // set the data to form for editing
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
    this.customerForm.get('createdDate')?.setValue(customer.createdDate!);

    this.customerForm.get('password')?.setValue(customer?.user?.password!);
    this.customerForm.get('confirmPassword')?.setValue(customer?.user?.password!);

    this.customerForm?.markAllAsTouched();
  }
}
