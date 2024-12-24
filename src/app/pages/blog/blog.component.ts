import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs = [
    {
      id: 1, 
      name: 'Blog 1',
      description: 'This is blog 1',

    },
    {
      id: 2, 
      name: 'Blog 2',
      description: 'This is blog 2',
      
    },
    {
      id: 3, 
      name: 'Blog 3',
      description: 'This is blog 3',
      
    },
  ]
}
