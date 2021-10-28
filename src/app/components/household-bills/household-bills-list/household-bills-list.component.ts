import {Component, Input, OnInit} from '@angular/core';
import {IBills, IDiabetes} from '../../../../Interfaces/Interfaces';
import {BillsService} from '../../../../services/bills.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalDialogBoxComponent} from '../../modal-dialog-box/modal-dialog-box.component';
import {isNumeric} from 'rxjs/internal-compatibility';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-household-bills-list',
  templateUrl: './household-bills-list.component.html',
  styleUrls: ['./household-bills-list.component.scss']
})
export class HouseholdBillsListComponent implements OnInit {


  // Constructor
  constructor(private billService: BillsService,
              public dialog: MatDialog,
              private router: Router) {
  }

  // @input BillsList - the Diabetes[] passed to us from the parent i.e in the diabetes html file
  // <app-bills-list [billsList]="billsReadings" ></app-bills-list>
  // billsReading is the populated array in the bill component with the list from the database.

  // passed from another component
  @Input() billsList: IBills[];
  billsTotal: number;
  nunOfBills = 0;
  wage = 0;
  dialogRef;
  validResponse = 'This is the amount of wages left at the end of the month after bills';
  errorResponse = 'You have to input a valid wage';

  ngOnInit() {
  }

  // Calculates the Total which we display
  calculateOBillsTotal(billsArr: IBills[]) {
    this.billsTotal = 0;  // set the total to  0
    // loop through  bills  and add to the total.
    billsArr.forEach((bill: IBills) => {
      this.billsTotal += bill.value;
    });
  }

  calculateNumOfBills(num: number) {
    this.nunOfBills = num;
    this.billService.setIdNumber(num);
  }

  // wages month dialog
  calculateDialogEndMonth(billsTotal: number, wage: number) {

    this.wage = wage;
    this.billsTotal = billsTotal;
    const sum = this.wage - this.billsTotal;

    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    if (isNaN(this.wage)) {
      dialogConfig.data = {
        title: 'Error in wage value',
        response: this.errorResponse,
        total: '£' + 0
      };
    } else {

      dialogConfig.data = {
        title: 'Wages left after bills',
        response: this.validResponse,
        total: '£' + sum.toFixed(2)
      };

    }

    this.dialog.open(ModalDialogBoxComponent, dialogConfig);

    this.dialogRef = this.dialog.open(ModalDialogBoxComponent, dialogConfig);

    // this.dialogRef.afterClosed().subscribe(
    //   data => console.log('Dialog output:', data)
    // );

    this.save();
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.wage = 0);
  }

  addNewReading() {
    this.router.navigate(['/billFormReact'],  { queryParams:  filter, skipLocationChange: true});
  }
}
