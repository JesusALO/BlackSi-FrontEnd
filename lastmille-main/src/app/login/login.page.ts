import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  slides = [
    '../../assets/black-white.jpg',
    '../../assets/black-white2.jpg',
    '../../assets/black-white3.jpg',
  ];

  swiper: Swiper =  new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
	  delay: 3000,
	},
  });

  constructor(swiper:Swiper){
	//swiper: Swiper; // Add "!" to indicate that it will be initialized later

  }


  ngOnInit() {}

  
  ngAfterViewInit() {

  }
}
