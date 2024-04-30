import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { INTERNAL_ROUTES } from '../routes/internal.routes';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements  CanActivate, CanLoad {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (localStorage.getItem("token") && localStorage.getItem("token") != ""){
      this.router.navigate([INTERNAL_ROUTES.ROUTE_MAIN]);
      return false;
    }
    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    if (localStorage.getItem("token") && localStorage.getItem("token") != ""){
      this.router.navigate([INTERNAL_ROUTES.ROUTE_MAIN]);
      return false;
    }
    return true;
  }
}
