import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router';
import {IDiabetes, IPensions} from '../../../../Interfaces/Interfaces';
import {PensionsService} from '../../../../services/pensions-service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogModel} from '../../../../models/confirmDialogModel';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-single-pension',
  templateUrl: './single-pension.component.html',
  styleUrls: ['./single-pension.component.scss']
})
export class SinglePensionComponent implements OnInit {
  pensionReading: IPensions;

  constructor(private pensionService: PensionsService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.pensionService.getSinglePension(id).subscribe((reading: IPensions) => {
      this.pensionReading = reading;
    });
  }

  // deletePension(id: number) {
  //   if (confirm('Are you sure you want to delete this Bill?')) {
  //     this.pensionService.deletePensionReading(id).subscribe((reading: IPensions) => {
  //       this.pensionReading = reading;
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
        this.pensionService.deletePensionReading(id).subscribe((reading: IPensions) => {
          this.pensionReading = reading;
        });
      }
    });
  }

  editPension(pen: IPensions) {
    this.router.navigate(['/pensionsFormReact', pen],  { queryParams:  filter, skipLocationChange: true});
  }


}
