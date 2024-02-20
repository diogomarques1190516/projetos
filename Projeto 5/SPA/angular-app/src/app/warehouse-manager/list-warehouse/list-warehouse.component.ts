import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator"
import { Title } from '@angular/platform-browser';
import { Warehouse } from 'src/app/dto/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements OnInit {
  title = "List Warehouses"


  warehouses: Warehouse[];

  pageSlice: any;

  done = false;

  loading = true;

  constructor(private warehouseService: WarehouseService, private titleService: Title) {
    this.warehouses = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.warehouseService.getWarehouses().subscribe((warehouses: Warehouse[]) => {
      this.warehouses = warehouses;
      this.loading = false;
      this.done = true;
      this.pageSlice = this.warehouses.slice(0, 5)
    });
  }

  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.warehouses.length) {
      endIndex = this.warehouses.length;
    }
    this.pageSlice = this.warehouses.slice(startIndex, endIndex);
  }

}
