import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmpoyeeService } from 'src/app/services/empoyee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Designation', 'Phone Number', 'Email', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Employee>;

  constructor(private employeeService: EmpoyeeService, private router: Router) { 
    this.dataSource = new MatTableDataSource([{}]);

  }

  ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe({
        next: ((respose: Employee[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        }
      });
  }

  editEmployee(empId: number) {
    this.router.navigate([`edit-employee/${empId}`]);
  }
}
