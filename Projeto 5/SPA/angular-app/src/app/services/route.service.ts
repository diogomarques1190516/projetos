import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '../dto/route';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  url = environment.logisticsURL + "Routes";

  /** GET routes from the database */
  getRoutes(): Observable<[Route]> {
    return this.http.get<[Route]>(this.url);
  }

  /** POST: add a new route to the database */
  postRoutes(distance: number,
    time: number,
    extraTime: number,
    energy: number,
    originId: string,
    destinationId: string,
    width: number) {
    var uToPost = {
      distance: distance,
      time: time,
      extraTime: extraTime,
      energy: energy,
      originId: originId,
      destinationId: destinationId,
      width: width
    };
    console.log("2")
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(uToPost);

    console.log(body);

    return this.http.post<Route>(this.url, body, { 'headers': headers });

  }

}