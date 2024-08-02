import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [NgClass],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
    @Input() title: string = '';
    @Input() isOpen: boolean = true;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
