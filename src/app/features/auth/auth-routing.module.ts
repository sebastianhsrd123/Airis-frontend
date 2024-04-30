import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { NgModule } from "@angular/core";
import { PUBLIC_PATH } from "src/app/core/routes/internal.routes";
import { NoauthGuard } from "src/app/core/guards/noauth.guard";


const routes: Routes = [
  {
    path: PUBLIC_PATH.LOGIN_PATH,
    component: LoginPageComponent,
    canActivate: [NoauthGuard],
    canLoad: [NoauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
