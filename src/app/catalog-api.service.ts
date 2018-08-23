import { Catalog } from './catalog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from './order-history';

@Injectable({
  providedIn: 'root'
})
export class CatalogAPIService {

  baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Catalog[]> {

    return this.http.get<Catalog[]>(this.baseURL + 'icecream');
  }

  getOrderHistory(): Observable<OrderHistory[]> {

    return this.http.get<OrderHistory[]>(this.baseURL
                  + 'myorders');

  }
}
