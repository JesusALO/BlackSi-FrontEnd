/*import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';*/
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  confirm() {
    this.router.navigate(['/confirmed-orders']);
  }

  ngOnInit(): void {
  }

}
