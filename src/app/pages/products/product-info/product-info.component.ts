import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from "../../../components/carousel/carousel.component";
import { CallUsComponent } from "../../../components/call-us/call-us.component";

@Component({
  selector: 'app-product-info',
  imports: [
    CarouselModule,
    CarouselComponent,
    CallUsComponent
],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {
  productService = inject(ProductsService);
  activatedRoute = inject(ActivatedRoute);
  currentProduct!: any;
  allProducts!: any;

  ngOnInit(): void {
    this.loadOne();
    this.initAllProducts();
    console.log(this.currentProduct);
  }

  loadOne() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getOneProduct(id).subscribe((data) => {
      this.currentProduct = data;
    });
  }

  initAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data;
    });
  }

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
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
          items: 3
        },
        740: {
          items: 4
        },
        940: {
          items: 4
        }
      },
      nav: false,
    }
}
