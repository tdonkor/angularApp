import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {Address} from '../../../../models/address';
import {AddressService} from '../../../../services/address.service';
import {IAddresses, IPensions} from '../../../../Interfaces/Interfaces';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-address-form-react',
  templateUrl: './address-form-react.component.html',
  styleUrls: ['./address-form-react.component.scss']
})
export class AddressFormReactComponent implements OnInit {

  addressForm: FormGroup;
  updateFormDetails: any;

  numOfAddresses: number;
  newAddress = new Address();
  update = false;

  date = new Date();

  constructor(private addressService: AddressService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.numOfAddresses = this.addressService.getIDNum();

    // get the number of addresses
    this.addressForm = new FormGroup({
      Id: new FormControl(this.numOfAddresses, Validators.required),
      Name: new FormControl('', Validators.required),
      Type: new FormControl('Business', Validators.required),
      Description: new FormControl('', Validators.required),
      DOB: new FormControl(Date.now(), Validators.required),
      Number: new FormControl('0', Validators.required),
      Street: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      County: new FormControl('', Validators.required),
      Postcode: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),

    });

    this.updateFormDetails = this.route.params.subscribe(params => {
      // Populate the form if you want to update it


      this.addressForm.patchValue({
        Id: params.Id,
        Name: params.Name,
        Type: params.Type,
        Description: params.Description,
        Value: params.DOB,
        Number: params.Number,
        Street: params.Street,
        City: params.City,
        County: params.County,
        Postcode: params.Postcode,
        Phone: params.Phone,
        Email: params.Email

      });



      if (params.Id) {
        this.update = true;

       } else {
        this.addressForm.patchValue({
          Id: this.numOfAddresses,

      //     Type: 'Business',
      //     DOB: this.date,
      //     Description: ' '
      //
        });
      }
    });
  }

  onSubmit() {
    this.newAddress.id = this.addressForm.get('Id').value;
    this.newAddress.name = this.addressForm.get('Name').value;
    this.newAddress.type = this.addressForm.get('Type').value;
    this.newAddress.description = this.addressForm.get('Description').value;
    this.newAddress.dOB = this.addressForm.get('DOB').value;
    this.newAddress.number = this.addressForm.get('Number').value;
    this.newAddress.street = this.addressForm.get('Street').value;
    this.newAddress.city = this.addressForm.get('City').value;
    this.newAddress.county = this.addressForm.get('County').value;
    this.newAddress.postcode = this.addressForm.get('Postcode').value;
    this.newAddress.phone = this.addressForm.get('Phone').value;
    this.newAddress.email = this.addressForm.get('Email').value;

    if (this.update) {
      this.addressService.updateAddress(this.newAddress)
        .subscribe((add: IAddresses) => this.newAddress = add); // assign address readings to the Address property
    } else {
      this.addressService.postAddress(this.newAddress)
        .subscribe((readings: IAddresses) => this.newAddress = readings); // assign diabetes readings to the diabetesReading property
    }

    // reset the form
     this.addressForm.reset();
    this.update = false;
    this.router.navigate(['/addresses'],  { queryParams:  filter, skipLocationChange: true});

  }
}
