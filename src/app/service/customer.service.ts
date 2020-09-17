import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Customer } from '../model/Customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  Api = 'https://5f5f1cd5df620f00163e53c8.mockapi.io/api/customer';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.Api);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${this.Api}/${id}`);
  }

  updateById(id: number, customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.Api}/${id}`, customer);
  }

  deleteById(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this.Api}/${id}`);
  }

  addNew(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.Api, customer);
  }

}
