import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})

export class CreateDeliveryComponent {
  title = "Create a Delivery"

  isSuccessfull = false;
  isFailure = false;
  loading = false;

  form: any = {
    deliveryId: null, deliveryDate: null, massOfDelivery: null, warehouseId: null, timeToPlaceDelivery: null, timeToPickUpDelivery: null
  };


  constructor(private deliveryService: DeliveryService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  submit(create: any) {

    const { deliveryId, deliveryDate, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery } = this.form;

    this.deliveryService.postDelivery(deliveryId, deliveryDate, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery).subscribe({
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
