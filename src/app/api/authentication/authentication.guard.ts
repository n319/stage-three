import { Injectable } from './node_modules/@app/base/api/authentication/node_modules/@angular/cores/@angular/cores/@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from './node_modules/@app/base/api/authentication/node_modules/@angular/router@angular/router@angular/router';

import { Logger } from '../../../core/logger.serviceice';
import { AuthenticationService } from './authentication.service';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
