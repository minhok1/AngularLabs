import { Component } from '@angular/core';
import { Order } from '../shared/order';
import { OrderLine } from '../shared/orderLine';
import { Product } from '../shared/product';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
})
export class ShipOrderComponent {
  public order: Order;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.order = new Order();
    this.order.id = this._route.snapshot.params['orderID'];
    // this.order.id = 1;
    this.order.orderDate = new Date();
    this.order.shipVia = 1;
    this.order.shipping = 10;
    this.order.shipName = 'Ororo Monroe';
    this.order.shipAddress = '777 Placeholder Pl';
    this.order.shipCity = 'Birnin Zana';
    this.order.shipRegion = 'RG';
    this.order.shipCountry = 'Wakanda';
    this.order.shipPostalCode = '5T4N-L33';
    this.order.status = 1;
    this.order.lines = [];
    const line1 = new OrderLine();
    line1.locationID = '02B1C';
    line1.price = 30.0;
    line1.productID = 55;
    line1.quantity = 2;
    line1.picked = true;
    line1.product = new Product();
    line1.product.name = 'Oreos';
    line1.product.imageUrl = '/assets/images/productImages/34.jpg';
    const line2 = new OrderLine();
    line2.locationID = '05A3A';
    line2.price = 30.0;
    line2.productID = 45;
    line2.quantity = 7;
    line2.picked = false;
    line2.product = new Product();
    line2.product.name = 'Peanuts';
    line2.product.imageUrl = '/assets/images/productImages/67.jpg';
    this.order.lines.push(line1);
    this.order.lines.push(line2);
  }

  getBestLocation(orderLine: OrderLine) {
    orderLine.locationID = '01A1A';
  }

  markAsShipped(order: Order) {
    order.status = 1;
  }

  markWithProblem(order: Order) {
    order.status = 2;
  }

  isReadyToShip(order: Order) {
    return order.lines.every((line) => line.picked);
  }
}
