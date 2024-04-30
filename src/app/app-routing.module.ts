import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES, PUBLIC_PATH, USER_PATH } from './core/routes/internal.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES.ROUTE_LOGIN,
    pathMatch: 'full'
  },
  {
    path: PUBLIC_PATH.AUTH_PATH,
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: USER_PATH.USER_PATH,
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule)
  },
  {
    path: '**',
    redirectTo: INTERNAL_ROUTES.ROUTE_LOGIN,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
