import { NgModule } from "@angular/core";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { NavUserComponent } from "./components/nav-user/nav-user.component";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { MaterialModule } from "src/app/modules/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { StatsComponent } from './components/stats/stats.component';
import { MapComponent } from './components/map/map.component';
import { FormMapComponent } from './components/form-map/form-map.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UserPageComponent,
    NavUserComponent,
    StatsComponent,
    MapComponent,
    FormMapComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class UserModule { }
