import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';
import { PlatformManagerService } from '@shared/services/platform-manager.service';

@Directive({
    selector: '[appImageSlider]',
    standalone: true,
})
export class ImageSliderDirective implements OnInit {
    @Input('appImageSlider') images: string[] = [];
    private observer: IntersectionObserver | null = null;
    private currentIndex: number = 0;
    private indicators!: HTMLElement;

    constructor(
        private el: ElementRef,
        public renderer: Renderer2,
        private platformManager: PlatformManagerService
    ) {
        if (platformManager.isBrowserPlatform()) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.preloadImages();
                        this.observer?.disconnect();
                    }
                });
            });
        }
    }

    ngOnInit(): void {
        if (this.platformManager.isBrowserPlatform()) {
            this.observer?.observe(this.el.nativeElement);
            this.createIndicators();
        }
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        if (this.images.length > 0) {
            const containerWidth = this.el.nativeElement.offsetWidth;
            const mouseX =
                event.clientX -
                this.el.nativeElement.getBoundingClientRect().left;
            const imageIndex = Math.floor(
                (mouseX / containerWidth) * this.images.length
            );
            if (imageIndex !== this.currentIndex) {
                this.currentIndex = imageIndex;
                if (this.currentIndex < 0) {
                    this.currentIndex = 0;
                } else if (this.currentIndex >= this.images.length) {
                    this.currentIndex = this.images.length - 1;
                }
            }
            this.setBackgroundImage(this.images[this.currentIndex]);
            this.updateIndicators(this.currentIndex);
        }
    }

    private preloadImages(): void {
        this.images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
        this.setBackgroundImage(this.images[0]);
        this.updateIndicators(0);
    }

    private setBackgroundImage(imageUrl: string): void {
        this.renderer.setStyle(
            this.el.nativeElement,
            'background-image',
            `url("${imageUrl}")`
        );
    }

    private createIndicators(): void {
        this.indicators = this.renderer.createElement('div');
        this.renderer.addClass(this.indicators, 'indicators');

        this.images.forEach((_, index) => {
            const indicator = this.renderer.createElement('div');
            this.renderer.addClass(indicator, 'indicator');
            if (index === 0) {
                this.renderer.addClass(indicator, 'active');
            }
            this.renderer.appendChild(this.indicators, indicator);
        });

        this.renderer.appendChild(
            this.el.nativeElement.parentNode,
            this.indicators
        );
    }

    private updateIndicators(activeIndex: number): void {
        const indicators = this.indicators.children;
        for (let i = 0; i < indicators.length; i++) {
            if (i === activeIndex) {
                this.renderer.addClass(indicators[i], 'active');
            } else {
                this.renderer.removeClass(indicators[i], 'active');
            }
        }
    }
}
