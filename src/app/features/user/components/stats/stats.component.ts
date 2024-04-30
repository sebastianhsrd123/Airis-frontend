import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Statitics } from 'src/app/interfaces/stats.interface';

const ELEMENT_DATA: Statitics[] = [
  { month: "Enero", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Febrero", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Marzo", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Abril", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Mayo", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Junio", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Julio", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Agosto", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Septiembre", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Octubre", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Noviembre", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
  { month: "Diciembre", cant: Math.floor(Math.random() * 100) + 1, total: Math.floor(Math.random() * 100000) + 1 },
];

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit{
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Statitics>([]);

  constructor() {
    this.displayedColumns = ['month', 'cant', 'total'];
    this.dataSource.data = ELEMENT_DATA;
  }

  ngOnInit() {
    this.calcTotal();
  }

  calcTotal() {
    const data = this.dataSource.data;
    const totalCantidad = data.reduce((acc, curr) => acc + curr.cant, 0);
    const totalTotal = data.reduce((acc, curr) => acc + curr.total, 0);

    data.push({
      month: 'Total Anual',
      cant: totalCantidad,
      total: totalTotal
    });
  }


}
