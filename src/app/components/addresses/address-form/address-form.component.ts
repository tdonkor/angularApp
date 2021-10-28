import {Component, OnInit, ViewChild} from '@angular/core';
import {IAddresses, IDiabetes} from '../../../../Interfaces/Interfaces';
import {NgForm} from '@angular/forms';

import {AddressService} from '../../../../services/address.service';
import {Sugar} from '../../../../models/sugarlevel';
import {Address} from '../../../../models/address';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {placeholdersToParams} from '@angular/compiler/src/render3/view/i18n/util';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  // @ts-ignore
  // viewChild  provides a reference to elements or components in your view:
  @ViewChild('add') addressForm: NgForm;
  newAddress = new Address();
  // updatedAddress = new Address();
  update: any ;

  updateFormDetails: any; // information returned when wanting to update a form
  constructor(private addressService: AddressService, private route: ActivatedRoute) { }

  ngOnInit() {

    // check if the form population is an update
    this.updateFormDetails = this.route.params.subscribe(params => {
      // Populate the form if you want to update it
      this.update = this.newAddress.id = params.Id;
      this.newAddress.name = params.Name;
      this.newAddress.type = params.Type;
      this.newAddress.description = params.Description;
      this.newAddress.dOB = params.DOB;
      this.newAddress.number = params.Number;
      this.newAddress.street = params.Street;
      this.newAddress.city = params.City;
      this.newAddress.county = params.County;
      this.newAddress.postcode = params.Postcode;
      this.newAddress.phone = params.Phone;
      this.newAddress.email = params.Email;
   });
  }
  onSubmit() {


    if (this.update !== undefined) {
      console.log('in onsubmit 1 this.newAddress.Id ' + this.newAddress.id);
      console.log('in onsubmit 1 this.addressForm.value.userData.Id ' + this.addressForm.value.userData.Id);
      this.addressService.updateAddress(this.newAddress)
        .subscribe((add: IAddresses) => this.newAddress = add); // assign address readings to the Address property

    } else {

      this.newAddress.id = this.addressForm.value.userData.Id;
      this.newAddress.name = this.addressForm.value.userData.Name;
      this.newAddress.type = this.addressForm.value.userData.Type;
      this.newAddress.description = this.addressForm.value.userData.Description;
      this.newAddress.dOB = this.addressForm.value.userData.DOB;
      this.newAddress.number = this.addressForm.value.userData.Number;
      this.newAddress.street = this.addressForm.value.userData.Street;
      this.newAddress.city = this.addressForm.value.userData.City;
      this.newAddress.county = this.addressForm.value.userData.County;
      this.newAddress.postcode = this.addressForm.value.userData.Postcode;
      this.newAddress.phone = this.addressForm.value.userData.Phone;
      this.newAddress.email = this.addressForm.value.userData.Email;

      this.addressService.postAddress(this.newAddress)
        .subscribe((add: IAddresses) => this.newAddress = add); // assign address readings to the Address property

      console.log('in onsubmit 2 this.newAddress.Id ' + this.newAddress.id);
      console.log('in onsubmit 2 this.addressForm.value.userData.Id ' + this.addressForm.value.userData.Id);
    }

     // reset the form
    this.addressForm.reset();
  }
  onUpdate() {
    // this.addressForm.value.userData.Name.valueChanges.subscribe((
    //   value: string) => {
    //   console.log('Name changed to:', value);
    // });
    //
    // this.addressForm.value.userData.DOB.valueChanges.subscribe((
    //   value: string) => {
    //   console.log('DOB changed to:', value);
    // });
    // this.addressForm.value.userData.Description.valueChanges.subscribe((
    //   value: string) => {
    //   console.log('Description changed to:', value);
    // });
    // this.addressForm.value.userData.Email.valueChanges.subscribe((
    //   value: string) => {
    //   console.log('Email changed to:', value);
    // });
    // this.addressForm.value.userData.County.valueChanges.subscribe((
    //   value: string) => {
    //   console.log('County  changed to:', value);
    // });
    // this.addressService.updateAddress(this.newAddress)
    //   .subscribe((add: IAddresses) => this.newAddress = add); // assign address readings to the Address property
    //
    //

    // reset the form
    this.addressForm.reset();

  }
}
