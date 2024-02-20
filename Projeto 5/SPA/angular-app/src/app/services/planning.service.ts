import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Planning } from '../dto/planning';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private http: HttpClient) { }

 // public url = 'http://localhost:5033/';
  public url = 'https://routeplanninglapr5.azurewebsites.net/';
  public dateDeliveriesUrl = '?dateDeliveries='
  public truckPlateUrl = '&truckPlates='


  /** GET planning from the database */
  getPlanning(algorithm:string,licensePlates: string[], date: string | null): Observable<Planning> {

    let theUrl = `${this.url}${algorithm}${this.dateDeliveriesUrl}${date}`;
    console.log(licensePlates)
    licensePlates.forEach((o)=>{
      console.log(o)
      console.log(this.truckPlateUrl)
      console.log(theUrl)
      theUrl+=`${this.truckPlateUrl}${o}`
    })
    console.log(theUrl)
    /* var uToGet = {
      licensePlate: licensePlate,
      date: date,
    };
    const body = JSON.stringify(uToGet);
    console.log(body) */

    return this.http.get<Planning>(theUrl);
  }
}
