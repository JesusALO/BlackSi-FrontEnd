import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.page.html',
  styleUrls: ['./signinform.page.scss'],
})
export class SigninformPage implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private authService: AuthService) { }

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
