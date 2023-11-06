import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpoyeeService {
  API_URL: string = 'http://localhost:8080/employee/';

  constructor(private http: HttpClient) { }
  
  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL + 'all');
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.API_URL + id);
  }

  public saveEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_URL + 'save', emp);
  }
}
