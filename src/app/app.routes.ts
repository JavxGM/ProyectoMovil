import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Página de Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  // Página Home
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },

  // Página de Información de Usuario
  {
    path: 'info-usuario',
    loadComponent: () =>
      import('./pages/info-usuario/info-usuario.page').then((m) => m.InfoUsuarioPage),
  },
];
