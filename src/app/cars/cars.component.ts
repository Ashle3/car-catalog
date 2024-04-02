import { Component, OnInit } from '@angular/core';

import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{
  cars;

  constructor(private carsService: CarsService){}
  ngOnInit(): void {
    this.carsService.getCars()
    .subscribe((data: any) => {
      this.cars = data['cars'];
    })
  }
}
