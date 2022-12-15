import { Location } from './location';
import { Product } from './product';

export class OrderLine {
  quantity: number;
  productID: number;
  locationID: string;
  price: number;
  picked: boolean;
  product: Product;
  location: Location;
}
