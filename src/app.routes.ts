import { Routes } from '@angular/router';
import { HorizentalScrollingComponent } from './app/horizental-scrolling/horizental-scrolling.component';

export const routes: Routes = [
  { path: 'horizentalscrolling', component: HorizentalScrollingComponent },
  { path: '', redirectTo: 'horizentalscrolling', pathMatch: 'full' },
];
