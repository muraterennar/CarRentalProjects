import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentalDetailModel } from 'src/app/models/rental/rentalDetail';
import { RentalModel } from 'src/app/models/rental/rentalModel';
import { LocalStorageService } from 'src/app/services/localStorageService.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  dataLoaded: boolean = false;

  rental: RentalModel;
  rentalUser: RentalDetailModel;
  rentals: RentalModel[];
  carId: number;
  rentalForm: FormGroup;
  // currentDate: Date = new Date();

  newRentDate: Date = new Date();
  newReturnDate: Date = new Date();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private localStorageService: LocalStorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.carId = Number(this.activatedRoute.snapshot.paramMap.get('carId'));
    // localStorage.setItem("carId", String(this.activatedRoute.snapshot.paramMap.get('carId')));

    this.writer(this.carId);

    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getRentalsByCarId(params['carId']);
        this.getRentalByCarId(params['carId']);
        this.getRentalDetailByCar(params['carId']);
        // localStorage.setItem("carId", params['carId']);
        // this.carId = Number(params['carId']);
      }
    });

    this.rentalForm = this.formBuilder.group({
      carId: ['', Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }
  getRentalsByCarId(carId: number) {
    this.rentalService.getDetailsByCarId(carId).subscribe((response) => {
      this.rentals = response.data;
    });
  }

  getRentalByCarId(carId: number) {
    this.rentalService.getDetailByCarId(carId).subscribe((response) => {
      this.rental = response.data;
    });
  }

  getRentalDetailByCar(carId: number) {
    this.rentalService.getDetailByCar(carId).subscribe((response) => {
      this.rentalUser = response.data;
      console.log(this.rentalUser);
    });
  }

  addRental(rentDate: any, returnDate: any) {
    if (
      this.newRentDate < this.newReturnDate &&
      this.newReturnDate > this.newRentDate
    ) {
      if (
        this.newRentDate <= this.rental.rentDate ||
        this.newReturnDate <= this.rental.returnDate
      ) {
        this.toastrService.warning(
          'Seçili Tarih Aralığında Bir Rezervasyon Mevcut',
          'Başka Tarih Aralığı Seçin'
        );
      } else {
        if (this.rentalForm.valid) {
          let rentalModel = Object.assign({}, this.rentalForm.value);

          this.activatedRoute.params.subscribe({
            next: async (params) => {
              const getCarId: string = params['carId'];

              this.rentalService
                .rentalAdd({
                  carId: getCarId,
                  customerId: '57eb1fe8-cdfa-415c-15ff-08db93432200',
                  rentDate: rentDate,
                  returnDate: returnDate,
                })
                .subscribe(
                  (response) => {
                    this.toastrService.success(
                      response.message,
                      'Ödemeye Geçiliyor'
                    );
                  },
                  (errorResponse: any) => {
                    this.toastrService.warning(
                      errorResponse,
                      'Doğrulama Hatası'
                    );
                  }
                );
            },
          });
        } else {
          this.toastrService.warning(
            'Girilen Veriler Eksik',
            'Tekrar Kontrol Edin'
          );
        }
      }
    } else {
      this.toastrService.warning('Tarih Aralığıı Doğru Seçin', 'Uyarı');
    }
  }

  setPayment() {
    if (localStorage.getItem('rentDate')) {
      this.router.navigate(['AnaSayfa/Arabalar/payment/']);
    }
  }

  writer(value: any) {
    return console.log(value);
  }

  goToPayment() {
    if (this.addRental) {
      this.router.navigate([
        'AnaSayfa/Arabalar/payment/' + Number(localStorage.getItem('carId')),
      ]);
    }
  }
}
