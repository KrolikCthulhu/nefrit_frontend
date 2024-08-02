import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-card',
    standalone: true,
    imports: [NgStyle],
    templateUrl: './section-card.component.html',
    styleUrl: './section-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCardComponent {
    @Input() title: string = '';
    @Input() imageUrl: string = '';
    @Input() imageSize: string = '25.3125rem';
    @Input() underlineColor: string = 'var(--primary-color)';
}
