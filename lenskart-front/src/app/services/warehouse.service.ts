import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  API_URL: string = 'http://localhost:8080/warehouse/';

  constructor(private http: HttpClient) { }

  public getAllWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.API_URL + 'all');
  }

  public getWarehouseById(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(this.API_URL + id);
  }


  public saveWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(this.API_URL + 'save', warehouse);
  }
}
