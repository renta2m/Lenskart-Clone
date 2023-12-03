import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Prescription } from 'src/app/models/prescription.model';
import { OrderService } from 'src/app/services/order.service';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { MatPaginator } from '@angular/material/paginator';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  path = '';
  displayedColumns: string[] = ['ID', 'Name', 'Date', 'Price', 'Prescription', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Order>;
  isCustomer = false;

  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute,
    private dialog: MatDialog, private utilService: UtilityService) {
    this.dataSource = new MatTableDataSource([{}]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    if (!this.route.routeConfig?.path?.includes('your-orders')) {
      this.isCustomer = false;
      this.orderService.getAllOrders().subscribe({
        next: ((response: Order[]) => {
          this.setOrderDetails(response.filter(order => order.activeYN === 'ACTIVE'));
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'ok');
        }
      });
    } else {
      this.isCustomer = true;
      this.orderService.getOrdersByCustomerId().subscribe({
        next: ((response: Order[]) => {
          this.setOrderDetails(response.filter(order => order.activeYN === 'ACTIVE'));
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'ok');
        }
      });
    }
  }

  setOrderDetails(orders: Order[]) {
    orders.forEach((order) => {
      let statuses: string[] = [];
      order.totalPrice = 0;
      order.orderItems?.forEach((item) => {
        order.totalPrice = order.totalPrice! + (item.quantity! * item?.unitPrice!);
        statuses.push(item.status!);
      });

      if (statuses.indexOf('placed') > -1) {
        order.status = 'items are being packed';
      } else if (statuses.indexOf('waitingForDispatch') > -1) {
        order.status = 'Waiting for some items to dispatch';
      } else if (statuses.indexOf('dispatched') > -1) {
        order.status = 'waiting for some items to be shipped';
      } else if (statuses.indexOf('shipped') > -1) {
        order.status = 'Items have be shipped';
      } else if (statuses.indexOf('delivered') > -1) {
        order.status = 'Items have been delivered';
      }

      order.totalPrice = Number(order.totalPrice.toFixed(2));
    });

    this.dataSource.data = orders;
  }

  viewOrder(orderId: number) {
    this.router.navigate([`order-details/${orderId}`]);
  }

  viewPrescription(prescription: Prescription): void {
    this.dialog.open(PrescriptionComponent, {
      width: '25%',
      data: { prescription, edit: false },
    });
  }
}
