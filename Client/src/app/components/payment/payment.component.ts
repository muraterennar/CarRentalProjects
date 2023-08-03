import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { RentalModel } from 'src/app/models/rental/rentalModel';
import { CarService } from 'src/app/services/car.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { LocalStorageService } from 'src/app/services/localStorageService.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rental: RentalModel;
  carId: number;
  currentDate: Date = new Date;

  paymentSuccess: boolean = false;
  rememberCard: boolean;

  creditCard: CreditCard;
  creditCardFrom: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private creditCardService: CreditCardService,
  ) { }

  ngOnInit(): void {

    this.createCreditCardForm();

    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCreditCards();
      }
    })
  }

  getCreditCards() {
    this.creditCardService.getCreditCardByCustomer(Number(this.localStorageService.getItem('customer'))).subscribe((response) => {
      this.creditCard = response.data;
    }, error => {
      return false;
    });
  }


  createCreditCardForm() {
    this.creditCardFrom = this.formBuilder.group({
      customerId: [localStorage.getItem('customer'), Validators.required],
      nameOfTheCardHolder: ["", Validators.required],
      cardNumber: ["", Validators.required],
      cvv: ["", Validators.required],
      expirationMonth: ["", Validators.required],
      expirationYear: ["", Validators.required]
    });
  }
  


  // postRentAndPay(creditCard: CreditCard) {

  //   if (creditCard.nameOfTheCardHolder.length > 5 && creditCard.cvv.length == 4 && creditCard.cardNumber.length == 16 && creditCard.expirationMonth >= 1 && creditCard.expirationYear >= 2022) {
  //     console.log(this.rememberCard);
  //     if (this.rememberCard) {
  //       console.log(this.rememberCard);
  //       this.creditCardService.paymentByCardAdded(creditCard).subscribe((response) => {
  //         console.log(response);
  //         this.toastrService.success(response.message, "Ödeme Yapıldı");
  //       })

  //       this.paymentSuccess = true;
  //     }

  //     else if (!this.rememberCard) {
  //       console.log(this.rememberCard);
  //       this.creditCardService.paymentByCard().subscribe((response2) => {
  //         console.log(response2);
  //         this.toastrService.success(response2.message, "Ödeme Yapıldı");
  //       })

  //       this.paymentSuccess = true;
  //     }
  //   }
  //   else {
  //     this.toastrService.warning("Lütfen Bilgileri Doğru Girin !");
  //   }
  // }


  payment() {

    if (this.creditCardFrom.valid) {
      let cardModel = Object.assign({}, this.creditCardFrom.value);
      if (localStorage.getItem('isChecked') == "true") {
        console.log("Kart Kaydedildi");
        console.log(cardModel);
        this.creditCardService.paymentByCardAdded(cardModel).subscribe((response) => {
          this.toastrService.success(response.message, "Ödeme Yapıldı");
          // localStorage.setItem("carModel", cardModel);
          this.router.navigate(['AnaSayfa']);
        }, (responseError) => {
          this.toastrService.warning(responseError.error.Errors, "Doğrulama Hatası");
        });
      }
      else if (localStorage.getItem('isChecked') == "false") {
        console.log("Kart Kaydedilmedi");
        this.creditCardService.payment(cardModel).subscribe((response) => {
          this.toastrService.success(response.message, "Ödeme Yapıldı");
          localStorage.setItem("carModel", cardModel);
          this.router.navigate(['AnaSayfa']);
        });
      }

    }
    else {
      this.toastrService.warning("Kart Bilgilerinin Doğru Giriniz", "Tekrar Deneyin");
    }

  }

  getRentDate() {
    return localStorage.getItem('rentDate');
  }

  getReturnDate() {
    return localStorage.getItem('returnDate');
  }

  onChecked(event: Event) {
    const isChecked = (<HTMLInputElement>event.target).checked;
    if (isChecked == true) {
      localStorage.setItem("isChecked", String(true));
    }
    else {
      localStorage.setItem("isChecked", String(false));
    }
  }

}
