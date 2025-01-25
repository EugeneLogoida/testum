import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BlogModel } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  url = 'http://localhost:3000/blogs';



  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get(this.url);
  }
  getOneBlog(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }
  addBlog(blog: BlogModel) {
    return this.http.post(this.url, blog);
  }
  deleteBlog(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
  updateBlog(blog: BlogModel, id: string) {
    return this.http.put(`${this.url}/${id}`, blog);
  }
}
