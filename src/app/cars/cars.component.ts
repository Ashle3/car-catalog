import { Component, OnInit } from '@angular/core';

import { CarsService } from './cars.service';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  providers: [CarsService]
})



export class CarsComponent implements OnInit{
  cars = [];
  makes = [];
  makeName: string;
  filteredMakes = [];
  cardata = {};

  constructor(private carsService: CarsService,
              private http: HttpClient){}
  ngOnInit(): void {
    let selectMake = (<HTMLSelectElement>document.getElementById("make"));
    if (selectMake.value === "Any") {
      this.carsService.getCars()
      .subscribe((data: any) => {
        this.cars = data['cars'];
        this.makes = data['allMakes'];
      });
    } else {
      this.carsService.filterCars(selectMake.value)
      .subscribe((data: any) => {
        this.cars = data['cars'];
        this.makes = data['allMakes'];
      });
    }
    this.getToken();
  }

  onSelect(){
    let selectMake = (<HTMLSelectElement>document.getElementById("make"));
    if (selectMake.value === "Any") {
      this.carsService.getCars()
      .subscribe((data: any) => {
        this.cars = data['cars'];
        this.makes = data['allMakes'];
      });
    } else {
      this.carsService.filterCars(selectMake.value)
      .subscribe((data: any) => {
        this.cars = data['cars'];
        this.makes = data['allMakes'];
      });
    }
  }

  getToken() {
    // this.http.get<any>("https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars", {observe: 'response'})
    // .subscribe((resp: HttpResponse<any>)=> {
    //   console.log(resp.headers.get('your-token'));
    // })

    this.http.get("https://dev-test-frontend-werpwe2p3q-uc.a.run.app/cars", {observe: 'response'})
    .subscribe(response => {
      response.headers.keys().map( (key) => console.log(`${key}: ${response.headers.get(key)}`));

 });
  }
  
}
