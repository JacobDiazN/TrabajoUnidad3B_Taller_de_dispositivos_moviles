import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioDeClasesPage } from './horario-de-clases.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioDeClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioDeClasesPageRoutingModule {}
