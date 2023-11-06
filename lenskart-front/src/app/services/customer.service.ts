import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL: string = 'http://localhost:8080/customer/';

  constructor(private http: HttpClient) { }
  
  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + 'all');
  }

  public getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + id);
  }

  public saveCustomer(cus: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL + 'save', cus);
  }
}
