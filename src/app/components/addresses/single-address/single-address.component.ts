import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService} from '../../../../services/address.service';
import {IAddresses, IDiabetes} from '../../../../Interfaces/Interfaces';
import {Address} from '../../../../models/address';
import {ConfirmDialogModel} from '../../../../models/confirmDialogModel';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {MatDialog} from '@angular/material/dialog';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-single-address',
  templateUrl: './single-address.component.html',
  styleUrls: ['./single-address.component.scss']
})
export class SingleAddressComponent implements OnInit {
  title = 'Single Address';
  address: IAddresses;

  constructor(private addressService: AddressService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');  // + converts to an int

    this.addressService.getSingleAddress(id).subscribe((value: IAddresses) => {
      this.address = value;
    });
  }
  // deleteAddress(id: number) {
  //   if (confirm('Are you sure you want to delete this Address ?')) {
  //     this.addressService.deleteAddress(id).subscribe((value: IAddresses) => {
  //       this.address = value;
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
        this.addressService.deleteAddress(id).subscribe((value: IAddresses) => {
          this.address = value;
        });
      }
    });
  }

  editAddress(address: Address) {
    this.router.navigate(['/addressFormReact', address],  { queryParams:  filter, skipLocationChange: true});
  }
}
