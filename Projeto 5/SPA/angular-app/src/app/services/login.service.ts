import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loggedIn = 0

  isLoggedIn = false

  setLoggedIn(id: number) {
    this.loggedIn = id;
    this.isLoggedIn = true
  }

  getLoggedIn() {
    return this.loggedIn
  }

}
