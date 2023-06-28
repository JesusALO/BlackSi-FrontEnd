import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderlistComponent } from './orderlist.component';

const routes: Routes = [
  {
    path: '',
    component: OrderlistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderlistRoutingModule {}
