import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-edit',
  templateUrl: './brands-edit.component.html',
  styleUrls: ['./brands-edit.component.css']
})
export class BrandsEditComponent implements OnInit {

  dataLoaded: boolean = false;
  brands: Brand[];

  brandsAddedForm: FormGroup;
  brandsDeletedForm: FormGroup;

  bradsAddedLoaded: boolean = false;
  bradsDeletedLoaded: boolean = false;

  constructor(
    private router: Router,
    private brandService: BrandService,
    private fromBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.createBrandAdd();
    this.createBrandDelete();
  }


  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  brandsAdd() {
    this.bradsAddedLoaded = true;
  }

  brandsAddCancel() {
    this.bradsAddedLoaded = false;
    window.location.reload();
  }

  brandsDelete() {
    this.bradsDeletedLoaded = true;
  }

  brandsDeleteCancel() {
    this.bradsDeletedLoaded = false;
    window.location.reload();
  }

  backToDashboard() {

    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['/admin']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }
  }

  createBrandAdd() {
    this.brandsAddedForm = this.fromBuilder.group({
      brandName: ["", Validators.required],
      brandModel: ["", Validators.required]
    });
  }

  createBrandDelete() {
    this.brandsDeletedForm = this.fromBuilder.group({
      id: ["", Validators.required],
    });
  }

  brandAdd() {
    if (this.brandsAddedForm.valid) {
      let brandModel = Object.assign({}, this.brandsAddedForm.value);
      this.brandService.brandAdd(brandModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
        this.bradsAddedLoaded = false;
        window.location.reload();
      }, responseError => {
        this.toastrService.warning(responseError.error)
      })
    }
    else {
      this.toastrService.info("Verileri Eksik Girdiniz");
    }
  }

  brandDelete() {
    if (this.brandsDeletedForm.valid) {
      let brandModel = Object.assign({}, this.brandsDeletedForm.value);
      this.brandService.brandDelete(brandModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
        this.bradsDeletedLoaded = false;
        window.location.reload();
      }, responseError => {
        this.toastrService.warning(responseError.error)
      })
    }
    else {
      this.toastrService.info("Verileri Eksik Girdiniz");
    }
  }
}
