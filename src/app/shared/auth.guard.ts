import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);

  if (
    route.url[0].path.includes('login') ||
    route.url[0].path.includes('signup')
  ) {
    let token = `${localStorage.getItem('token')}`;
    if (token && token != 'null') {
      _router.navigate(['/password-forget']);
      return false;
    } else {
      return true;
    }
  }

  let token = `${localStorage.getItem('token')}`;

  if (
    (token != null && token != 'null') ||
    route.url[0].path.includes('password-forget')
  ) {
    return true;
  } else {
    _router.navigate(['/login']);
    return true;
  }
};
