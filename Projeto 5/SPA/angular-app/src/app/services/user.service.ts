import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock-users';
import { User } from '../dto/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserData } from '../dto/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = environment.logisticsURL + "User";

  roleid: any

  /** GET routes from the database */
  getUsers(): Observable<[UserData]> {
    return this.http.get<[UserData]>(this.url);
  }


  /** POST: add a new truck to the database */
  postUsers(firstName: string,
    lastName: string,
    email: string,
    telephoneNr: string,
    role: string) {

    if (role === 'System Administrator') {
      this.roleid = 1
    } else if (role === 'Warehouse Manager') {
      this.roleid = 2
    } else if (role === 'Logistics Manager') {
      this.roleid = 3
    }

    var uToPost = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephoneNr: telephoneNr,
      role: role,
      roleid: this.roleid
    };
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(uToPost);

    console.log(body);

    return this.http.post<UserData>(this.url, body, { 'headers': headers });

  }

  /* getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  } */

  getUser(id: number): Observable<User> {
    const user = USERS.find(h => h.id === id)!;
    return of(user);
  }
}
