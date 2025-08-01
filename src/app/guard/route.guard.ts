import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate(): boolean;
}

export const canComponentDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (!component.canDeactivate()) {
    return confirm('Nincs elmentve minden. Mégis tovább megy');
  }
  return true;
};
