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
  jsonData: any[] = [
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 },
    { producto: 'Pantalón', talla: 'M', precio: 120 }
  ];
  
  calculateTotalPrice(){
    let totalPrice = 0;
    for (let item of this.jsonData){
      totalPrice += item.price;
    }
    return totalPrice;
  }

  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  confirm() {
    this.router.navigate(['/confirmed-orders']);
  }

  ngOnInit(): void {
  }

}
