import { Component, OnInit } from '@angular/core';
import {IAddresses, IDiabetes} from '../../../Interfaces/Interfaces';
import {AddressService} from '../../../services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  // list of Addresses  will receive these from the Addresses Service
  // which gets the list from the database via HTTP
  addresses: IAddresses[];


  constructor(private addressService: AddressService) { }

  ngOnInit() {
    // use the  getAddresses in the Address Service
    // need to tell getAddresses to make the call to get the data
    // so need to subscribe from the Async operation
    // assign addressList to the addresses property
    this.addressService.getAddresses()
      .subscribe((addressList: IAddresses[]) => this.addresses = addressList);
  }

}
