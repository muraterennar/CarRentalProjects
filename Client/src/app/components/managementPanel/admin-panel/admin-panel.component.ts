import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { BrandDetail } from 'src/app/models/brand/brandDetails';
import { CarDetail } from 'src/app/models/car/carDetail';
import { City } from 'src/app/models/city';
import { Color } from 'src/app/models/Color/color';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { CustomerDetailModel } from 'src/app/models/customer/customerDetailModel';
import { RentalDetailModel } from 'src/app/models/rental/rentalDetail';
import { RentalModel } from 'src/app/models/rental/rentalModel';
import { Rentals } from 'src/app/models/rental/rentals';
import { UserDetail } from 'src/app/models/user/UserDetail';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CityService } from 'src/app/services/city.service';
import { ColorService } from 'src/app/services/color.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/localStorageService.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  cars: CarDetail[];
  brands: Brand[];
  colors: Color[];
  cities: City[];
  rentals: Rentals[];
  users: UserDetail[];
  customers: CustomerDetailModel[];
  creditCards: CreditCard[];

  dataLoaded: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,

    private carService: CarService,
    private brandService: BrandService,
    private userService: UserService,
    private cityService: CityService,
    private rentalService: RentalService,
    private creditCardService: CreditCardService,
    private customerService: CustomerService,
    private colorService: ColorService,

  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getCars();
    this.getCities();
    this.getColors();
    this.getCreditCard();
    this.getCustomers();
    this.getRentals();
    this.getUsers();
  }

  getCars() {
    this.carService.getCarDetail().subscribe((response) => {
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

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }

  getRentals() {
    this.rentalService.getDetailAll().subscribe((response) => {
      this.rentals = response.data
    })
  }

  getUsers() {
    this.userService.getUserDetails().subscribe((response) => {
      this.users = response.data;
    })
  }

  getCustomers() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data;
    })
  }

  getCreditCard() {
    this.creditCardService.getAllCreditCards().subscribe((response) => {
      this.creditCards = response.data;
    })
  }

  getDataLoaded() {
    if (localStorage.getItem('dataLoaded') == 'false') {
      return true;
    }

    return false
  }
  
  getRouter() {
    if (localStorage.getItem('dataLoaded') == 'true') {
      return true;
    }

    return false
  }

  goToCars() {
    this.router.navigate(['/admin/carsedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded));
  }
  goToBrands() {
    this.router.navigate(['/admin/brandsedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }

  goToRentals() {
    this.router.navigate(['/admin/rentalsedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }

  goToUsers() {
    this.router.navigate(['/admin/usersedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }

  goToCustomers() {
    this.router.navigate(['/admin/customersedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }

  goToCities() {
    this.router.navigate(['/admin/citiesedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }

  goToColors() {
    this.router.navigate(['/admin/colorsedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }

  goToCreditCards() {
    this.router.navigate(['/admin/creditcardsedit']);
    this.dataLoaded = true;
    localStorage.setItem("dataLoaded", String(this.dataLoaded))
  }



  lockAdmin() {
    if (this.localStorageService.getItem('admin')) {
      this.localStorageService.removeItem('admin');
      this.router.navigate(['/AnaSayfa']).then(() => {
        window.location.reload();
      });
    }
    else {
      this.router.navigate(['AnaSayfa']);
      window.location.reload();
    }

  }

  backToDashboard() {
    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded = false))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }
  }

}
