import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  displayedColumns: string[] = ['ID', 'Name', 'Designation', 'Phone Number', 'Email', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Order>;

  constructor(private orderService: OrderService, private router: Router) { 
    this.dataSource = new MatTableDataSource([{}]);

  }

  ngOnInit(): void {
      this.orderService.getAllOrders().subscribe({
        next: ((respose: Order[]) => {
          this.dataSource.data = respose;
        }),
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        }
      });
  }
}
