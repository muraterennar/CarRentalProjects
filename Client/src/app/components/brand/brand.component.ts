import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { BrandDetail } from 'src/app/models/brand/brandDetails';
import { BrandImage } from 'src/app/models/brand/brandImage';
import { BrandService } from 'src/app/services/brand.service';
import { Swiper } from 'swiper';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      992: {
        spaceBetween: 20
      }
    }
  }

  brands: Brand[] = [];
  brand: Brand;
  brandImages: BrandImage[] = [];
  brandImage: BrandImage;

  brandDetails: BrandDetail[] = [];
  brandDetail: BrandDetail;

  dataLoaded = false;
  filterText = '';

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    SwipperFunction();
    this.getBrandDetails();
  }

  /* ======================== Brand Detail ========================*/

  getBrandDetails() {
    this.brandService.getBrandDetails().subscribe((respone) => {
      this.brandDetails = respone.data;
      this.dataLoaded == true;
    });
  }

  getBrandDetail() {
    this.brandService.getBrandDetail().subscribe((respone) => {
      this.brandDetail = respone.data;
      this.dataLoaded == true;
    });
  }

  getImagePath(imagePath: string) {
    return this.brandService.getImagePath(imagePath);
  }

}

function SwipperFunction() {
  let swiper = new Swiper(".vehicles-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

  });
}
