import { Routes } from '@angular/router';
import { FromComponent } from './components/from/from.component';
import { ToComponent } from './components/to/to.component';
import { canComponentDeactivateGuard } from './guard/route.guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'Home', component: LandingPageComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'from',
    component: FromComponent,
    canDeactivate: [canComponentDeactivateGuard],
  },

  { path: 'to', component: ToComponent },
];
