import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/dto/route';
import { PageEvent } from "@angular/material/paginator"
import { Title } from '@angular/platform-browser';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})

export class ListRouteComponent implements OnInit {
  title = "List Routes"

  routes: Route[];

  pageSlice: any;

  done = false;

  loading = true;

  constructor(private routeService: RouteService, private titleService: Title) {
    this.routes = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.routeService.getRoutes().subscribe((routes: Route[]) => {
      this.routes = routes;
      this.loading = false;
      this.done = true;
      this.pageSlice = this.routes.slice(0, 5)
    });


  }

  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.routes.length) {
      endIndex = this.routes.length;
    }
    this.pageSlice = this.routes.slice(startIndex, endIndex);
  }

}