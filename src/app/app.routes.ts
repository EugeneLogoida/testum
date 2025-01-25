import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductInfoComponent } from './pages/products/product-info/product-info.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { OurObjectsComponent } from './pages/our-objects/our-objects.component';
import { AdminBlogsComponent } from './admin/admin-blogs/admin-blogs.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminPhotosComponent } from './admin/admin-photos/admin-photos.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';
import { BlogInfoComponent } from './pages/blog/blog-info/blog-info.component';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    // path: 'products/:category',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: BlogInfoComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'our-objects',
    component: OurObjectsComponent,
  },


  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'blogs',
        component: AdminBlogsComponent,
      },
      {
        path: 'categories',
        component: AdminCategoriesComponent,
      },
      {
        path: 'photos',
        component: AdminPhotosComponent,
      },
      {
        path: 'products',
        component: AdminProductsComponent,
      },
    ]
  },
];
