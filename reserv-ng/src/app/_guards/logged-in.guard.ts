import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "../_services/login.service";
import { Router} from "@angular/router";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var isLoggedIn = this.loginService.isLoggedIn();
    console.log('canActivate', isLoggedIn);
    if (!isLoggedIn){
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    }
    return isLoggedIn;

  }

}
