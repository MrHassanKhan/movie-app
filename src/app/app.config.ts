import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations} from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),
    provideAnimations(), 
    provideStore(),
    provideEffects([]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
