import { Component, inject } from '@angular/core';
import { transliterate } from 'transliteration'; // Імпортуємо функцію для транслітерації
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

// import {
//   AngularEditorModule,
//   AngularEditorConfig,
// } from '@kolkov/angular-editor';

import { QuillModule } from 'ngx-quill';
import { BlogsService } from '../../shared/services/blogs.service';

@Component({
  selector: 'app-admin-blogs',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    QuillModule,
  ],
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent {
  fb = inject(FormBuilder);
  blogForm!: FormGroup;
  blogsService = inject(BlogsService);
  blogs: any = [];

  editStatus = false;
  blogId!: string


  ngOnInit() {
    this.initBlogData();
    this.initBlogForm();

  }

  initBlogData() {
    this.blogsService.getBlogs().subscribe((data) => {
      console.log(data);
      this.blogs = data;
    });
  }

  initBlogForm() {
    this.blogForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      fullText: ['', Validators.required],
      date: [new Date(), Validators.required],
      imagePath: ['../assets/images/products/mat-demo.png', Validators.required],
      namePath: ['', Validators.required],
    });

    this.blogForm.get('name')?.valueChanges.subscribe((value) => {
      const namePath = transliterate(value).toLowerCase();
      this.blogForm.get('namePath')?.setValue(namePath);
    });
  }

  addBlog() {
    if(this.editStatus){
      this.blogsService.updateBlog(this.blogForm.value, this.blogId).subscribe(()=>{
        this.initBlogData();
        
      })
    } else {
      this.blogsService.addBlog(this.blogForm.value).subscribe((data) => {
        this.initBlogData();
        console.log(data);
      });

    }
    this.editStatus = false;
    this.blogForm.reset();
  }
  
  editBlog(blog: any) {
    this.blogForm.patchValue({
      name: blog.name,
      description: blog.description,
      fullText: blog.fullText,
      date: blog.date,
      imagePath: blog.imagePath,
      namePath: blog.namePath,
    });
    this.editStatus = true;
    this.blogId = blog.id;
    
  }


  deleteBlog(blog: any) {
    this.blogsService.deleteBlog(blog.id).subscribe(() => {
      this.initBlogData();
    });
  }


  

  
  
  
  
  
  
  
  
  
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  };
    
}
