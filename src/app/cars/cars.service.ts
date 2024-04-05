import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Car } from './cars.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get("https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars", {headers: { Accept: 'application/json'}});
  } 

  filterCars(carMake: string): Observable<any> {
    const url = "https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars";
    let queryParams = new HttpParams();
    queryParams = queryParams.append("make", carMake);
    return this.http.get(url, {params: queryParams});
  }


  getCarById(id: string): Observable<any>{
    const url = "https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars/" + id;
    return this.http.get("https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars/wj6qg7zpt09udm1m", 
      {headers: { Accept: 'application/json', Authorization: 'MWLRucmkZ9kUXGo6E37o3GPnJe4=' }})
  } 
}
