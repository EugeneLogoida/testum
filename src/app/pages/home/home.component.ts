import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faShippingFast, faHandHoldingDollar, faGift, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PRODUCTS } from '../../../../public/assets/products/products';

const GALLERY = [
  '../assets/images/gallery/gallery1.jpg',
  '../assets/images/gallery/gallery2.jpg',
  '../assets/images/gallery/gallery3.jpg',
  '../assets/images/gallery/gallery4.jpg',
  '../assets/images/gallery/gallery5.jpg',
  '../assets/images/gallery/gallery6.jpg'
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CarouselModule,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  faShippingFast=faShippingFast;
  faHandHoldingDollar=faHandHoldingDollar;
  faGift=faGift; 
  faScrewdriverWrench = faScrewdriverWrench;

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




  products = PRODUCTS;
  galleryImages = GALLERY;

}
