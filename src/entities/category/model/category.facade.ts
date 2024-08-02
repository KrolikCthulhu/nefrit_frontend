import { Injectable, inject } from '@angular/core';
import { AppState } from '@app/core/store';
import { Store, select } from '@ngrx/store';
import { Category } from './category.model';
import { Observable } from 'rxjs';
import { selectAllCategories, selectLoading } from './category.selectors';
import { loadCategories } from './category.actions';

@Injectable({
    providedIn: 'root',
})
export class CategoryFacade {
    private readonly store = inject(Store<AppState>);

    categories$: Observable<Category[]> = this.store.pipe(
        select(selectAllCategories)
    );

    loading$: Observable<boolean> = this.store.pipe(select(selectLoading));

    loadCategories(): void {
        this.store.dispatch(loadCategories());
    }
}
