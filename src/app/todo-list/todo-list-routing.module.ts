import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListPage } from './todo-list.page';

const routes: Routes = [
  {
    path: '',
    component: TodoListPage, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListPageRoutingModule {}