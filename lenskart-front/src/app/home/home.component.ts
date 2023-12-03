import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilityService } from '../services/utility.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  invalidDetails?: boolean;
  user?: User;
  loginType = 'cust-login';

  loginForm = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required],
  });

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
    public userService: UserService, private utilService: UtilityService) {
  }

  ngOnInit(): void {
    this.user = {};

    if (this.activatedRoute.routeConfig?.path?.includes('employee-login')) {
      this.loginType = 'emp-login';
    }
  }

  login(){
    this.invalidDetails = false;
    this.user!.userId = this.loginForm.get('userName')?.value || '';
    this.user!.password = this.loginForm.get('password')?.value || '';
    this.userService.login(this.user! , this.loginType).subscribe({
      next: ((response: User) => {
        if (response === null) {
          this.utilService.error('wrong details', 'ok');
          this.invalidDetails = true;
        } else {
          this.utilService.success('login successful', 'ok');
          this.user = response;
          localStorage.setItem('user', response.userId!.toString());
          localStorage.setItem('role', response.designation!);
          localStorage.setItem('id', response.id!.toString());
          this.navigateToRespectivePath();
        }
      }),
      error: (err: HttpErrorResponse) => {
        this.invalidDetails = true;
      }
    });
  }

  navigateToRespectivePath() {
    const user = Number(localStorage.getItem('user') || '');
    const role = localStorage.getItem('role');
    if (role === 'customer') {
      this.router.navigate([`/home`], { relativeTo: this.activatedRoute });
    } else if (role === 'employee') {
      this.router.navigate([`/orders`], { relativeTo: this.activatedRoute });
    } else if (role === 'manager') {
      this.router.navigate([`/employees`], { relativeTo: this.activatedRoute });
    }
  }
}
