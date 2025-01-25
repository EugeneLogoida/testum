import { Component, inject } from '@angular/core';
import { PRODUCTS } from '../../../../public/assets/products/products';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductsService } from '../../shared/services/products.service';
import { RouterLink } from '@angular/router';
import { CallUsComponent } from "../../components/call-us/call-us.component";

@Component({
    selector: 'app-products',
    imports: [ProductCardComponent,
    RouterLink, CallUsComponent],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products:any = [];

  productSercvice = inject(ProductsService);

  ngOnInit(): void {
    this.initProducts();
    
  }

  initProducts() {
    this.productSercvice.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    })
  }
  
}
