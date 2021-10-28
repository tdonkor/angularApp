import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDiabetes, IPensions} from 'src/Interfaces/Interfaces';

import {MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {DiabetesService} from '../../../../services/diabetes.service';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-diabetes-list',
  templateUrl: './diabetes-list.component.html',
  styleUrls: ['./diabetes-list.component.scss']
})
export class DiabetesListComponent implements OnInit {

  // @input DiabetesList - the Diabetes[] passed to us from the parent i.e in the diabetes html file
  // <app-diabetes-list [diabetesList]="diabetesReadings" ></app-diabetes-list>
  // diabetesReading is the populated array in the diabetes component with the list from the database.

  // passed from another component
  @Input() diabetesList: IDiabetes[] = [];
  numOfSugarReadings = 0;
  dateTime = new Date();
  dataSourceList;
  displayedColumns: string[];
  readingTotal: number;
  avReading: number;
  config: any;

  constructor(private diabetesService: DiabetesService,  private router: Router) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.diabetesList.length
    };
  }

  ngOnInit() {
    this.displayedColumns  = ['Id', 'Reading', 'Date', 'TimeOfDay'];
    this.dataSourceList = new MatTableDataSource(this.diabetesList);
  }

  calculateNumOfAReadings(num: number) {
    this.numOfSugarReadings = num;
    this.diabetesService.setIdNumber( this.numOfSugarReadings);
  }

  calculateAverage(diabetesArr: IDiabetes[]) {
    this.readingTotal = 0;  // set the total to  0
    // loop through  pen  and add to the total.
    diabetesArr.forEach((dia: IDiabetes) => {
      this.readingTotal += dia.reading;
    });

    this.avReading = (this.readingTotal / this.numOfSugarReadings);

  }
  addNewReading() {
    this.router.navigate(['/readingReact'],  { queryParams:  filter, skipLocationChange: true});
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
