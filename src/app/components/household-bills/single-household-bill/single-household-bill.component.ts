import { Component, OnInit } from '@angular/core';
import {BillsService} from '../../../../services/bills.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBills, IDiabetes} from '../../../../Interfaces/Interfaces';
import {Bills} from '../../../../models/bills';
import {ConfirmDialogModel} from '../../../../models/confirmDialogModel';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {MatDialog} from '@angular/material/dialog';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-single-household-bill',
  templateUrl: './single-household-bill.component.html',
  styleUrls: ['./single-household-bill.component.scss']
})
export class SingleHouseholdBillComponent implements OnInit {

  billReading: IBills;

  constructor(private billsService: BillsService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.billsService.getSingleBill(id).subscribe((reading: IBills) => {
      this.billReading = reading;
    });
  }

  // deleteBill(id: number) {
  //   if (confirm('Are you sure you want to delete this Bill?')) {
  //     this.billsService.deleteBillReading(id).subscribe((reading: IBills) => {
  //       this.billReading = reading;
  //     });
  //   }
  // }

  removeReadingDialog(id: number) {

    const message = `Are you sure, you want to remove this value?`;
    const title = 'Confirm Action';

    const dialogData =  new ConfirmDialogModel(title, message);

    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      panelClass: 'confirm-dialog-container',
      data: dialogData,

    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.billsService.deleteBillReading(id).subscribe((reading: IBills) => {
          this.billReading = reading;
        });
      }
    });
  }

  editBill(bill: Bills) {
    this.router.navigate(['/billFormReact', bill],  { queryParams:  filter, skipLocationChange: true});
  }

}
