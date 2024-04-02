import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../cars.model';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css'
})
export class CarItemComponent{
  // car;

  // constructor(private carsService: CarsService){}
  // ngOnInit(): void {
  //   this.carsService.getCarById()
  //   .subscribe((data: any) => {
  //     this.car = data['car'];
  //   })
  //   console.log(this.car);
  // }
}
