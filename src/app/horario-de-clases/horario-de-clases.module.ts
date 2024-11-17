import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioDeClasesPageRoutingModule } from './horario-de-clases-routing.module';

import { HorarioDeClasesPage } from './horario-de-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioDeClasesPageRoutingModule
  ],
  declarations: [HorarioDeClasesPage]
})
export class HorarioDeClasesPageModule {}
