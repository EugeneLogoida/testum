import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'app-admin-categories',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-categories.component.html',
  styleUrl: './admin-categories.component.scss',
})
export class AdminCategoriesComponent {
  fb = inject(FormBuilder);
  categoryForm!: FormGroup;
  categoriesService = inject(CategoriesService);
  categories: any = [];

  ngOnInit(): void {
    this.initCategoriesData();

    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.categoriesService
        .addCategory(this.categoryForm.value)
        .subscribe(() => {
          this.initCategoriesData();
          console.log('Category added');
        });
      this.categoryForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  initCategoriesData(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  editCategory(category: any) {
    console.log(category);
  }
  deleteCategory(category: any) {
    this.categoriesService.deleteCategory(category.id).subscribe(() => {
      this.initCategoriesData();
    });
  }
}
