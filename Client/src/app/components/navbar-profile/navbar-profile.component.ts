import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { Category } from 'src/app/models/category/category';
import { CustomerDetailModel } from 'src/app/models/customer/customerDetailModel';
import { UserDetail } from 'src/app/models/user/UserDetail';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/localStorageService.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {

  brands: Brand[];
  categories: Category[];
  category: Category;
  users: UserDetail[];
  user: UserDetail;
  dataLoaded: boolean = false;
  loadedlogOut: boolean = false;

  imageAdd = "63af953f-4aa2-4831-81fe-b170bfffae91.png"

  admin: string = 'LockedAdmin';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private autheService: AuthService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
  ) {

  }

  ngOnInit(): void {
    // Custon Page Function
    loginScript();
    // wiscroll();
    // AccountDropdown()
    this.getAllCategory();

    this.activatedRoute.params.subscribe((params) => {
      if (params['email'] = this.localStorageService.getItem("user")) {
        this.getUserDetailsByEmail(params['email']);
      }
    })

    console.log(this.getEmail())
  }

  // //Brand
  // getBrands() {
  //   this.brandService.getBrands().subscribe((response) => {
  //     this.brands = response.data;
  //     this.dataLoaded = true;
  //   });
  // }

  // Category
  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((response) => {
      this.categories = response.data
      this.dataLoaded = true
    });
  }

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe((response) => {
      this.category = response.data
      this.dataLoaded = true
    });
  }

  navRouting(categoryName: string) {
    var name = categoryName.replace(" ", "");
    return name;
  }

  //Profile Text
  getUserDetailsById(userId: number) {
    this.userService.getUserDetailByUserId(userId).subscribe((response) => {
      this.user = response.data;
      this.dataLoaded = true;
    });
  }
  getUserDetailsByEmail(email: string) {
    this.userService.getUserDetailsByEmail(email).subscribe((response) => {
      this.users = response.data
    })
  }

  getUserImage(imagePath: string) {
    if (imagePath == null) {
      return this.userService.getUserImage(this.imageAdd);
    }
    return this.userService.getUserImage(imagePath);
  }

  //Profile 
  logOut() {
    localStorage.clear();
    window.location.reload();
    this.router.navigate(["login"]);
    this.loadedlogOut = true;
  }

  isActivated(): any {
    if (this.autheService.isAuthenticated() == true) {
      this.loadedlogOut = true;
    }
    this.loadedlogOut = false;
  }

  // goToAdminPanel() {
  //   this.localStorageService.addItem('admin', this.admin);
  //   this.router.navigate(['/admin']).then(() => {
  //     window.location.reload();
  //   });
  //   // window.location.reload();
  // }

  goToAdminPanel() {
    this.localStorageService.addItem('admin', this.admin);
    localStorage.setItem('dataLoaded', 'false');
    window.location.reload();
  }

  goTouserProfile(email: string) {
    this.router.navigate(['/AnaSayfa/userProfile/' + email])
  }

  getEmail() {
    this.localStorageService.getItem('user');
  }

  getCurrentCustomer(): CustomerDetailModel{
    return this.localStorageService.getCurrentCustomer();
  }
}

// My Page Custom Function

function loginScript() {
  let menu: any = document.querySelector("#menu-btn");
  let navbar: any = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
}

function wiscroll() {
  let menu: any = document.querySelector("#menu-btn") as HTMLElement;
  let navbar: any = document.querySelector(".navbar") as HTMLElement;
  let toggleMenu: any = document.querySelector(".menu");
  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("active");
      toggleMenu.classList.remove("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  };
}

function AccountDropdown() {
  const profile: any = document.querySelector(".profile");
  profile.onclick = () => {
    const toggleMenu: any = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
}
