import { Component, OnInit } from '@angular/core';
import {IDiabetes} from '../../../../Interfaces/Interfaces';
import {DiabetesService} from '../../../../services/diabetes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.scss']
})
export class DiabetesComponent implements OnInit {

  // list of diabetes readings will receive these from the diabetes Service
  // which gets the list from the database via HTTP

  diabetesReadings: IDiabetes[] = [];

  constructor(private diabetesService: DiabetesService) { }

  ngOnInit() {
    // use the get getDiabetesReadings in the diabetes Service
    // need to tell getDiabetesReadings to make the call to get the data
    // so need to subscribe from the Async operation
    // assign diabetes readings to the diabetesReading property
    this.diabetesService.getDiabetesReadings()
      .subscribe((readings: IDiabetes[]) => this.diabetesReadings = readings);

    console.log('Diabetes readings: ' + this.diabetesReadings);
  }

}
