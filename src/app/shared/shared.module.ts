import { NgModule } from "@angular/core";
import { MaterialModule } from "../modules/material/material.module";
import { SpinnerComponent } from "./components/spinner-global/spinner.component";
import { CommonModule } from "@angular/common";
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { TitleComponent } from './components/title/title.component';
import { FormatMoneyPipe } from "../core/pipes/format-money.pipe";

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorDialogComponent,
    TitleComponent,
    FormatMoneyPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SpinnerComponent,
    ErrorDialogComponent,
    TitleComponent,
    FormatMoneyPipe
  ]
})

export class SharedModule { }
