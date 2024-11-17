import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanogramaGeneralPageRoutingModule } from './planograma-general-routing.module';

import { PlanogramaGeneralPage } from './planograma-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanogramaGeneralPageRoutingModule
  ],
  declarations: [PlanogramaGeneralPage]
})
export class PlanogramaGeneralPageModule {}
