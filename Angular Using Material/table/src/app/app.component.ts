import { Component } from '@angular/core';
import { AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import  {MatSort, Sort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  //data = ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 } 
 


