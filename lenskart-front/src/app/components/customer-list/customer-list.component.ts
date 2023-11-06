import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Last Name', 'Phone Number', 'Email', 'Status'];
  dataSource: MatTableDataSource<Customer>;

  constructor(private employeeService: CustomerService) { 
    this.dataSource = new MatTableDataSource([{}]);

  }

  ngOnInit(): void {
      this.employeeService.getAllCustomers().subscribe({
        next: ((respose: Customer[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        }
      });
  }
}
