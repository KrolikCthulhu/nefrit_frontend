import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionCardComponent } from '@entities/category/components/section-card/section-card.component';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { CategoriesListComponent } from '../../widgets/category/categories-list/categories-list.component';

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BannerComponent, SectionCardComponent, CategoriesListComponent],
})
export class MainPageComponent {}
