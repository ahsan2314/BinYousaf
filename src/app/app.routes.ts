import {  Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TechnologyComponent } from './technology/technology.component';
import { StudioComponent } from './project/studio.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'binyousaf', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent }, // Route for About page
  { path: 'technology', component: TechnologyComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'contact', component: ContactusComponent },

];
