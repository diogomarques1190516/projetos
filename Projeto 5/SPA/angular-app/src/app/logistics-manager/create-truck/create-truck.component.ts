import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TruckService } from 'src/app/services/truck.service';
@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})
export class CreateTruckComponent implements OnInit {
  title = "Create a Truck"

  regex = "([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})"

  isSuccessfull = false;
  isFailure = false;
  loading = false;

  form: any = {
    licensePlate: null, tare: null, totalBatteryCapacity: null, rechargeTime: null, autonomyWithMaxLoad: null, loadCapacity: null
  };


  constructor(private truckService: TruckService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  submit(create: any) {

    const { licensePlate, tare, totalBatteryCapacity, rechargeTime, autonomyWithMaxLoad, loadCapacity } = this.form;

    this.truckService.postTruck(licensePlate, tare, totalBatteryCapacity, rechargeTime, autonomyWithMaxLoad, loadCapacity).subscribe({
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

