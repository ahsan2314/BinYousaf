import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    // Add any global providers here
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err => console.error(err));