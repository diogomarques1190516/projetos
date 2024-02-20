import { Component, NgModule, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator"
import { Title } from '@angular/platform-browser';
import { Packaging } from 'src/app/dto/packaging';
import { OrderPipe } from 'src/app/order.pipe';
import { PackagingService } from 'src/app/services/packaging.service';

@Component({
  selector: 'app-list-packaging',
  templateUrl: './list-packaging.component.html',
  styleUrls: ['./list-packaging.component.css']
})

export class ListPackagingComponent implements OnInit {
  title = "List Packagings"

  selectedProperty: any
  searchTerm: any

  packagings: Packaging[];

  pageSlice: any;

  done = false;

  loading = true;

  constructor(private packagingService: PackagingService, private titleService: Title) {
    this.packagings = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)

    this.packagingService.getPackagings().subscribe((packagings: Packaging[]) => {
      this.packagings = packagings;
      this.loading = false;
      this.done = true;
      this.pageSlice = this.packagings.slice(0, 5)
    });


  }

  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.packagings.length) {
      endIndex = this.packagings.length;
    }
    this.pageSlice = this.packagings.slice(startIndex, endIndex);
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
  }

}