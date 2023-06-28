import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { OrderlistComponent } from './orderlist.component';
import { OrderlistRoutingModule } from './orderlist-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    IonicModule, 
    FormsModule, 
    OrderlistRoutingModule],
  declarations: [OrderlistComponent]
})
export class OrderlistModule {}
