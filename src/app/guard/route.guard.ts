import { CanDeactivateFn } from '@angular/router';
import { FromComponent } from '../components/from/from.component';

export interface CanComponentDeactivate {
  canDeactivate(): boolean;
}

export const routeGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (!component.canDeactivate()) {
    return confirm('Nincselmentve minden. Mégis tovább megy');
  }
  return true;
};
