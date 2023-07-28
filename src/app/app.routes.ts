import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/buttons.page').then( m => m.ButtonsPage)
  },
  {
    path: 'actionsheet',
    loadComponent: () => import('./pages/actionsheet/actionsheet.page').then( m => m.ActionsheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },  {
    path: 'badge',
    loadComponent: () => import('./pages/badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('./pages/breadcrumbs/breadcrumbs.page').then( m => m.BreadcrumbsPage)
  },

];
