import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-warehouse-manager',
  templateUrl: './warehouse-manager.component.html',
  styleUrls: ['./warehouse-manager.component.css']
})

export class WarehouseManagerComponent implements OnInit {
  title = "Warehouse Manager"

  constructor(private loginService: LoginService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.setLoggedIn(2)
  }

  setLoggedIn(id: number) {
    this.loginService.loggedIn = id;
  }


}

