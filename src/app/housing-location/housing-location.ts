import { Component, input } from '@angular/core';
import { HousinglocationInfo } from '../housinglocationinfo';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousinglocationInfo>();
}
