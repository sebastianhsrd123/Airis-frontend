import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { INTERNAL_ROUTES } from '../routes/internal.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (localStorage.getItem("token") && localStorage.getItem("token") != "") return true;
    this.router.navigate([INTERNAL_ROUTES.ROUTE_LOGIN]);
    return false;
  }
  canLoad(): Observable<boolean> | boolean {
    if (localStorage.getItem("token") && localStorage.getItem("token") != "") return true;
    this.router.navigate([INTERNAL_ROUTES.ROUTE_LOGIN]);
    return false;
  }

}
