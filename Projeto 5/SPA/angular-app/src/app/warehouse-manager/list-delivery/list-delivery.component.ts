import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator"
import { Title } from '@angular/platform-browser';
import { Delivery } from 'src/app/dto/delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.css']
})
export class ListDeliveryComponent implements OnInit {
  title = "List Deliveries"

  selectedProperty: any
  searchTerm: any

  deliveries: Delivery[];

  pageSlice: any;

  done = false;

  loading = true;

  constructor(private deliveryService: DeliveryService, private titleService: Title) {
    this.deliveries = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.deliveryService.getDeliveries().subscribe((deliveries: Delivery[]) => {
      this.deliveries = deliveries;
      this.loading = false;
      this.done = true;
      this.pageSlice = this.deliveries.slice(0, 5)
    });
  }

  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.deliveries.length) {
      endIndex = this.deliveries.length;
    }
    this.pageSlice = this.deliveries.slice(startIndex, endIndex);
  }

  selectedSortProperty: string = 'name';
  sortDirection: string = 'asc';

  sort(property: string) {
    if (this.selectedSortProperty === property) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.selectedSortProperty = property;
      this.sortDirection = 'asc';
    }
    console.log(this.selectedProperty)
    console.log(this.searchTerm)
  }

}
