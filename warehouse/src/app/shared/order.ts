import { NumberValueAccessor } from '@angular/forms';
import { Customer } from './customer';
import { OrderLine } from './orderLine';

export class Order {
  id: number;
  customerID: number;
  status: number;
  orderDate: Date;
  shipVia: number;
  shipping: number;
  tax: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  lines: OrderLine[];
  customer: Customer;
}
