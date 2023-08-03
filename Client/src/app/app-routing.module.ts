import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrandsEditComponent } from './components/managementPanel/brands-edit/brands-edit.component';
import { CarsEditComponent } from './components/managementPanel/cars-edit/cars-edit.component';
import { CitiesEditComponent } from './components/managementPanel/cities-edit/cities-edit.component';
import { ColorsEditComponent } from './components/managementPanel/colors-edit/colors-edit.component';
import { CreditCardsEditComponent } from './components/managementPanel/credit-cards-edit/credit-cards-edit.component';
import { CustomerEditComponent } from './components/managementPanel/customer-edit/customer-edit.component';
import { RentalsEditComponent } from './components/managementPanel/rentals-edit/rentals-edit.component';
import { UsersEditComponent } from './components/managementPanel/users-edit/users-edit.component';
import { NewslatterComponent } from './components/newslatter/newslatter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'AnaSayfa', component: HomeComponent },
  { path: 'AnaSayfa/:email', component: HomeComponent },

  // { path: 'admin', component: AdminPanelComponent },

  { path: 'admin/carsedit', component: CarsEditComponent },
  { path: 'admin/brandsedit', component: BrandsEditComponent },
  { path: 'admin/usersedit', component: UsersEditComponent },
  { path: 'admin/customersedit', component: CustomerEditComponent },
  { path: 'admin/rentalsedit', component: RentalsEditComponent },
  { path: 'admin/citiesedit', component: CitiesEditComponent },
  { path: 'admin/colorsedit', component: ColorsEditComponent },
  { path: 'admin/creditcardsedit', component: CreditCardsEditComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'AnaSayfa/register', component: RegisterComponent },

  { path: 'login', component: LoginComponent },
  { path: 'AnaSayfa/login', component: LoginComponent },

  { path: 'userProfile/:email', component: UserProfileComponent, canActivate: [LoginGuard] },
  { path: 'AnaSayfa/userProfile/:email', component: UserProfileComponent, canActivate: [LoginGuard] },


  { path: 'payment/:carId', component: PaymentComponent, canActivate: [LoginGuard] },
  { path: 'AnaSayfa/Arabalar/payment/:carId', component: PaymentComponent, canActivate: [LoginGuard] },

  { path: 'Arabalar/rental/:carId', component: RentalComponent, canActivate: [LoginGuard] },
  { path: 'AnaSayfa/Arabalar/rental/:carId', component: RentalComponent, canActivate: [LoginGuard] },


  { path: 'brands', component: BrandComponent },
  { path: 'home/brands', component: BrandComponent },
  { path: 'Markalar', component: BrandComponent },
  { path: 'home/Markalar', component: BrandComponent },
  { path: 'AnaSayfa/Markalar', component: BrandComponent },

  { path: 'cars', component: CarComponent },
  { path: 'Arabalar', component: CarComponent },
  { path: 'home/Arabalar', component: CarComponent },
  { path: 'AnaSayfa/Arabalar', component: CarComponent },

  // { path: 'comments', component: CommentsComponent },
  // { path: 'home/comments', component: CommentsComponent },

  { path: 'newslatter', component: NewslatterComponent },
  { path: 'AnaSayfa/newslatter', component: NewslatterComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'Iletisim', component: ContactComponent },
  { path: 'AnaSayfa/iletisim', component: ContactComponent },
  { path: 'AnaSayfa/contact', component: ContactComponent },

  { path: 'carDetails', component: CarDetailsComponent },
  { path: 'AnaSayfa/Arabalar/:carId', component: CarDetailsComponent },
  { path: 'home/brands/:carId', component: CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
