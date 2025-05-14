import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};