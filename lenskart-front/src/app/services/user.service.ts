import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

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
    this.router.navigate(['/login']);
    return false;

  }

  public login(user: User, loginType: string): Observable<User> {
    return this.http.post<User>(this.API_URL + loginType, user);
  }

  public isUserLoggedIn() {
    let user = localStorage.getItem('user');
    if ((user !== null)) {
      return true;
    }
    return false;
  }

  public isAdminLoggedIn() {
    let role = localStorage.getItem('role')!;
    if (role && role === 'manager') {
      return true;
    }

    return false;
  }

  public isEmployeeLoggedIn() {
    let role = localStorage.getItem('role');
    if (role && role === 'acoountant') {
      return true;
    }

    return false;
  }

  public isCustomerLoggedIn() {
    let role = localStorage.getItem('role');
    if (role && role === 'customer') {
      return true;
    }

    return false;
  }

  public logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
