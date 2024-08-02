import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CategoryActions from './category.actions';
import { mergeMap, map, catchError, of } from 'rxjs';
import { CategoryService } from '@shared/services/api/category.service';

@Injectable()
export class CategoryEffects {
    private actions$ = inject(Actions);
    private categoryService = inject(CategoryService);

    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.loadCategories),
            mergeMap(() =>
                this.categoryService.getСategories().pipe(
                    map((categories) =>
                        CategoryActions.loadCategoriesSuccess({ categories })
                    ),
                    catchError((error) =>
                        of(CategoryActions.loadCategoriesFailure({ error }))
                    )
                )
            )
        )
    );
}
