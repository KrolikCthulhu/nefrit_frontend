import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageSliderDirective } from '@shared/directives/image-slider.directive';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [ImageSliderDirective],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    @Input() images: string[] = [];
    @Input() title: string = '';
    currentIndex: number = 0;
}
