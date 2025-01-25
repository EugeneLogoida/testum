import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    url = 'http://localhost:3000/products';
  
  
  
    constructor(private http: HttpClient) {  }
  
    getProducts() {
      return this.http.get(this.url)
    }
    getOneProduct(id: string) {
      return this.http.get(`${this.url}/${id}`);
    }
    addProduct(product: any) {
      return this.http.post(this.url, product);
    }
    deleteProduct(id: string) {
      return this.http.delete(`${this.url}/${id}`);
    }
    updateProduct(product: any, id:number) {
      return this.http.put(`${this.url}/${id}`, product);
    };
}
