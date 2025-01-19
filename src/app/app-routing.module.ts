import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule) }, 

  {
    path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },

  {
    path: '', redirectTo: 'login', pathMatch: 'full' },
    
  {
    path: 'planograma-general',
    loadChildren: () => import('./planograma-general/planograma-general.module').then( m => m.PlanogramaGeneralPageModule)
  },

  {
    path: 'ramos',
    loadChildren: () => import('./ramos/ramos.module').then( m => m.RamosPageModule)
  },

  {
    path: 'horario-de-clases',
    loadChildren: () => import('./horario-de-clases/horario-de-clases.module').then( m => m.HorarioDeClasesPageModule)
  },

  {
    path: 'calificaciones',
    loadChildren: () => import('./calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },

  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
