import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delivery } from '../dto/delivery';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  url = environment.warehouseURL + "Deliveries";

  /** GET deliveries from the database */
  getDeliveries(): Observable<[Delivery]> {
    return this.http.get<[Delivery]>(this.url);
  }

  /** POST add a new delivery to the database */
  postDelivery(
    deliveryId: string,
    deliveryDate: string,
    massOfDelivery: number,
    warehouseId: string,
    timeToPlaceDelivery: number,
    timeToPickUpDelivery: number) {
    var uToPost = {
      Id: deliveryId,
      DeliveryDate: deliveryDate,
      MassOfDelivery: massOfDelivery,
      WarehouseId: warehouseId,
      TimeToPlaceDelivery: timeToPlaceDelivery,
      TimeToPickUpDelivery: timeToPickUpDelivery
    };
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(uToPost);

    console.log(body);

    return this.http.post<Delivery>(this.url, body, { 'headers': headers });

  }

}