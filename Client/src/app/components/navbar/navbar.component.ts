import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClaimType } from 'src/app/guards/login.guard';
import { Brand } from 'src/app/models/brand/brand';
import { Category } from 'src/app/models/category/category';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  brands: Brand[];
  categories: Category[];
  category: Category;
  dataLoaded: boolean = false;
  loadedlogOut: boolean = false;

  token: string = localStorage.getItem('token');
  decodeToken = this.jwtHelper.decodeToken(this.token);
  expireDate: boolean = this.jwtHelper.isTokenExpired(this.token);

  fullName: string = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private autheService: AuthService,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit(): void {
    //Custon Page Function
    loginScript();
    wiscroll();

    this.getAllCategory();
    this.getBrands();
    this.tokenControl();
  }

  //Brand
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  // Category
  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe((response) => {
      this.category = response.data;
      this.dataLoaded = true;
    });
  }

  navRouting(categoryName: string) {
    var name = categoryName.replace(' ', '');
    return name;
  }

  // loginRouting(link: string | any) {
  //   link = "Login";
  //   return this.router.navigateByUrl("AnaSayfa/" + link);
  // }

  logOut() {
    localStorage.removeItem('token');
  }

  tokenControl() {
    if (this.decodeToken) {
      this.fullName = this.decodeToken[ClaimType.fullName];
    } else {
      return;
    }
  }

  avatarControl(): boolean {
    this.tokenControl();
    if (this.decodeToken && !this.expireDate) {
      return true;
    }
    return false;
  }
}

// My Page Custom Function

function loginScript() {
  let menu: any = document.querySelector('#menu-btn');
  let navbar: any = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };
}

function wiscroll() {
  let menu: any = document.querySelector('#menu-btn') as HTMLElement;
  let navbar: any = document.querySelector('.navbar') as HTMLElement;
  // let toggleMenu: any = document.querySelector(".menu") as HTMLElement;
  window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
      // toggleMenu.classList.remove("active");
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
}

// function AccountDropdown() {
//   const profile: any = document.querySelector(".profile");
//   profile.onclick = () => {
//     const toggleMenu: any = document.querySelector(".menu");
//     toggleMenu.classList.toggle("active");
//   };
// }
