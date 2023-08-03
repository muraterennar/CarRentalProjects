import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './services/localStorageService.service';
declare function getCustomJs(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  dataLoaded: boolean = false;
  loaded: boolean = false;
  adminLoaded: boolean = false;

  constructor(private localStorageService: LocalStorageService, private router: Router, private activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    getCustomJs();
    this.isAuthanticated();
    this.isLocedAdmin();
  }

  isAuthanticated() {
    if (this.localStorageService.getItem("token")) {
      return this.dataLoaded = true;
    }
    else {
      return this.dataLoaded = false;
    }
  }

  isLocedAdmin() {
    if (this.localStorageService.getItem('admin')) {
      return this.loaded = true;
    }
    else {
      return this.loaded = false;
    }
  }
}
