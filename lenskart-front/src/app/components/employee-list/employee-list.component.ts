import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmpoyeeService } from 'src/app/services/empoyee.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent   implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['ID', 'Name', 'Designation', 'Phone Number', 'Email', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Employee>;

  constructor(private employeeService: EmpoyeeService, private router: Router,
    private utilService: UtilityService) { 
    this.dataSource = new MatTableDataSource([{}]);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe({
        next: ((respose: Employee[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'ok');
        }
      });
  }

  editEmployee(empId: number) {
    this.router.navigate([`edit-employee/${empId}`]);
  }
}
