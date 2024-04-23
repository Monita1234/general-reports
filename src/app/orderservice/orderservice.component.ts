import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orderservice',
  templateUrl: './orderservice.component.html',
  styleUrls: ['./orderservice.component.scss']
})
export class OrderserviceComponent implements OnInit {

  currentDate: string;
  orderData: any = {};

  constructor(private http: HttpClient) { 
    this.currentDate = new Date().toISOString().substring(0, 10);
  }

  ngOnInit(): void {
    // Llama al método loadOrders() en el inicio del componente
    this.loadOrders();
  }

  showNotification(message: string, icon: 'success' | 'error' = 'success') {
    Swal.fire({
      title: message,
      icon: icon,
      timer: 4000,
      position: 'center',
      showConfirmButton: false
    });
  }

  async loadOrders() {
    try {
      // Realizar la solicitud HTTP para cargar los datos de las órdenes
      const url = 'http://192.168.23.3:50501/api/ordersService';
      const orders = await this.http.get(url).toPromise();
  
      // Actualizar los datos de las órdenes en la variable orderData
      this.orderData = orders;
  
      // Mostrar notificación de éxito
      this.showNotification('Datos de órdenes cargados correctamente', 'success');
  
      // Registro en la consola para depuración
      console.log('Datos de órdenes cargados:', orders);
    } catch (error) {
      // Manejar errores en caso de que falle la solicitud HTTP
      console.error('Error al cargar datos de la API:', error);
      this.showNotification('Error al cargar datos de la API', 'error');
    }
  }
}
