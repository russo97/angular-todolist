import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginServiceService as LoginService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private loginService: LoginService, private router: Router) {}

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      let loggedIn = this.loginService.isAuthenticated();

      if (!loggedIn) {
        this.router.navigate(['']);
      }

      return loggedIn;
  }
  
}
