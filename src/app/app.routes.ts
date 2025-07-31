import { Routes } from '@angular/router';
import { FromComponent } from './components/from/from.component';
import { ToComponent } from './components/to/to.component';
import { routeGuard } from './guard/route.guard';

export const routes: Routes = [
  { path: 'from', component: FromComponent, canDeactivate: [routeGuard] },
  { path: '', redirectTo: 'from', pathMatch: 'full' },

  { path: 'to', component: ToComponent },
];
