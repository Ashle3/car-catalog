import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Car } from './cars.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url = "https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars";

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.url, {headers: { Accept: 'application/json'}});
  }

  //get function
  // getCars(): Car[]{
  //   this.http
  //     .get('https://dev-test-frontend-werpwe2p3q-uc.a.run.app')
  //     .subscribe(
  //       (cars: Car[]) => {
  //         this.cars = cars;
  //       });
  //       return this.cars.slice();
  // } 


}
