import { Component } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
})
export class ReceiveProductComponent {
  showForm = false;
  trackingNumber: string;
  productID: string;
  quantity: number;
  public receiveProducts: any[] = [];

  saveTrackingNumber() {
    this.showForm = true;
    console.log(this.trackingNumber);
  }

  receiveProduct(productID: string, quantity: number) {
    this.receiveProducts.push({ productID: productID, quantity: quantity });
  }

  finishedReceiving() {
    console.log();
  }
}
