import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CategoryAll from './category.reducer';
import { CategoryState } from './category.reducer';

export const selectCategoryState =
    createFeatureSelector<CategoryAll.CategoryState>('categories');

export const {
    selectIds: selectCategoryIds,
    selectEntities: selectCategoryEntities,
    selectAll: selectAllCategories,
    selectTotal: selectTotalCategories,
} = CategoryAll.adapter.getSelectors(selectCategoryState);

export const selectLoading = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.loading
);
