import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  API_URL: string = 'http://localhost:8080/user/';

  isLoggedIn?: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = false;
  }

    // authentication guard for unauthorized access of links
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;

  }

  public login(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL + 'login', user);
  }

  public isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    if ((user !== null)) {
      return true;
    }
    return false;
  }

  public isAdminLoggedIn() {
    let role = sessionStorage.getItem('role')!;
    if (role && role === 'ADMIN') {
      return true;
    }

    return false;
  }

  public isEmployeeLoggedIn() {
    let role = sessionStorage.getItem('role');
    if (role && role === 'EMPLOYEE') {
      return true;
    }

    return false;
  }

  public isCustomerLoggedIn() {
    let role = sessionStorage.getItem('role');
    if (role && role === 'CUSTOMER') {
      return true;
    }

    return false;
  }

  public logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('role');
    this.router.navigate(['/home']);
  }

  public saveCustomer(customer: Customer): Observable<User> {
    return this.http.post<User>(this.API_URL + 'customer/create', customer);
  }


  public getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + 'customer/' + id);
  }
}
