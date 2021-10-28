import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-dialog-box',
  templateUrl: './modal-dialog-box.component.html',
  styleUrls: ['./modal-dialog-box.component.scss']
})
export class ModalDialogBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
