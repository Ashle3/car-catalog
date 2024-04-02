import { Component, OnInit } from '@angular/core';

import { Car } from '../cars.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent implements OnInit{
  cars: any;

  constructor(private carsService: CarsService){}

  ngOnInit(): void {
      this.cars = this.carsService.getCars();
  }
}
