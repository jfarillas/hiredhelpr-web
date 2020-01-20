import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupcarousel',
  templateUrl: './signupcarousel.component.html',
  styleUrls: ['./signupcarousel.component.scss']
})
export class SignupcarouselComponent implements OnInit {
  slideConfig: any;
  constructor() {
    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      autoplay: true,
      dots: true,
      arrows: false,
      adaptiveHeight: true,
      speed: 1750,
      autoplaySpeed: 7000
    };
  }

  ngOnInit() {}
}
