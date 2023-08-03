import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/Color/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors-edit',
  templateUrl: './colors-edit.component.html',
  styleUrls: ['./colors-edit.component.css']
})
export class ColorsEditComponent implements OnInit {

  colors: Color[];
  dataLoaded: boolean = false;

  colorsAddedForm: FormGroup;
  colorsDeletedForm: FormGroup;

  colorsAddedLoaded: boolean = false;
  colorsDeletedLoaded: boolean = false;

  constructor(
    private router: Router,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getColors();
    this.createColorAdd()
    this.createColorDelete()
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
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


  createColorAdd() {
    this.colorsAddedForm = this.formBuilder.group({
      colorName: ["", Validators.required],
    });
  }

  createColorDelete() {
    this.colorsDeletedForm = this.formBuilder.group({
      id: ["", Validators.required],
    });
  }


  colorsAdd() {
    this.colorsAddedLoaded = true;
  }

 colorsAddCancel() {
   this.colorsAddedLoaded = false;
    window.location.reload();
  }

  colorsDelete() {
    this.colorsDeletedLoaded = true;
  }

  colorsDeleteCancel() {
    this.colorsDeletedLoaded = false;
    window.location.reload();
  }

  createColorsAdd() {
    this.colorsAddedForm = this.formBuilder.group({
      brandName: ["", Validators.required],
      brandModel: ["", Validators.required]
    });
  }

  createColorsDelete() {
    this.colorsDeletedForm = this.formBuilder.group({
      id: ["", Validators.required],
    });
  }

  colorAdd() {
    if (this.colorsAddedForm.valid) {
      let colorModel = Object.assign({}, this.colorsAddedForm.value);
      this.colorService.addColor(colorModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
        this.colorsAddedLoaded = false;
        window.location.reload();
      }, responseError => {
        this.toastrService.warning(responseError.error)
      })
    }
    else {
      this.toastrService.info("Verileri Eksik Girdiniz");
    }
  }

  colorDelete() {
    if (this.colorsDeletedForm.valid) {
      let colordModel = Object.assign({}, this.colorsDeletedForm.value);
      this.colorService.deleteColor(colordModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
        this.colorsDeletedLoaded = false;
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
