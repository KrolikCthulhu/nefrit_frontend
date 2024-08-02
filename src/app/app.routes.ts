import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { categoryResolver } from '@shared/resolvers/category.resolver';
import { CategoryLoaderComponent } from '@entities/category/components/category-loader/category-loader.component';
import { TilePageComponent } from '@pages/tile-page/tile-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainPageComponent,
            },
            {
                path: 'catalog/:categorySlug',
                resolve: { category: categoryResolver },
                component: CategoryLoaderComponent,
            },
            {
                path: 'catalog/:categorySlug/:productSlug',
                component: TilePageComponent,
            },
        ],
    },
    { path: '**', redirectTo: '' },
];
