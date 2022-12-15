import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';
import { ShipOrderComponent } from './shipping/ship-order.component';

const routes = [
  { path: '', component: DashboardComponent },
  { path: 'ship', component: OrdersToShipComponent },
  { path: 'receive', component: ReceiveProductComponent },
  { path: 'ship/:orderID', component: ShipOrderComponent },
  { path: 'inventory', component: InventoryComponent },
];

export const routing = RouterModule.forRoot(routes);
