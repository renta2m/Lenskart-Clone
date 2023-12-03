import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Order, OrderItem } from 'src/app/models/order.model';
import { Prescription } from 'src/app/models/prescription.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from '../review/review.component';
import { Product } from 'src/app/models/product.model';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';
import { ShipmentDetailsComponent } from '../shipment-details/shipment-details.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  dataSource?: any;
  itemsDataSource?: any;
  id?: number;
  order?: Order;
  displayedColumns: string[] = ['Date', 'Price', 'Prescription'];
  itemColumns: string[] = ['Product', 'Quantity', 'Unit Price', 'Status', 'Shipper', 'Shipping Date', 'Actions'];

  constructor(public utilService: UtilityService, public userService: UserService,
    private route: ActivatedRoute, private orderService: OrderService, private router: Router,
    private dialog: MatDialog, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('orderId'));
      if (this.id) {
        // api call to get doctor by user id
        this.orderService.getOrderById(Number(this.id)).subscribe({
          next: ((response: Order) => {
            this.setOrderValues(response);
          }),
          error: (err: HttpErrorResponse) => {
            this.utilService.error(err.error.message, 'ok');
          }
        });
      }
    });
  }

  setOrderValues(order: Order) {
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

    this.order = order;
    this.dataSource = [this.order];
    this.itemsDataSource = this.order?.orderItems;
  }

  viewPrescription(prescription: Prescription): void {
    this.dialog.open(PrescriptionComponent, {
      width: '25%',
      data: { prescription, edit: false },
    });
  }

  addReview(product: Product) {
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '25%',
      data: product
    });

    dialogRef?.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.reviewService.saveReview(result).subscribe({
        next: ((response: Review) => {
          this.utilService.success('review added', 'ok');
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'ok');
        }
      });
    });
  }

  updateOrder(item: OrderItem, status: string) {
    if (status === 'shipped') {
      const dialogRef = this.dialog.open(ShipmentDetailsComponent, {
        width: '25%',
        data: item,
      });

      dialogRef?.afterClosed().subscribe((result) => {
        if (!result) {
          return;
        }
        result.status = status;
        result.orderId = this.order?.id;
        this.updateStatus(result);
      });
    } else {
      item.status = status;
      item.orderId = this.order?.id;
      this.updateStatus(item);
    }
  }

  updateStatus(item: OrderItem) {
    this.orderService.updateStatus(item).subscribe({
      next: ((response: void) => {
        this.utilService.refreshPage(this.router, this.route);
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }
}
