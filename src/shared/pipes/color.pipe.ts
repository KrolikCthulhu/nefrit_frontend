import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'color',
    standalone: true,
})
export class ColorPipe implements PipeTransform {
    transform(index: number): string {
        const colors: string[] = [
            'var(--accent-1)',
            'var(--accent-2)',
            'var(--accent-3)',
            'var(--accent-4)',
        ];
        return colors[index % colors.length];
    }
}
