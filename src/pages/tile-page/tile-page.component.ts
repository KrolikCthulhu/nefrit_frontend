import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PropertyComponent } from '../../shared/components/property/property.component';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { ImageSliderDirective } from '@shared/directives/image-slider.directive';
import { AddInCartComponent } from '../../features/cart/add-in-cart/add-in-cart.component';

@Component({
    selector: 'app-tile-page',
    standalone: true,
    templateUrl: './tile-page.component.html',
    styleUrl: './tile-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        PropertyComponent,
        AccordionComponent,
        ImageSliderDirective,
        AddInCartComponent,
    ],
})
export class TilePageComponent {
    properties = [
        { name: 'title', value: 'string' },
        { name: 'title', value: 'string' },
    ];

    images = [
        'https://i.imgur.com/pvyZlZQ.jpeg',
        'https://i.imgur.com/HkzOReT.jpeg',
    ];
}
