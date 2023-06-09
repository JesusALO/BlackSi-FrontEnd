import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { MapComponent } from './map/map.component';
import { CommonModule } from '@angular/common';


import { MapModule } from './map/map.module';

@NgModule({
  declarations: [AppComponent, SignUpFormComponent, SignInFormComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    MapModule,
    CommonModule, 
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SignInFormComponent },
      { path: 'sign-up', component: SignUpFormComponent },
      { path: 'map-display', component: MapComponent}
    ]),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
