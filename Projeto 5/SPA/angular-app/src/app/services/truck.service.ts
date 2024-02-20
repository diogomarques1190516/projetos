import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Truck } from '../dto/truck';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private http: HttpClient) { }

  url = environment.logisticsURL + "Trucks";

  /** GET trucks from the database */
  getTrucks(): Observable<[Truck]> {
    return this.http.get<[Truck]>(this.url);
  }

  /** GET truck by License Plate from the database */
  getTruckByLicensePlate(licensePlate: string): Observable<Truck> {
    const theUrl = `${this.url}/${licensePlate}`;
    return this.http.get<Truck>(theUrl);
  }

  /** POST: add a new truck to the database */
  postTruck(licensePlate: string,
    tare: number,
    loadCapacity: number,
    totalBatteryCapacity: number,
    autonomyWithMaxLoad: number,
    rechargeTime: number) {
    var uToPost = {
      licensePlate: licensePlate,
      tare: tare,
      loadCapacity: loadCapacity,
      totalBatteryCapacity: totalBatteryCapacity,
      autonomyWithMaxLoad: autonomyWithMaxLoad,
      rechargeTime: rechargeTime
    };
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(uToPost);

    console.log(body);

    return this.http.post<Truck>(this.url, body, { 'headers': headers });

  }



}

