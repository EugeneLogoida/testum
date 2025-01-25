import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  imports: [
    CarouselModule,
    RouterLink
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() products?: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1800,
    navText: ['', ''],
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
  }
}
