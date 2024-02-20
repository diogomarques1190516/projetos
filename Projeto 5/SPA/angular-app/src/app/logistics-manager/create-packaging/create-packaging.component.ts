import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Truck } from 'src/app/dto/truck';
import { PackagingService } from 'src/app/services/packaging.service';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-create-packaging',
  templateUrl: './create-packaging.component.html',
  styleUrls: ['./create-packaging.component.css']
})
export class CreatePackagingComponent implements OnInit {
  title = "Create a Packaging"


  trucks: Truck[];

  licensePlate: string;
  tare: number;
  totalBattery: number;
  autonomy: number;
  loadCapacity: number;
  rechargeTime: number;

  showTruck: boolean = false;

  loading = false;

  regex = "([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})"

  isSuccessfull = false;
  isFailure = false;

  form: any = {
    xPosition: null, yPosition: null, zPosition: null, licensePlate: null
  };


  constructor(private packagingService: PackagingService, private titleService: Title, private truckService: TruckService) {
    this.trucks = [];
  }

  ngOnInit(): void {

    this.titleService.setTitle(this.title)

    this.truckService.getTrucks().subscribe((trucks: Truck[]) => {
      this.trucks = trucks;
    });

  }



  submit(create: any) {

    const { xPosition, yPosition, zPosition, licensePlate } = this.form;

    this.packagingService.postPackaging(xPosition, yPosition, zPosition, licensePlate).subscribe({
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

  getTruck() {

    const { licensePlate } = this.form;

    this.truckService.getTruckByLicensePlate(licensePlate).subscribe((truck: Truck) => {
      this.licensePlate = truck.licensePlate;
      this.tare = truck.tare;
      this.totalBattery = truck.totalBatteryCapacity;
      this.autonomy = truck.autonomyWithMaxLoad;
      this.loadCapacity = truck.loadCapacity;
      this.rechargeTime = truck.rechargeTime;
    });

    this.showTruck = true;
  }

  div1Function() {
    this.isFailure = false;
    this.isSuccessfull = false;
    this.loading = true;
  }

}