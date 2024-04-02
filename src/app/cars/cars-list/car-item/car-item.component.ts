import { Component, Input } from '@angular/core';
import { Car } from '../../cars.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css'
})
export class CarItemComponent {
  @Input() car: Car;
}