import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninformPageRoutingModule } from './signinform-routing.module';

import { SigninformPage } from './signinform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninformPageRoutingModule
  ],
  declarations: [SigninformPage]
})
export class SigninformPageModule {}
