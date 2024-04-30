import { Component, NgModule } from "@angular/core";
import { USER_PATH } from "src/app/core/routes/internal.routes";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";


const routes: Routes = [

  {
    path: USER_PATH.PRESENTATION_PATH,
    component: UserPageComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
