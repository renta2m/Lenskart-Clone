import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lenskart-front';
  
  constructor(public dialog: MatDialog, public userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openEmployeeForm(): void {
    this.router.navigate(['add-employee']);
  }

  openProductForm(): void {
    this.router.navigate(['add-product']);
  }

  viewProfile(): void {
    const custId = Number(localStorage.getItem('id'));
    this.router.navigate([`your-profile/${custId}`]);
  }
}
