import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../../shared/services/blogs.service';
import { DatePipe } from '@angular/common';
import { CallUsComponent } from "../../../components/call-us/call-us.component";

@Component({
  selector: 'app-blog-info',
  imports: [DatePipe, CallUsComponent],
  templateUrl: './blog-info.component.html',
  styleUrl: './blog-info.component.scss',
})
export class BlogInfoComponent {
  blogService = inject(BlogsService);
  activatedRoute = inject(ActivatedRoute);
  currentBlog!: any;

  ngOnInit(): void {
    this.loadOne();
    console.log(this.currentBlog);
  }

  loadOne() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.blogService.getOneBlog(id).subscribe((data) => {
      this.currentBlog = data;
    });
  }
}
