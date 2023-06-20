/*import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    '../../assets/black-white.jpg',
    '../../assets/black-white2.jpg',
    '../../assets/black-white3.jpg',
    '../../assets/black-white4.jpg',
  ];
  constructor() {}
  ngOnInit(): void {
   
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }

}*/

////////


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  login() {

    this.router.navigate(['/map']);
    console.log(this.email, this.password)
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        //this.router.navigate(['/map']);//
        //this.navCtrl.navigateForward('../../map/map.page.html');//
        // Login successful, handle the response
        //console.log(loginData.email, loginData.password);
          
        console.log("it works");
        console.log(response);
      },
      (error) => {
        // Login failed, handle the error
        console.log("it does not work");
        // console.error(error);
      }
      
    );
  }

}
