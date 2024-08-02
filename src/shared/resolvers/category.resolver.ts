import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Category } from '@entities/category/model/category.model';
import { CategoryService } from '@shared/services/api/category.service';
import { throwError } from 'rxjs';

export const categoryResolver: ResolveFn<Category> = (route, state) => {
    const categorySlug = route.paramMap.get('categorySlug');
    if (!categorySlug) {
        return throwError(() => new Error('Category slug is null'));
    }
    //TODO переделать через стор
    return inject(CategoryService).getCategoryInfo(categorySlug);
};
