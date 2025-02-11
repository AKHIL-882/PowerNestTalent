import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    { path : '', component : AboutUsComponent},
    { path : '**',redirectTo : '', pathMatch : 'full'}
  ];
