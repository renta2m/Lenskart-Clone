import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL: string = 'http://localhost:8080/order/';

  constructor(private http: HttpClient) { }
  
  public getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_URL + 'all');
  }

  public getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.API_URL + id);
  }

  public saveOrder(emp: Order): Observable<Order> {
    return this.http.post<Order>(this.API_URL + 'save', emp);
  }
}
