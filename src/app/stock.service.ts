import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  getStock(){
    return this.http.get<any>(`https://jsonmock.hackerrank.com/api/stocks`)
  }

  getProducts(){
    return this.http.get<any> (`${environment.baseURL}/api/products`)
  }

}
