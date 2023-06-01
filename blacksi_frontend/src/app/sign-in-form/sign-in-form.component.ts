import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToSignUp() {
    this.router.navigate(['/sign-up']);
  }
  
  

}
