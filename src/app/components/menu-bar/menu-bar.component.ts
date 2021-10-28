import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {



    sugarReadings = [
    // {id: 'diabetes', name: 'Sugar Level Readings' },
    // {id: 'readingReact', name: 'Add Sugar Level Reading' },
    // {id: 'readingReact', name: 'Add Sugar Level Reading Reactive' }
  ] ;

  addresses = [
    {id: 'addresses', name: 'List of Addresses' },
    // {id: 'address', name: 'Add an Address' },
    {id: 'addressFormReact', name: 'Add an Address' },
  ] ;

   bills = [
    {id: 'billsList', name: 'List of Household Bills' },
    // {id: 'billForm', name: 'Add a Bill' },
     {id: 'billFormReact', name: 'Add a Bill ' },
  ] ;

  pensions = [
    {id: 'pensionsList', name: 'List of Pensions' },
    // {id: 'pensionsForm', name: 'Add a Pension' },
    {id: 'pensionsFormReact', name: 'Add a Pension' },
  ] ;

  constructor( private router: Router) { }

  ngOnInit() {

  }
  getSugarList() {
    this.router.navigate(['/diabetes'],  { queryParams:  filter, skipLocationChange: true});
  }

  getAddressList() {
    this.router.navigate(['/addresses'],  { queryParams:  filter, skipLocationChange: true});
  }

  getBillsList() {
    this.router.navigate(['/billsList'],  { queryParams:  filter, skipLocationChange: true});
  }

  getPensionsList(){
    this.router.navigate(['/pensionsList'],  { queryParams:  filter, skipLocationChange: true});
  }
}
