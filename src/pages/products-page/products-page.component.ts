import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Observable, from, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '@shared/services/api/product.service';
import { Product } from '@entities/product/model/product.model';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { SectionCardComponent } from '../../entities/category/components/section-card/section-card.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-products-page',
    standalone: true,
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ProductCardComponent,
        AsyncPipe,
        AccordionComponent,
        SectionCardComponent,
        RouterLink,
    ],
})
export class ProductsPageComponent {
    productsService = inject(ProductService);
    products$: Observable<Product[]> = this.productsService.getProductsBySlug();
}
