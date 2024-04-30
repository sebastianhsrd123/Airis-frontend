import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/core/routes/internal.routes';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.scss']
})
export class NavUserComponent {
  showBuys = false;
  showSide = false;
  showSales = false;
  @Output() options: EventEmitter<boolean> = new EventEmitter();
  constructor(private router: Router) { }

  projectOption() {
    this.options.emit(true);
    this.showSide = false;
  }

  statsOption() {
    this.options.emit(false);
    this.showSide = false;
  }

  endSession() {
    localStorage.clear();
    this.router.navigate([INTERNAL_ROUTES.ROUTE_LOGIN]);
  }

  changeBuys(){
    this.showBuys = !this.showBuys;
  }

  changeSales(){
    this.showSales = !this.showSales;
  }

  changeSide(){
    this.showSide = !this.showSide;
  }

}
