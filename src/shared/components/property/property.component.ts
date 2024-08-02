import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-property',
    standalone: true,
    imports: [],
    templateUrl: './property.component.html',
    styleUrl: './property.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyComponent {
    @Input() propertyName: string = '';
    @Input() propertyValue: string = '';
}
