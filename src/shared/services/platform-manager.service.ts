import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PlatformManagerService {
    isBrowser: boolean = false;

    constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

    public isBrowserPlatform(): boolean {
        return isPlatformBrowser(this.platformId);
    }
}
