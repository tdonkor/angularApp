import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DiabetesComponent} from './components/diabetes/diabetes/diabetes.component';
import {SingleReadingComponent} from './components/diabetes/single-reading/single-reading.component';
import {HomeComponent} from './components/home/home.component';
import {SugarReadingFormComponent} from './components/diabetes/sugar-reading-form/sugar-reading-form.component';
import {AddressesComponent} from './components/addresses/addresses.component';
import {SingleAddressComponent} from './components/addresses/single-address/single-address.component';
import {AddressFormComponent} from './components/addresses/address-form/address-form.component';
import {AuthComponent} from './auth/auth.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HouseholdBillsComponent} from './components/household-bills/household-bills.component';
import {HouseholdBillsFormComponent} from './components/household-bills/household-bills-form/household-bills-form.component';
import {SingleHouseholdBillComponent} from './components/household-bills/single-household-bill/single-household-bill.component';
import {PensionsComponent} from './components/pensions/pensions.component';
import {PensionsFormComponent} from './components/pensions/pensions-form/pensions-form.component';
import {SinglePensionComponent} from './components/pensions/single-pension/single-pension.component';
import {PensionsFormReactComponent} from './components/pensions/pensions-form-react/pensions-form-react.component';
import {HouseholdBillsFormReactComponent} from './components/household-bills/household-bills-form-react/household-bills-form-react.component';
import {AddressFormReactComponent} from './components/addresses/address-form-react/address-form-react.component';
import {SugarReadingFormReactComponent} from './components/diabetes/sugar-reading-form-react/sugar-reading-form-react.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent },
  {path: '', component: HomeComponent, data: {title: 'WebApp Home Page'} }, // root
  {path: 'home', component: HomeComponent, data: {title: 'WebApp Home Page'} },
  {path: 'diabetes', component: DiabetesComponent, data: {title: 'List of Sugar Level Readings'} },
  {path: 'singleId/:id', component: SingleReadingComponent,  data: {title: 'Single Sugar Level Reading'} },
 // {path: 'reading', component: SugarReadingFormComponent, data: {title: 'Sugar Level Reading Form'} },
  {path: 'readingReact', component: SugarReadingFormReactComponent, data: {title: 'Sugar Level Reading Form'} },
  {path: 'addresses', component: AddressesComponent, data: {title: 'List of Addresses'}},
  {path: 'singleAddress/:id', component: SingleAddressComponent, data: {title: 'Single Address Details'} },
  // {path: 'address', component: AddressFormComponent, data: {title: 'Address Form'} },
  {path: 'billsList', component: HouseholdBillsComponent, data: {title: 'List of Monthly Household Bills'}  },
  // {path: 'billForm', component: HouseholdBillsFormComponent, data: {title: 'Household Bills Form'}  },
  {path: 'singleBill/:id', component: SingleHouseholdBillComponent, data: {title: 'Single Household Bill Details'} },
  {path: 'pensionsList', component: PensionsComponent, data: {title: 'List of Pensions'}  },
  // {path: 'pensionsForm', component: PensionsFormComponent, data: {title: 'Pensions Form'}  },
  {path: 'pensionsFormReact', component: PensionsFormReactComponent, data: {title: 'Pensions Form '}  },
  {path: 'singlePension/:id', component: SinglePensionComponent, data: {title: 'Single Pension Details'} },
  {path: 'billFormReact', component: HouseholdBillsFormReactComponent, data: {title: 'Household Bills Form'}  },
  {path: 'addressFormReact', component: AddressFormReactComponent, data: {title: 'Address Form'} },
  {path: '**', component: PageNotFoundComponent, data: {title: 'Error Page'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
