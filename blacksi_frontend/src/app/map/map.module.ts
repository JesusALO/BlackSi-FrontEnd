import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, IonicModule],
  exports: [MapComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapModule { }
