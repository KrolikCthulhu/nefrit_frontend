import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoryFacade } from '@entities/category/model/category.facade';
import { Category } from '@entities/category/model/category.model';
import { Observable } from 'rxjs';
import { SectionCardComponent } from '../../../entities/category/components/section-card/section-card.component';
import { RouterLink } from '@angular/router';
import { ColorPipe } from '@shared/pipes/color.pipe';

@Component({
    selector: 'app-categories-list',
    standalone: true,
    templateUrl: './categories-list.component.html',
    styleUrl: './categories-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, SectionCardComponent, RouterLink, ColorPipe],
})
export class CategoriesListComponent {
    private readonly categoryFacade = inject(CategoryFacade);
    categories$: Observable<Category[]> = this.categoryFacade.categories$;

    constructor() {
        this.categoryFacade.loadCategories();
    }
}
