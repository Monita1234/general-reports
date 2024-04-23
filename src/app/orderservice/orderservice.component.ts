import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orderservice',
  templateUrl: './orderservice.component.html',
  styleUrls: ['./orderservice.component.scss']
})
export class OrderserviceComponent implements OnInit {

  currentDate: string;
  orderData: any [] = [];

  constructor(
    private readonly _orderservice: OrderService, 
    private http: HttpClient
    ) { 
    // this.currentDate = new Date().toISOString().substring(0, 10);
  }

  ngOnInit(): void {
    // Llama al método loadOrders() en el inicio del componente
    this.getListOrders();
  }


  getListOrders(): void {
    this._orderservice.getListOrders().subscribe({
      next: (data: any) => {
console.log(data)
this.orderData = data;
        if (data.content.length <= 0) { return; }
        // this.data = data
        // this.content = data.content
        // this.cargarData(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    })
  }

}
