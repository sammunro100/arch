import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingRoutingModule } from './mapping-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MappingRoutingModule
  ]
})
export class MappingModule { }
