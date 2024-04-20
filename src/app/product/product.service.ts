import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhot:3000'

  constructor(private http: HttpClient) { }

  // Crud Operations
  // reading
  // Read All
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
  }

  // // Read-One
  // getOne(): Observable<Product[]>{

  // }

  // Creating

  // Deleting
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/product/${id}`)
  }

}
