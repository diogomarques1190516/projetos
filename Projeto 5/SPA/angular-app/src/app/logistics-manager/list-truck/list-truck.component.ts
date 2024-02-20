import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator"
import { Title } from '@angular/platform-browser';
import { Truck } from 'src/app/dto/truck';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-list-truck',
  templateUrl: './list-truck.component.html',
  styleUrls: ['./list-truck.component.css']
})
export class ListTruckComponent implements OnInit {
  title = "List Trucks"

  trucks: Truck[];

  pageSlice: any;

  loading = true

  done = false

  constructor(private truckService: TruckService, private titleService: Title) {
    this.trucks = [];

  }


  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.truckService.getTrucks().subscribe((trucks: Truck[]) => {
      this.trucks = trucks;
      this.loading = false;
      this.done = true;
      this.pageSlice = this.trucks.slice(0, 5)

    });


  }



  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.trucks.length) {
      endIndex = this.trucks.length;
    }
    this.pageSlice = this.trucks.slice(startIndex, endIndex);
  }


}
