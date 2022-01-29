import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  getStock(){
    return this.http.get<any>(`https://jsonmock.hackerrank.com/api/stocks`)
  }

}
