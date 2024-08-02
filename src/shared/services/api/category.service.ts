import { Injectable } from '@angular/core';
import { Category } from '@entities/category/model/category.model';
import { Observable, of, throwError } from 'rxjs';
import { categories } from './category-mock';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    constructor() {}

    getСategories(): Observable<Category[]> {
        return of(categories);
    }

    getCategoryInfo(slug: Category['slug']): Observable<Category> {
        const category = categories.find((category) => category.slug === slug);
        if (!category) {
            return throwError(
                () => new Error(`Category with slug ${slug} not found`)
            );
        }
        return of(category);
    }
}
