import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
      return this.http.get("https://exam.razoyo.com/api/cars", {headers: { Accept: 'application/json'}});
    } 

  filterCars(carMake: string): Observable<any> {
    const url = "https://exam.razoyo.com/api/cars";
    let queryParams = new HttpParams();
    queryParams = queryParams.append("make", carMake);
    return this.http.get(url, {params: queryParams});
  }

  getToken(){
    this.http.get('https://exam.razoyo.com/api/cars', {observe: 'response'})
    .subscribe(resp => {
      return resp.headers.get('Your-Token');
    })
  }

  getCarById(id: string, token: any){
    const url = 'https://exam.razoyo.com/api/cars/' + id;
    const header = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, {headers: header});
  }
}
