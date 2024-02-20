import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packaging } from '../dto/packaging';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {

  constructor(private http: HttpClient) { }

  url = environment.logisticsURL + "Packagings";

  /** GET packagings from the database */
  getPackagings(): Observable<[Packaging]> {
    return this.http.get<[Packaging]>(this.url);
  }

  /** POST: add a new packaging to the database */
  postPackaging(xPosition: number,
    yPosition: number,
    zPosition: number,
    licensePlate: string) {
    var uToPost = {
      xPosition: xPosition,
      yPosition: yPosition,
      zPosition: zPosition,
      licensePlate: licensePlate
    };
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(uToPost);

    console.log(body);

    return this.http.post<Packaging>(this.url, body, { 'headers': headers });

  }

}