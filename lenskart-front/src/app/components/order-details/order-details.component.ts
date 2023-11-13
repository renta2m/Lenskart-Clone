import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  dataSource?: any
  id?: number;
  order?: Order;
  displayedColumns: string[] = ['Name', 'Date', 'Price'];
  constructor(public utilService: UtilityService,
    private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

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
    this.order = order;
    this.dataSource = [this.order];  
  }

}
