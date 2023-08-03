import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localStorageService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoaded = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private toastrService: ToastrService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      let registerModel = Object.assign({}, this.registerForm.value)

      this.authService.register(registerModel).subscribe(response => {
        console.log(response)
        this.localStorageService.addItem("token", response.data.token);
        this.toastrService.success(response.message, "Üye Olundu");
        window.location.reload();
        this.router.navigate(['login']);
      }, (responseError) => {
        console.log(responseError.error.Errors)
        this.toastrService.warning(responseError.error, "Bilgilerinizi kontrol Ediniz");
        // if (responseError.error.Errors.length > 0) {
        //   for (let i = 0; i < responseError.error.Errors.length; i++) {
        //     this.toastrService.warning(responseError.error.Errors[i], "Bilgilerinizi kontrol Ediniz");
        //   }
        // }
      });
    }
    else {
      this.toastrService.warning("Bilgileri Giriniz.");
    }
  }


  // register() {
  //   if (this.registerForm.valid) {
  //     let registerModel = Object.assign({}, this.registerForm.value)

  //     this.authService.register(registerModel).subscribe(response => {
  //       this.toastrService.info(response.message);
  //       localStorage.setItem("token", response.data.token);
  //       this.router.navigate(["AnaSayfa"]);
  //     }, responseError => {
  //       console.log(responseError)
  //       if (responseError.error.ValidationErrors.length > 0) {
  //         for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
  //           this.toastrService.warning(responseError.error.ValidationErrors[i].ErrorMessage, "Bilgilerinizi Kontrol Ediniz");
  //         }
  //       }
  //     })
  //   }
  //   else {
  //     this.toastrService.warning("Boş Alanları Doldurunuz !");
  //   }
  // }

}
