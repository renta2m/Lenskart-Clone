import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmpoyeeService } from 'src/app/services/empoyee.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  empId?: number;
  employee?: Employee;
  employeeForm = this.formBuilder.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: [''],
    designation: ['EMPLOYEE', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    active: [true, Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private employeeService: EmpoyeeService, public utilService: UtilityService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.empId = Number(params.get('empId'));
      // get employee details to edit i.e when user id is present in url
      if (this.empId) {
        this.employeeService.getEmployeeById(this.empId).subscribe({
          next: ((respose: Employee) => {
            this.employee = respose;
            this.updateFormContent(this.employee);
          }),
          error: (err: HttpErrorResponse) => {
            console.log(err.error.message);
          }
        });
      }
    });
  }

  // save employee details from form
  saveEmployee() {
    const employee: Employee = {};
    employee.firstName = this.employeeForm.get('firstName')?.value || '';
    employee.lastName = this.employeeForm.get('lastName')?.value || '';
    employee.designation = this.employeeForm.get('designation')?.value || '';
    employee.phoneNumber = this.employeeForm.get('phoneNumber')?.value?.toString() || '';
    employee.email = this.employeeForm.get('email')?.value || '';
    employee.active = this.employeeForm.get('active')?.value || false;
    employee.password = this.employeeForm.get('password')?.value || '';

    if (this.employee?.id) {
      employee.id = this.employee?.id;
    }

    //service call to employee api
    this.employeeService.saveEmployee(employee).subscribe({
      next: (() => {
        if (this.employee?.id) {
          this.utilService.success("employee updated", "ok"); 
        } else {
          this.utilService.success("employee created", "ok");
        }
        this.utilService.back();
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

  // set the data to form for editing
  updateFormContent(employee: Employee) {
    this.employeeForm.get('id')?.setValue(employee.id as unknown as string);
    this.employeeForm.get('firstName')?.setValue(employee.firstName!);
    this.employeeForm.get('lastName')?.setValue(employee.lastName!);
    this.employeeForm.get('designation')?.setValue(employee.designation!);
    this.employeeForm.get('email')?.setValue(employee.email!);
    this.employeeForm.get('active')?.setValue(employee.active!);
    this.employeeForm.get('phoneNumber')?.setValue(employee.phoneNumber!);

    this.employeeForm.get('password')?.setValue(employee?.password!);
    this.employeeForm.get('confirmPassword')?.setValue(employee?.password!);

    this.employeeForm?.markAllAsTouched();
  }
}
