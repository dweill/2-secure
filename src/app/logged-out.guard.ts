import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from './store.service';

export const loggedOutGuard: CanActivateFn = (route, state) => {
  const store: StoreService = inject(StoreService);
  const router: Router = inject(Router);
  if (store.username && store.password) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
