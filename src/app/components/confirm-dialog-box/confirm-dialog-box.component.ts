import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogModel} from '../../../models/confirmDialogModel';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './confirm-dialog-box.component.html',
  styleUrls: ['./confirm-dialog-box.component.scss']
})
export class ConfirmDialogBoxComponent implements OnInit {

  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogBoxComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
  ) {

    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
