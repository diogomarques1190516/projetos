import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivateChild {

  constructor(public router: Router, private loginService: LoginService) { }

  canActivateChild(): boolean {
    if (!this.loginService.isLoggedIn && this.loginService.getLoggedIn() !== 1) {
      this.router.navigate(['frontpage']);
      return false;
    }
    return true;
  }
}
