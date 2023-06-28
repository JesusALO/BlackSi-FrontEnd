import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss'],
})
export class OrderlistComponent  implements OnInit {
  orders: any[] = [];

  constructor() { }

  ngOnInit() {
    this.orders = [
      { orderNumber: 'ABC123', selected: false },
      { orderNumber: 'DEF456', selected: false },
      { orderNumber: 'GHI789', selected: false }
    ];
  }

  startDelivery() {
    // Filter selected orders
    const selectedOrders = this.orders.filter(order => order.selected);
    
    // Perform start delivery action for selected orders
    selectedOrders.forEach(order => {
      // Perform the necessary actions for starting the delivery of the order
      console.log(`Starting delivery for order ${order.orderNumber}`);
    });

    // Clear the selection
    this.orders.forEach(order => (order.selected = false));
  }

}
