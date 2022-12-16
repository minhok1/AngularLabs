import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'nw-list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css'],
})
export class ListOfOrdersComponent {
  @Input() orders: any;
}
