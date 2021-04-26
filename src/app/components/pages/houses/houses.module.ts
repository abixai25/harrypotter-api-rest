import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';


@NgModule({
  declarations: [HousesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HousesRoutingModule
  ]
})
export class HousesModule { }
