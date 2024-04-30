import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  options:string;
  statsActive:boolean;
  projectActive:boolean;

  constructor() {
    this.options = 'Seleccione Una opción';
    this.statsActive = false;
    this.projectActive = false;
   }

  ngOnInit(): void {
  }

  changeOption(event:boolean){
    if(event){
      this.options = 'Proyectos';
      this.statsActive = false;
      this.projectActive = true;
    }else{
      this.options = 'Estadísticas';
      this.statsActive = true;
      this.projectActive = false;
    }
  }

}
