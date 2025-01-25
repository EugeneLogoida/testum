import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    url = 'http://localhost:3000/categories';
  
  
  
    constructor(private http: HttpClient) {  }
  
    getCategories() {
      return this.http.get(this.url)
    }
    getOneCategory(id: string) {
      return this.http.get(`${this.url}/${id}`);
    }
    addCategory(category: any) {
      return this.http.post(this.url, category);
    }
    deleteCategory(id: string) {
      return this.http.delete(`${this.url}/${id}`);
    }
    updateCategory(category: any, id: string) {
      return this.http.put(`${this.url}/${id}`, category);
    };
}
