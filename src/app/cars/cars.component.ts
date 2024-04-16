import { Component, OnInit } from '@angular/core';

import { CarsService } from './cars.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  providers: [CarsService]
})



export class CarsComponent implements OnInit{
  cars = [];
  makes = [];
  token: any;
  carId: string;
  carData: any;

  constructor(private carsService: CarsService,
              private http: HttpClient){}
  ngOnInit(): void {
    this.carsService.getCars()
      .subscribe((data: any) => {
        this.cars = data['cars'];
        this.makes = data['makes'];
      });
    // this.http.get('https://exam.razoyo.com/api/cars', {observe: 'response'})
    // .subscribe(resp => {
    //   let yourtoken = resp.headers.get('Your-Token');
    //   // console.log(yourtoken);
    //   this.carsService.getCarById(this.carId, yourtoken).subscribe();
    // })
  }
  
  onSelect(){
    let selectMake = (<HTMLSelectElement>document.getElementById("make"));
    if (selectMake.value === "Any") {
      this.carsService.getCars()
      .subscribe((data: any) => {
        this.cars = data['cars'];
      });
    } else {
      this.carsService.filterCars(selectMake.value)
      .subscribe((data: any) => {
        this.cars = data['cars'];
      });
    }
  }

  // getToken(){
  //   this.http.get('https://exam.razoyo.com/api/cars', {observe: 'response'})
  //   .subscribe(resp => {
  //     // return resp.headers.get('Your-Token');
  //     let yourtoken = resp.headers.get('Your-Token');
  //     return yourtoken;
  //   })
  // }

 };


