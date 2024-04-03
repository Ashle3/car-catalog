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
  filteredMakes = [];
  cardata = {};

  constructor(private carsService: CarsService){}
  ngOnInit(): void {
    this.carsService.getCars()
    .subscribe((data: any) => {
      this.cars = data['cars'];
      this.makes = data['allMakes'];
    })
    // this.carsService.getCarById()
    // .subscribe((cdata: {}) => {
    //   this.cardata = cdata;
    //   console.log(this.cardata);
    // })
  }

  onSelect(){
    let selectMake = (<HTMLSelectElement>document.getElementById("make"));
    // selectMake.addEventListener("change", (event) => {
    //   console.log(selectMake.value);
    // });
    console.log(selectMake.value);
  }

  // onSelectedMake() {
  //   let selected = document.getElementsByClassName("option");
  //   selected.addEventListener('click', () => {
  //     if (selected) {
  //       console.log(selected)
  //     }
  //   })
  // }

  sortedMakes(make: string) {
    //if cars.make === make selected {add make as parameter to filterCars function}
  }
  
}
