import { Component, OnInit } from '@angular/core';

import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  providers: [CarsService]
})
export class CarsComponent implements OnInit{
  cars = [];
  makes = [];

  constructor(private carsService: CarsService){}
  ngOnInit(): void {
    this.carsService.getCars()
    .subscribe((data: any) => {
      this.cars = data['cars'];
      this.makes = data['allMakes'];
    })
    // console.log(this.carsService.getHeader);
  }

  // ngOnInit(): void {
  //     this.carsService.getHeader()
  //       .subscribe((response: any) => {
  //         const header: string = Request.headers("Your-Token");
  //         // this.cars = data['cars'];
  //         console.log(header)
  //       })
  // }
}
