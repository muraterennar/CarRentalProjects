import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private jwtHelper: JwtHelperService) {}

  token = localStorage.getItem('token');
  decotedToken = this.jwtHelper.decodeToken(this.token);

  ngOnInit(): void {
    this.pictureParallax();
    console.log(this.decotedToken);
  }

  pictureParallax() {
    parallax();
  }
}

function parallax() {
  var home: any = document.querySelector('.home') as HTMLElement;
  home.onmousemove = (e: any) => {
    document.querySelectorAll('.home-parallax').forEach((elm: any) => {
      let speed: any = elm.getAttribute('data-speed');

      let x = (window.innerWidth - e.pageX * speed) / 90;
      let y = (window.innerHeight - e.pageY * speed) / 90;

      elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
  };
}
