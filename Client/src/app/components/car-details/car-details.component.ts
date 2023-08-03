import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/car/carDetail';
import { RentalModel } from 'src/app/models/rental/rentalModel';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cars: CarDetail[] = []

  moreCars: CarDetail[];

  carImages: CarDetail[] = [];
  car: CarDetail;

  dataLoaded: boolean = false;
  rentalLoaded: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private formBuilder: FormBuilder,
    private rentalService: RentalService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
        this.getCarImageByCarId(params['carId']);
      }
    })

    this.getCars();

    FullScrenImage();
  }

  getCars() {
    this.carService.getCarDetail().subscribe((response) => {
      this.moreCars = response.data
      this.dataLoaded = true
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((respone) => {
      this.cars = respone.data;
      this.dataLoaded = true;
    });
  }

  getCarImageByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carImages = response.data
      this.dataLoaded = true
    });
  }

  getImagePath(imagePath: string) {
    return this.carService.getCarImage(imagePath);
  }

  getImagePathByCarId(carId: number) {
    if (this.carService.getCarImageByCarId(carId)) {
      return this.carService.getCarImageByImagePath(this.car.imagePath);
    }

    return console.log("Resim Hatası")
  }

  getRouter(carId: number) {
    return this.router.navigate(["/AnaSayfa/Arabalar/" + carId]);
  }

  goToRental(carId:number) {
    this.router.navigate(['Arabalar/rental/' + carId]);
    // this.rentalLoaded = true;
  }

  reload() {
    window.location.reload();
  }

}

function FullScrenImage() {
  document.querySelectorAll(".image-hidden img").forEach((image: any) => {
    image.onclick = () => {
      var poup: any = document.querySelector(".poup-img");
      poup.style.display = "block";

      var poupImage: any = document.querySelector(".poup-img img");
      poupImage.src = image.getAttribute("src");
    };
  });

  var poupSpan: any = document.querySelector(".poup-img span");
  poupSpan.onclick = () => {
    var selector: any = document.querySelector(".poup-img");
    selector.style.display = "none";
  };

  var poupSpan: any = document.querySelector(".poup-img");
  poupSpan.onclick = () => {
    var selector: any = document.querySelector(".poup-img");
    selector.style.display = "none";
  };
}
