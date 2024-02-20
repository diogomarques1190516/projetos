import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent implements OnInit {
  title = "Create a Warehouse"

  isSuccessfull = false;
  isFailure = false;
  loading = false;

  form: any = {
    warehouseId: null, designation: null, address: null, latitude: null, longitude: null, altitude: null, radius: null, rotation: null, scale: null, model: null
  };


  constructor(private warehouseService: WarehouseService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  submit(create: any) {

    const { warehouseId, designation, address, latitude, longitude, altitude, radius, rotation, scale, warehouseModel } = this.form;

    this.warehouseService.postWarehouse(warehouseId, designation, address, latitude, longitude, altitude, radius, rotation, scale, warehouseModel).subscribe({
      next: data => {
        console.log(data);
        this.loading = false;
        this.isFailure = false;
        this.isSuccessfull = true;
      },
      error: err => {
        console.log("Error")
        this.loading = false;
        this.isSuccessfull = false;
        this.isFailure = true;
      }
    });
  }

  div1Function() {
    this.isFailure = false;
    this.isSuccessfull = false;
    this.loading = true;
  }

}

