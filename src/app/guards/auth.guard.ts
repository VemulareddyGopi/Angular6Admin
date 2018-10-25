import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         const url = state.url;
      if (this.authenticationService.isUserLoggedIn()) {
            return true;
        }

        // not logged in so redirect to login page with the return url
       this.authenticationService.setRedirectUrl(url);
        this.router.navigate([this.authenticationService.getLoginUrl()]);
        return false;
    }
}
