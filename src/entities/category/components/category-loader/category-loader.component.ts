import { NgComponentOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ComponentRef,
    Type,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectionsPageComponent } from '@pages/directions-page/directions-page.component';
import { ProductsPageComponent } from '@pages/products-page/products-page.component';

@Component({
    selector: 'app-category-loader',
    standalone: true,
    imports: [NgComponentOutlet],
    templateUrl: './category-loader.component.html',
    styleUrl: './category-loader.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryLoaderComponent {
    component: Type<ProductsPageComponent | DirectionsPageComponent>;

    constructor(private route: ActivatedRoute) {
        const hasChild = this.route.snapshot.data['category'].hasChild;
        this.component = hasChild
            ? DirectionsPageComponent
            : ProductsPageComponent;
    }
}
