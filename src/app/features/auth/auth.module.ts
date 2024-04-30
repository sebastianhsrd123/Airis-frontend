import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "src/app/modules/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [LoginComponent, LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class AuthModule { }
