import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym/gym.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GymComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    SharedModule
  ]
})
export class GymModule { }
