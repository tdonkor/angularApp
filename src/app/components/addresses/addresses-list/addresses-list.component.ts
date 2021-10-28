import {Component, Input, OnInit} from '@angular/core';
import {IAddresses, IDiabetes} from '../../../../Interfaces/Interfaces';
import {AddressService} from '../../../../services/address.service';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss']
})
export class AddressesListComponent implements OnInit {
  // @input addressList - the Diabetes[] passed to us from the parent i.e in the diabetes html file
  // <app-diabetes-list [diabetesList]="diabetesReadings" ></app-diabetes-list>
  // diabetesReading is the populated array in the diabetes component with the list from the database.

  // passed from another component
  @Input() addressList: IAddresses[];
  numOfAddresses = 0;
  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit() {
  }

  calculateNumOfAddresses(num: number) {
    this.numOfAddresses = num;
    this.addressService.setIdNumber(num);
  }
  addNewReading() {
    this.router.navigate(['/addressFormReact'],  { queryParams:  filter, skipLocationChange: true});
  }
}
