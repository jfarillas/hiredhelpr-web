import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  testimonials: any;
  slideConfig: any;
  constructor() {
    this.testimonials = [
      {
        statement: 'test1'
      },
      {
        statement: 'test2'
      },
      {
        statement: 'test3'
      }
    ];
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
