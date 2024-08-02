import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducers } from './core/store';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(),
        provideStore(),
        importProvidersFrom(
            EffectsModule.forRoot(appEffects),
            StoreModule.forRoot(appReducers),
            StoreDevtoolsModule.instrument({
                maxAge: 25,
                // logOnly: environment.production,
            })
        ),
    ],
};
