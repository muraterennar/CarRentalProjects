import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rentals } from 'src/app/models/rental/rentals';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentals-edit',
  templateUrl: './rentals-edit.component.html',
  styleUrls: ['./rentals-edit.component.css']
})
export class RentalsEditComponent implements OnInit {


  rentals: Rentals[];
  dataLoaded: boolean = false;

  constructor(
    private rentalService: RentalService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getRentals();
  }





  getRentals() {
    this.rentalService.getDetailAll().subscribe((response) => {
      this.rentals = response.data
    })
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
