import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
 import {MatButtonModule} from '@angular/material/button'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  invalidDetails?: boolean;
  user?: User;

  loginForm = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required],
  });

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
    public userService: UserService) {
  }

  ngOnInit(): void {
    this.user = {};

    if (this.userService.isUserLoggedIn()) {
      this.navigateToRespectivePath();
    }
  }

  login(){
    this.invalidDetails = false;
    this.user!.userId = this.loginForm.get('userName')?.value || '';
    this.user!.password = this.loginForm.get('password')?.value || '';
    this.userService.login(this.user!).subscribe({
      next: ((response: User) => {
        if (response === null) {
          this.invalidDetails = true;
        } else {
          this.user = response;
          sessionStorage.setItem('user', response.id!.toString());
          sessionStorage.setItem('role', response.userRole!);
          this.navigateToRespectivePath();
        }
      }),
      error: (err: HttpErrorResponse) => {
        this.invalidDetails = true;
      }
    });
  }

  navigateToRespectivePath() {
    const user = Number(sessionStorage.getItem('user') || '');
    const role = sessionStorage.getItem('role');
    if (role === 'CUSTOMET') {
      this.router.navigate([`/products`], { relativeTo: this.activatedRoute });
    } else if (role === 'EMPLOYEE') {
      this.router.navigate([`/orders`], { relativeTo: this.activatedRoute });
    } else if (role === 'ADMIN') {
      this.router.navigate([`/employees`], { relativeTo: this.activatedRoute });
    }
  }
}
