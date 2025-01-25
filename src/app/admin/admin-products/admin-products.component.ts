import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'app-admin-products',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss',
})
export class AdminProductsComponent {
  productsService = inject(ProductsService);
  categoriesService = inject(CategoriesService);
  products: any = [];
  categories: any = [];
  editStatus = false;
  productId!: number;

  fb = inject(FormBuilder);
  productForm!: FormGroup;

  ngOnInit(): void {
    this.initProductsData();
    this.initCategoriesData();
    this.initProductsForm();

  }
  initProductsData(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
      
    });
  }
  initCategoriesData(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
      if (this.categories.length) {
        this.productForm.patchValue({ category: this.categories[0] });
      }
    });
  }


  initProductsForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      price: [''],
      discount: ['0'],
      imagePath: ['../assets/images/products/mat-demo.png'],
      category: [null],
      type: [''],
      material: [''],
      height: [''],
      width: [''],
      profileSize: [''],
      gapSize: [''],
      colors: [''],
    });
  }

  addProduct(): void {
    if(this.editStatus){
      this.productsService.updateProduct(this.productForm.value, this.productId).subscribe(()=>{

        this.initCategoriesData();
        this.initProductsData();
        this.initProductsForm();
      })
    } else{
      
      this.productsService.addProduct(this.productForm.value).subscribe(() => {

        this.initCategoriesData();
        this.initProductsData();
        this.initProductsForm();
      });
    }
    
  }

  editProduct(product: any) {

    const matchedCategory = this.categories.find(
      (category: any) => category.id === product.category.id
    );

    this.productForm = this.fb.group({
      name: [product.name, [Validators.required, Validators.minLength(3)]],
      description: [product.description],
      price: [product.price],
      discount: [product.discount],
      imagePath: [product.imagePath],
      category: matchedCategory,
      type: [product.type],
      material: [product.material],
      height: [product.height],
      width: [product.width],
      profileSize: [product.profileSize],
      gapSize: [product.gapSize],
      colors: [product.colors],
    });
    console.log(this.productForm.value);
    
    this.editStatus = true;
    this.productId = product.id
  }
  deleteProduct(product: any) {
    this.productsService.deleteProduct(product.id).subscribe(() => {
      this.initProductsData();
    });
  }
}
