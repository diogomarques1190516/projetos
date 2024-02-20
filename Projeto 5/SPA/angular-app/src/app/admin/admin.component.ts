import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  title = "System Administrator"

  constructor(private loginService: LoginService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.setLoggedIn(1)
  }

  setLoggedIn(id: number) {
    this.loginService.loggedIn = id;
  }
}
