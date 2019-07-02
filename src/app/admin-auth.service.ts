import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {
  allowedRole = 'admin';
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (route.queryParams.login === this.allowedRole) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
