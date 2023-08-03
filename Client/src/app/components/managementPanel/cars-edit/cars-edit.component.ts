import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { Color } from 'src/app/models/Color/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {

  dataLoaded: boolean = false;
  carsAddedLoaded: boolean = false;
  carsDeletedLoaded: boolean = false;
  cars: Car[];
  brands: Brand[];
  colors: Color[];

  carsAddedForm: FormGroup;
  carDeletedFrom: FormGroup;

  imagePath: string;
  carId: number;


  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private carService: CarService,
    private brandService: BrandService,
    private colorService:ColorService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();

    this.carAddedForm();
    this.carDeletedForm();
  }


  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  added() {
    this.carsAddedLoaded = true;
  }

  carsAddedCancel() {
    this.carsAddedLoaded = true;
    window.location.reload();
  }

  deleted() {
    this.carsDeletedLoaded = true;
  }

  deletedCancel() {
    this.carsDeletedLoaded = true;
    window.location.reload();
  }

  backToDashboard() {
    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }
  }



  carAddedForm() {
    this.carsAddedForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      descriptions: ["", Validators.required]
    });
  }
  carDeletedForm() {
    this.carDeletedFrom = this.formBuilder.group({
      id: ["", Validators.required],
    });
  }

  carAdd() {
    if (this.carsAddedForm.valid) {
      let carModel = Object.assign({}, this.carsAddedForm.value);
      this.carService.carAdd(carModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
        this.carsAddedLoaded = false;
        window.location.reload();

      }, (responseError) => {
        this.toastrService.warning(responseError.message, "Başarısız");
      });
    }
    else {
      this.toastrService.info("Verileri Eksiksiz Giriniz.");
    }
  }

  carDelete() {
    if (this.carDeletedFrom.valid) {
      let carModel = Object.assign({}, this.carDeletedFrom.value);
      this.carService.carDelete(carModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
        this.carsDeletedLoaded = false;
        window.location.reload();

      }, (responseError) => {
        this.toastrService.warning(responseError.message, "Başarısız");
      });
    }
    else {
      this.toastrService.info("Verileri Eksiksiz Giriniz.");
    }
  }
}
