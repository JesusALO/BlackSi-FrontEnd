import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent  implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {}

  login() {
    console.log(this.email, this.password)
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
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
