/*import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';*/
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  jsonData: any[] = [];
  orders: any[] = [];

  fetchOrders() {
    console.log();
    this.http.get('<https://api.tiendanube.com/v1/3378902/orders?fields=id,contact_name,contact_phone,customer>')
      .pipe(
        catchError((error) => {
          console.error('Error fetching orders:', error);
          return throwError(error);
        })
      )
      .subscribe((data: any) => {
        this.orders = data;
      });
  }
  
  
  calculateTotalPrice(){
    let totalPrice = 0;
    for (let order of this.jsonData){
      totalPrice += order.price;
    }
    return totalPrice;
  }

  constructor(
    private authService: AuthService, 
    private navCtrl: NavController, 
    private router: Router,
    private http: HttpClient
    ) { }

  confirm() {
    this.router.navigate(['/confirmed-orders']);
  }

  ngOnInit(): void {
    this.fetchOrders();
  }

}
