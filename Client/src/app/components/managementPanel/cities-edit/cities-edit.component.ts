import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-cities-edit',
  templateUrl: './cities-edit.component.html',
  styleUrls: ['./cities-edit.component.css']
})
export class CitiesEditComponent implements OnInit {

  cities: City[];
  dataLoaded: boolean = false;

  constructor(
    private router: Router,
    private cityService:CityService,
  ) { }

  ngOnInit(): void {
    this.getCities();
  }


  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }


  backToDashboard() {

    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['/admin']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }


  }

}
