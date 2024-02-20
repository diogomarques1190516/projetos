import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logistics-manager',
  templateUrl: './logistics-manager.component.html',
  styleUrls: ['./logistics-manager.component.css']
})
export class LogisticsManagerComponent implements OnInit {
  title = "Logistics Manager"

  constructor(private loginService: LoginService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.setLoggedIn(3)
  }

  setLoggedIn(id: number) {
    this.loginService.loggedIn = id;
  }


}