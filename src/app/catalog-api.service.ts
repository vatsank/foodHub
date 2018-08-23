import { RestaurantInfo } from './restaurant-info';
import { Catalog } from './catalog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  findAllRestaurants(): Observable<RestaurantInfo[]> {

    return this.http.get<RestaurantInfo[]>(this.baseURL + 'restaurant');
  }

  getOrderHistory(): Observable<OrderHistory[]> {


    return this.http.get<OrderHistory[]>(this.baseURL
                  + 'myorders');

  }

  addRestaurant(obj: RestaurantInfo): Observable<RestaurantInfo> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

//          let headers = new HttpHeaders();
// headers = headers.append('Authorization', 'Basic' + btoa('username:password'));
// headers = headers.append('Content-Type', 'application/json');

    return this.http.post<RestaurantInfo>
              (this.baseURL + 'restaurant',
                obj, {headers, withCredentials: true});

  }


  removeRestaurant(id: any): Observable<RestaurantInfo> {

          return this.http.delete<RestaurantInfo>
                (this.baseURL + 'restaurant/' + id);

    }

    updateRestaurant(obj: RestaurantInfo): Observable<RestaurantInfo> {

      const headers =
     new HttpHeaders().
         set('content-type', 'application/json');
   return this.http.put<RestaurantInfo>
                (this.baseURL + 'restaurant/' + obj.id, obj, {headers});
    }
}

