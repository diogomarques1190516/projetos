import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../dto/warehouse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  url = environment.warehouseURL + "Warehouses";

  /** GET trucks from the database */
  getWarehouses(): Observable<[Warehouse]> {
    return this.http.get<[Warehouse]>(this.url);
  }

  /** POST add a new warehouse to the database */
  postWarehouse(
    warehouseId: string,
    designation: string,
    address: string,
    lat: number,
    lng: number,
    altitude: number,
    radius: number,
    rotation: number,
    scale: number,
    model: string) {
    var uToPost = {
      Id: warehouseId,
      Designation: designation,
      Address: address,
      Lat: lat,
      Lng: lng,
      Altitude: altitude,
      Radius: radius,
      Rotation: rotation,
      Scale: scale,
      Model: model,
      IsMainWarehouse: false
    };
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(uToPost);

    console.log(body);

    return this.http.post<Warehouse>(this.url, body, { 'headers': headers });

  }

}
