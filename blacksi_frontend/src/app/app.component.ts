import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showSignInForm: boolean = true;
  constructor() {}

  toggleForms() {
    this.showSignInForm = !this.showSignInForm;
  }
}
