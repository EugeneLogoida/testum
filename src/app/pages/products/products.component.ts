import { Component } from '@angular/core';
import { PRODUCTS } from '../../../../public/assets/products/products';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = PRODUCTS
}
