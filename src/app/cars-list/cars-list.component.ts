import { Component } from '@angular/core';
import { CarsListService } from './cars-list.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {
  // car: string = '';
  // constructor(private carsList: CarsListService){}
  // fetchCars(): void {
  //   this.carsList.getCar().subscribe((data: any) => {
  //     this.car = data.car
  //   })
  // }
}
