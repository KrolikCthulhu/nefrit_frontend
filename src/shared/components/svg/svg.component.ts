import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-svg',
    standalone: true,
    imports: [],
    templateUrl: './svg.component.html',
    styleUrl: './svg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent implements OnInit {
    @Input() size: string | undefined;
    @Input() name: string = '';
    link: string = '';

    constructor() {}

    ngOnInit(): void {
        this.link = `/assets/svg/${this.name}.svg#${this.name}`;
    }
}
