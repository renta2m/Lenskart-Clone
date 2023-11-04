import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:8080/product/';

  constructor(private http: HttpClient) { }
  
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL + 'all');
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + id);
  }

  public saveProduct(prod: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL + 'save', prod);
  }
}
