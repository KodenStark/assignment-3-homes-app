import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  // housingLocationList: HousingLocationInfo[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    // setting housingLocationList to the data array in HousingService
    this.filteredLocationList = this.housingService.getAllHousingLocations();
  }

  filterResults(text: string) {
    // if (!text) {
    //   this.filteredLocationList = this.housingLocationList;
    //   return;
    // }
    this.filteredLocationList = this.filteredLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
