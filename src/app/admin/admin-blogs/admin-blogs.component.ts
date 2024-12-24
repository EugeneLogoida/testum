import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { transliterate } from 'transliteration';  // Імпортуємо функцію для транслітерації

import { QuillModule } from 'ngx-quill';



@Component({
  selector: 'app-admin-blogs',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    QuillModule
  ],
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent {
  fb = inject(FormBuilder);
  blogForm!: FormGroup;

  ngOnInit() {
    this.initBlogForm();
  }
  

  initBlogForm() {
    this.blogForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      fullText: ['', Validators.required],
      date: [new Date(), Validators.required],
      imagePath: ['', Validators.required],
      namePath: ['', Validators.required]
    });

    this.blogForm.get('name')?.valueChanges.subscribe(value => {
      const namePath = transliterate(value).toLowerCase(); 
      this.blogForm.get('namePath')?.setValue(namePath);  
    });
  }

  addBlog() {
    console.log(this.blogForm.value);
  }

  //quill editor
  blogContent: string = '';

  modules = {
    toolbar: [      
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['formula'], 
      ['image', 'code-block']
    ]
  };


  

}