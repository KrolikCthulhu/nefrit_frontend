import * as CategoryActions from './category.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Category } from './category.model';
import { createReducer, on } from '@ngrx/store';

export interface CategoryState extends EntityState<Category> {
    loading: boolean;
    error: any;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: CategoryState = adapter.getInitialState({
    loading: false,
    error: null,
});

export const categoryReducer = createReducer(
    initialState,
    on(CategoryActions.loadCategories, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(CategoryActions.loadCategoriesSuccess, (state, { categories }) =>
        adapter.setAll(categories, { ...state, loading: false })
    ),
    on(CategoryActions.loadCategoriesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
