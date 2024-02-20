import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLogisticsService implements CanActivateChild {

  constructor(public router: Router, private loginService: LoginService) { }

  canActivateChild(): boolean {
    if (!this.loginService.isLoggedIn && this.loginService.getLoggedIn() !== 3) {
      this.router.navigate(['frontpage']);
      return false;
    }
    return true;
  }
}
