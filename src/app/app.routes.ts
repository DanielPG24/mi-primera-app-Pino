import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./pages/ajustes/ajustes.page').then( m => m.AjustesPage)
  },
];
