import { Component } from '@angular/core';

const GALLERY = [
  '../assets/images/gallery/gallery1.jpg',
  '../assets/images/gallery/gallery2.jpg',
  '../assets/images/gallery/gallery3.jpg',
  '../assets/images/gallery/gallery4.jpg',
  '../assets/images/gallery/gallery5.jpg',
  '../assets/images/gallery/gallery6.jpg'
];

@Component({
  selector: 'app-our-objects',
  standalone: true,
  imports: [],
  templateUrl: './our-objects.component.html',
  styleUrl: './our-objects.component.scss'
})
export class OurObjectsComponent {
  gallery = GALLERY;
}
