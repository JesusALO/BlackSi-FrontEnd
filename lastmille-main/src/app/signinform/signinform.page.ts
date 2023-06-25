import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.page.html',
  styleUrls: ['./signinform.page.scss'],
})
export class SigninformPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async login() {
    console.log(this.email, this.password);
    try {
      await this.authService.login(this.email, this.password).toPromise();
      this.router.navigate(['/map']);
      console.log('Login successful');
    } catch (error) {
      console.log('Login failed');
      this.presentAlert('Wrong Credentials', 'Please enter valid credentials.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
