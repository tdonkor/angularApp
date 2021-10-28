import {Component, Input, OnInit} from '@angular/core';
import {DiabetesService} from '../../../../services/diabetes.service';
import {IDiabetes} from '../../../../Interfaces/Interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {ConfirmDialogModel} from '../../../../models/confirmDialogModel';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-single-reading',
  templateUrl: './single-reading.component.html',
  styleUrls: ['./single-reading.component.scss']
})
export class SingleReadingComponent implements OnInit {

  reading: IDiabetes;

  constructor(private diabetesService: DiabetesService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router
             ) { }


  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.diabetesService.getSingleReading(id).subscribe((reading: IDiabetes) => {
      this.reading = reading;
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Thomas'}});
  //
  //   // subscribe to the observable
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // deleteReading(id: number) {
  //   if (confirm('Are you sure you want to delete this Reading?')) {
  //     this.diabetesService.deleteDiabetesReading(id).subscribe((reading: IDiabetes) => {
  //       this.reading = reading;
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
        this.diabetesService.deleteDiabetesReading(id).subscribe((reading: IDiabetes) => {
                this.reading = reading;
              });
      }
    });
  }

  backToList() {
    this.router.navigate(['/diabetes'],  { queryParams:  filter, skipLocationChange: true});
  }
}
