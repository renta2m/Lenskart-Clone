import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['ID', 'Name', 'Last Name', 'Phone Number', 'Email', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Customer>;

  constructor(private employeeService: CustomerService, private router: Router, private utilService: UtilityService) { 
    this.dataSource = new MatTableDataSource([{}]);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
      this.employeeService.getAllCustomers().subscribe({
        next: ((respose: Customer[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'ok');
        }
      });
  }

  editCustomer(custId: number) {
    this.router.navigate([`edit-customer/${custId}`]);
  }
}
