import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgComponent } from '@shared/components/svg/svg.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [SvgComponent, RouterLink],
})
export class HeaderComponent {}
