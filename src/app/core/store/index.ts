import { CategoryEffects } from '@entities/category/model/category.effects';
import { ActionReducerMap } from '@ngrx/store';
import * as Category from '@entities/category/model/category.reducer';

export interface AppState {
    categories: Category.CategoryState;
}

export const appReducers: ActionReducerMap<AppState> = {
    categories: Category.categoryReducer,
};

export const appEffects = [CategoryEffects];
