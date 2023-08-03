import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NewslatterComponent } from './components/newslatter/newslatter.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AdminPanelComponent } from './components/managementPanel/admin-panel/admin-panel.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarProfileComponent } from './components/navbar-profile/navbar-profile.component';
import { CarsEditComponent } from './components/managementPanel/cars-edit/cars-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NullWithDefaultPipe } from './pipe/null-with-default.pipe';
import { RentalComponent } from './components/rental/rental.component';
import { BrandsEditComponent } from './components/managementPanel/brands-edit/brands-edit.component';
import { RentalsEditComponent } from './components/managementPanel/rentals-edit/rentals-edit.component';
import { UsersEditComponent } from './components/managementPanel/users-edit/users-edit.component';
import { CustomerEditComponent } from './components/managementPanel/customer-edit/customer-edit.component';
import { ColorsEditComponent } from './components/managementPanel/colors-edit/colors-edit.component';
import { CitiesEditComponent } from './components/managementPanel/cities-edit/cities-edit.component';
import { CreditCardsEditComponent } from './components/managementPanel/credit-cards-edit/credit-cards-edit.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    BrandComponent,
    CarComponent,
    CommentsComponent,
    NewslatterComponent,
    ContactComponent,
    LoginComponent,
    PaymentComponent,
    CarDetailsComponent,
    AdminPanelComponent,
    NavbarProfileComponent,
    CarsEditComponent,
    UserProfileComponent,
    NullWithDefaultPipe,
    RentalComponent,
    BrandsEditComponent,
    RentalsEditComponent,
    UsersEditComponent,
    CustomerEditComponent,
    ColorsEditComponent,
    CitiesEditComponent,
    CreditCardsEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-right',
      preventDuplicates: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: [
          'https://localhost:7268/api/',
          'https://localhost:7268',
          'https://carrental.muraterennar.net/api',
          'https://carrental.muraterennar.net',
          'https://localhost:4200',
        ],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: 'baseUrl',
      useValue: 'https://carrental.muraterennar.net/api/',
      multi: true,
    },
    {
      provide: 'baseUrl2',
      useValue: 'https://localhost:7268/api/',
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
