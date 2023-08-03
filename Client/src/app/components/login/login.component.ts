import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/auth/loginModel';
import { CustomerDetailModel } from 'src/app/models/customer/customerDetailModel';
import { CustomerModel } from 'src/app/models/customer/customerModel';
import { UserDetail } from 'src/app/models/user/UserDetail';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/localStorageService.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  dataLoaded: boolean = false;
  user: UserDetail;
  // users: UserDetail[];

  loginForm: FormGroup;
  customerDetail: CustomerDetailModel;
  customerDetails: CustomerDetailModel[];
  customer: CustomerModel;
  isAuth: boolean;

  email: UserDetail;



  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute, private location: Location, private customerService: CustomerService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();

    this.activatedRoute.params.subscribe((params) => {
      if (params['email']) {
        this.getUserDetailByEmail(params["email"]);
        // this.getCustomerByEmail(params['email']);
      }
    })

  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  // getUserDetail() {
  //   this.userService.getUserDetail().subscribe(u => {
  //     this.user = u.data;
  //     this.dataLoaded = true;
  //   });
  // }

  // getUserDetailByUserId(userId: number) {
  //   this.userService.getUserDetailByUserId(userId).subscribe((response) => {
  //     this.user = response.data
  //   })
  // }
  getUserDetailByEmail(email: string) {
    this.userService.getUserDetailByEmail(email).subscribe((response) => {
      this.user = response.data;
    })
  }

  // back() {
  //   this.location.back();
  // }

  // reload() {
  //   window.location.reload();
  // }

  login() {
    if (this.loginForm.invalid) {
      return this.toastrService.warning("", "Hata.");
    }

    let loginModel = Object.assign({}, this.loginForm.value);
    this.authService.login(loginModel).subscribe((response) => {
      this.getCustomersByEmail(loginModel.email);
      this.getCustomerByEmail(loginModel.email);
      this.localStorageService.addItem("token", response.data.token);
      this.localStorageService.addItem("user", loginModel.email);
      this.toastrService.success(response.message);
      window.location.reload();
      this.router.navigate(['/AnaSayfa/' + this.email]);
    })

    return true;
  }

  getCustomersByEmail(email: string) {
    this.customerService.getCustomersByEmail(email).subscribe((response) => {
      this.customerDetails = response.data;
      // console.log(response.data.firstName);
    })
  }

  getCustomerByEmail(email: string) {
    this.customerService.getCustomerByEmail(email).subscribe((response) => {
      this.customerDetail = response.data;
      this.localStorageService.setCustomer(this.customerDetail);
    })
  }

  // login() {
  //   if (this.loginForm.valid) {
  //     // console.log(this.loginForm.get('email').value);
  //     let loginModel = Object.assign({}, this.loginForm.value)

  //     this.authService.login(loginModel).subscribe(response => {
  //       this.toastrService.info(response.message);
  //       localStorage.setItem("token", response.data.token);
  //       // this.router.navigate(["/AnaSayfa"]);
  //       this.back();
  //       this.reload();
  //       // this.dataLoaded = true;
  //     }, responseError => {
  //       console.log(responseError);
  //       if (responseError.error.ValidationErrors.length > 0) {
  //         for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
  //           this.toastrService.warning(responseError.error.ValidationErrors[i].ErrorMessage, "Bilgilerinizi Kontrol Ediniz !");
  //           localStorage.clear();
  //         }
  //       }
  //     });

  //   }
  //   else {
  //     this.toastrService.warning("Bilgileri Giriniz.");
  //   }
  // }
}
