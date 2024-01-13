// orders.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  customers = [
    {
      name: 'ram',
      orders: [
        { id: 1, product: 'biscuit', quantity: 2, price: 20 },
        { id: 2, product: 'ice cream', quantity: 1, price: 15 }
      ]
    },
    {
      name: 'krishna',
      orders: [
        { id: 3, product: 'cooldrink', quantity: 3, price: 30 },
        { id: 4, product: 'chips', quantity: 1, price: 25 }
      ]
    }
    // Add more customers as needed
  ];
}