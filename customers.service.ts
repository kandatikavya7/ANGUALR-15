import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  saveCustomerData(data: any): Observable<any> {
    // Assuming data is an object representing customer details
    console.log(data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteCustomer(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  

  getCustomerById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateCustomerData(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  getCustomerOrders(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/orders`);
  }
}
