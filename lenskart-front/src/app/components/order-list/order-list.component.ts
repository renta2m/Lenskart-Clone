import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Prescription } from 'src/app/models/prescription.model';
import { OrderService } from 'src/app/services/order.service';
import { PrescriptionComponent } from '../prescription/prescription.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  displayedColumns: string[] = ['ID', 'Name', 'Date', 'Price', 'Prescription','Status', 'Actions'];
  dataSource: MatTableDataSource<Order>;

  constructor(private orderService: OrderService, private router: Router,
    private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource([{}]);

  }

  ngOnInit(): void {
      this.orderService.getAllOrders().subscribe({
        next: ((response: Order[]) => {
          this.setOrderDetails(response.filter(order => order.activeYN === 'ACTIVE'));

        }),
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        }
      });
  }

  setOrderDetails(orders: Order[]) {
    orders.forEach((order) => {
      let status = '';
      order.totalPrice = 0;
      order.orderItems?.forEach((item) => {
        order.totalPrice = order.totalPrice! + (item.quantity! * item?.unitPrice!);
        if (item.status === 'waitingForDispatch') {
          status = item.status!;
        } else if (item.status === 'dispatched' &&  status !== 'waitingForDispatch') {
          status = item.status!;
        } else if (item.status === 'shipped' && status !== 'dispatched' &&  status !== 'waitingForDispatch') {
          status = item.status!;
        }
      });

      if (status === 'waitingForDispatch') {
        order.status ='Waiting for some items to dispatch';
      } else if (status === 'dispatched') {
        order.status = 'Items have been dispatched';
      } else if (status === 'shipped') {
        order.status = 'Items have been shipped';
      }
    });
    this.dataSource.data = orders;
  }

  viewOrder(orderId: number) {
    this.router.navigate([`order-details/${orderId}`]);
  }

  viewPrescription(prescription: Prescription): void {
    this.dialog.open(PrescriptionComponent, {
      width: '25%',
      data: prescription,
    });
  }
}
