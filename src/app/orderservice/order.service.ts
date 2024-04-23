import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = 'http://192.168.23.3:50501/api'

  constructor(
    private readonly _http: HttpClient
  ) { }

  getListOrders(): Observable<any> {

    const url = `${this.apiUrl}/ordersService`;
    return this._http.get<any>(url,)
      .pipe(
        // map((resp: any) => [resp]),
        tap((resp: any) => { return resp }),
        catchError((err: any) => {
          throw err;
        })
      );
  }
}
