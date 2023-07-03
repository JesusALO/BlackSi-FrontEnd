import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmedOrdersPage } from './confirmed-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmedOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmedOrdersPageRoutingModule {}
