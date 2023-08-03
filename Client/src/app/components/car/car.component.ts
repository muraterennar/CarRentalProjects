import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarService } from 'src/app/services/car.service';
import { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  carDetails: CarDetail[] = [];
  cars: CarDetail[] = [];
  dataLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService) { }

  ngOnInit(): void {
    SwipperFunction();
    this.getCarDetails();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
        this.getCarImageId(params['carId']);
      }
    })

  }

  getCarDetails() {
    this.carService.getCarDetail().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    });
  }

  getCarImagePath(imagePath: string) {
    return this.carService.getCarImage(imagePath);
  }

  getCarImageId(carId: number) {
    return this.carService.getCarImageByCarId(carId);
  }

}


function SwipperFunction() {
  var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}