import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private http : HttpClient) { }

  getDetails(){
    return this.http.get<any>(`http://localhost:3000/employee`)
  }

  edit(details,editId){
    return this.http.put<any>(`http://localhost:3000/employee/${editId}`,details)
  }

  delete(deleteId){
    return this.http.delete<any>(`http://localhost:3000/employee/${deleteId}`)
  }

  post(details){
    return this.http.post<any>(`http://localhost:3000/employee`,details)
  }

  getEmpData(empId){
    return this.http.get<any>(`http://localhost:3000/employee/${empId}`)
  }

  getStock(){
    return this.http.get<any>(`https://jsonmock.hackerrank.com/api/stocks`)
  }

}
