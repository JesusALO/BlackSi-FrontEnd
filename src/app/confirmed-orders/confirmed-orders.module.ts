import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmedOrdersPageRoutingModule } from './confirmed-orders-routing.module';

import { ConfirmedOrdersPage } from './confirmed-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmedOrdersPageRoutingModule
  ],
  declarations: [ConfirmedOrdersPage]
})
export class ConfirmedOrdersPageModule {}
