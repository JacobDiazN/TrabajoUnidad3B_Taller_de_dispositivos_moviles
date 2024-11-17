import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanogramaGeneralPage } from './planograma-general.page';

const routes: Routes = [
  {
    path: '',
    component: PlanogramaGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanogramaGeneralPageRoutingModule {}
