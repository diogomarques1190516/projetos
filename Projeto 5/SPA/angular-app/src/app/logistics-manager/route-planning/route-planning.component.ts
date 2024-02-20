import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Truck } from 'src/app/dto/truck';
import { PlanningService } from 'src/app/services/planning.service';
import { TruckService } from 'src/app/services/truck.service';
import { FormControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormsModule, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Planning } from 'src/app/dto/planning';
import { PageEvent } from '@angular/material/paginator';
import { CheckboxData } from 'src/app/helpers/checkbox-data';
import { RadioButtonData } from 'src/app/helpers/radiobutton-data';
import { Trip } from 'src/app/dto/trip';
import { ALGORITHMS } from 'src/app/helpers/algorithms-list-mock';
import { any } from 'cypress/types/bluebird';

@Component({
  selector: 'app-route-planning',
  templateUrl: './route-planning.component.html',
  styleUrls: ['./route-planning.component.css']
})
export class RoutePlanningComponent {

  title = "Get Route Planning"

  trucks: Truck[];

  licensePlate: string;
  tare: number;
  totalBattery: number;
  autonomy: number;
  loadCapacity: number;
  rechargeTime: number;

  loading = false

  trips: Array<Trip>

  time: any;

  getDone: boolean = false;

  showTruck: boolean = false;

  isSuccessfull = false;
  isFailure = false;

  pageSlice: any;

  form: any = {
    licensePlate: null, date: null, licensePlates: null
  };


  ordersData: CheckboxData[] = []

  radioSel: any;
  radioSelected: string;
  algorithmsList: RadioButtonData[] = ALGORITHMS;


  constructor(private formBuilder: FormBuilder, private truckService: TruckService, private planningService: PlanningService, private titleService: Title, private datePipe: DatePipe) {
    this.trucks = [];
    this.trips = [];
    this.algorithmsList = ALGORITHMS;
    this.radioSelected = ALGORITHMS[0].value;
    this.getSelectedRadioItem();
    this.form = this.formBuilder.group({
      orders: new FormArray([]),
      date: null,
      licensePlate: null
    });



  }
  private addCheckboxes() {
    this.ordersData.forEach(() => (this.form.controls.orders as FormArray).push(new FormControl(false)));
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.title)


    this.truckService.getTrucks().subscribe((trucks: Truck[]) => {
      this.trucks = trucks;
      this.ordersData = trucks.map((o, index) => {
        return new CheckboxData(index, o.licensePlate)
      })

      this.addCheckboxes();
    });
  }
  getSelectedRadioItem() {
    this.radioSel = ALGORITHMS.find(Item => Item.value === this.radioSelected);
  }

  onRadioItemChange(item: any) {
    this.getSelectedRadioItem();
  }


  submit(create: any) {

    /*const selectedOrderIds = this.form.value.orders
    .map((checked, i) => checked ? this.ordersData[i].id : null)
    .filter(v => v !== null);
  console.log(selectedOrderIds);
*/
    const { licensePlate, date, licensePlates } = this.form;
    console.log(licensePlate)
    console.log(date)
    console.log(licensePlates)
    const selectedTrucks = this.form.value.orders
      .map((v: any, i: number) => v ? this.ordersData[i].id : null)
      .filter((v: any) => v !== null)
      .map((id: number) => {
        return this.ordersData[id].name
      })

    console.log(selectedTrucks);
    console.log("FFFFFFFF")
    console.log(this.radioSelected)
    //const licensePlates:string[] = ["55-74-DF","NG-54-43"]
    this.planningService.getPlanning(this.radioSelected, selectedTrucks, this.datePipe.transform(date, "dd-MM-yyyy")).subscribe(
      (plannings: Planning) => {
        this.time = plannings.totalTime;
        this.trips = plannings.trips;
        this.pageSlice = this.trips.slice(0, 1)
        this.loading = false;
        this.isFailure = false;
        this.getDone = true;
      });
    console.log(this.trips);
  }

  div1Function() {
    this.getDone = false;
    this.isFailure = false;
    this.loading = true;
    setTimeout(() => {
      if (!this.getDone) {
        this.isFailure = true
      }

    }, 10000);
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

  onPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.trips.length) {
      endIndex = this.trips.length;
    }
    this.pageSlice = this.trips.slice(startIndex, endIndex);
  }

}
