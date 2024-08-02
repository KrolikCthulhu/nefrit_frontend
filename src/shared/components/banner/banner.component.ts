import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [NgIf],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
    @Input() imageUrl: string = '';
    @Input() text?: string;
    @Input() buttonText?: string;
    @Input() buttonUrl?: string;
}
