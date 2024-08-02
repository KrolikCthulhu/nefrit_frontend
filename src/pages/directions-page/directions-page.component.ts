import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@entities/category/model/category.model';

@Component({
    selector: 'app-directions-page',
    standalone: true,
    templateUrl: './directions-page.component.html',
    styleUrl: './directions-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BannerComponent],
})
export class DirectionsPageComponent {
    category: Category;

    constructor(private route: ActivatedRoute) {
        this.category = this.route.snapshot.data['category'];
    }
}
