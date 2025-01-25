import { Component, inject } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { BlogModel } from '../../shared/models/blog.interface';
import { BlogCardComponent } from "../../components/blog-card/blog-card.component";
import { DatePipe } from '@angular/common';
import { CallUsComponent } from "../../components/call-us/call-us.component";

@Component({
    selector: 'app-blog',
    imports: [BlogCardComponent, CallUsComponent],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogsService = inject(BlogsService);
  blogs:any = []
  constructor() {
    this.blogsService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
    
  }
}
