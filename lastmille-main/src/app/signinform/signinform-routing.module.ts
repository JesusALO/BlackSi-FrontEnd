import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninformPage } from './signinform.page';

const routes: Routes = [
  {
    path: '',
    component: SigninformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninformPageRoutingModule {}
