import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { USERS_DATA } from '../mock-user-data';
import { UserData } from '../dto/user-data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  AdminIsLoggedIn = false
  isLoggedIn = this.loginService.isLoggedIn
  WarehouseManagerIsLoggedIn = false
  LogisticsManagerIsLoggedIn = false
  loggedIn: number
  loginFailed = false

  user1: any;
  userLogged: any
  loggedIn1: any;

  //userData = USERS_DATA

  userData: UserData[]

  constructor(private userService: UserService, private authService: SocialAuthService, private loginService: LoginService) { }


  ngOnInit(): void {

    this.userService.getUsers().subscribe((userData: UserData[]) => {
      this.userData = userData;
    });

    this.authService.authState.subscribe((user) => {
      this.user1 = user;
      this.loggedIn1 = (user != null);
      this.userLogged = this.userData.find(u => u.email === user.email)
      if (this.userLogged) {
        // The user is authenticated
        console.log(`Welcome, ${user.name}!`);
        this.loginFailed = false
        this.loggedIn = this.loginService.getLoggedIn()
        if (this.userLogged.roleid == 1) {
          this.loginService.setLoggedIn(1)
          this.AdminIsLoggedIn = true
          this.WarehouseManagerIsLoggedIn = false
          this.LogisticsManagerIsLoggedIn = false
          this.isLoggedIn = true
        } else
          if (this.userLogged.roleid == 2) {
            this.loginService.setLoggedIn(2)
            this.WarehouseManagerIsLoggedIn = true
            this.LogisticsManagerIsLoggedIn = false
            this.AdminIsLoggedIn = false
            this.isLoggedIn = true
          } else
            if (this.userLogged.roleid == 3) {
              this.loginService.setLoggedIn(3)
              this.WarehouseManagerIsLoggedIn = false
              this.LogisticsManagerIsLoggedIn = true
              this.AdminIsLoggedIn = false
              this.isLoggedIn = true
            }

      } else {
        this.loginFailed = true
      }
    })
  }

  logOut() {
    // Log the user out of the Angular application

    this.WarehouseManagerIsLoggedIn = false
    this.AdminIsLoggedIn = false
    this.LogisticsManagerIsLoggedIn = false
    this.isLoggedIn = false
    this.loginService.setLoggedIn(0)
  }


}
