import { Catalog } from './catalog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogAPIService {

  baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Catalog[]> {

    return this.http.get<Catalog[]>(this.baseURL + 'icecream');
  }
}
