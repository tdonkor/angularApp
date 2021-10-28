import { Component, OnInit } from '@angular/core';
import {IBills, IDiabetes} from '../../../Interfaces/Interfaces';
import {BillsService} from '../../../services/bills.service';

@Component({
  selector: 'app-household-bills',
  templateUrl: './household-bills.component.html',
  styleUrls: ['./household-bills.component.scss']
})
export class HouseholdBillsComponent implements OnInit {

  billsReadings: IBills[];

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    // use the get getBillsReadings in the diabetes Service
    // need to tell getDiabetesReadings to make the call to get the data
    // so need to subscribe from the Async operation
    // assign diabetes readings to the diabetesReading property
    this.billsService.getBillsReadings()
      .subscribe((readings: IBills[]) => this.billsReadings = readings);
  }

}
