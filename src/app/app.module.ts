import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiabetesListComponent } from './components/diabetes/diabetes-list/diabetes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule, MatToolbarModule} from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DiabetesComponent } from './components/diabetes/diabetes/diabetes.component';
import { DiabetesService} from '../services/diabetes.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleReadingComponent } from './components/diabetes/single-reading/single-reading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SugarReadingFormComponent } from './components/diabetes/sugar-reading-form/sugar-reading-form.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddressesListComponent } from './components/addresses/addresses-list/addresses-list.component';
import {AddressService} from '../services/address.service';
import { SingleAddressComponent } from './components/addresses/single-address/single-address.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HouseholdBillsComponent } from './components/household-bills/household-bills.component';
import {HouseholdBillsListComponent} from './components/household-bills/household-bills-list/household-bills-list.component';
import {AddressFormComponent} from './components/addresses/address-form/address-form.component';
import {HouseholdBillsFormComponent} from './components/household-bills/household-bills-form/household-bills-form.component';
import {SingleHouseholdBillComponent} from './components/household-bills/single-household-bill/single-household-bill.component';
import {BillsService} from '../services/bills.service';
import { PensionsComponent } from './components/pensions/pensions.component';
import { PensionsListComponent } from './components/pensions/pensions-list/pensions-list.component';
import { PensionsFormComponent } from './components/pensions/pensions-form/pensions-form.component';
import { SinglePensionComponent } from './components/pensions/single-pension/single-pension.component';
import {PensionsService} from '../services/pensions-service';
import { PensionsFormReactComponent } from './components/pensions/pensions-form-react/pensions-form-react.component';
import { HouseholdBillsFormReactComponent } from './components/household-bills/household-bills-form-react/household-bills-form-react.component';
import { AddressFormReactComponent } from './components/addresses/address-form-react/address-form-react.component';
import { ModalDialogBoxComponent } from './components/modal-dialog-box/modal-dialog-box.component';
import { ConfirmDialogBoxComponent } from './components/confirm-dialog-box/confirm-dialog-box.component';
import { SugarReadingFormReactComponent } from './components/diabetes/sugar-reading-form-react/sugar-reading-form-react.component';





@NgModule({
  declarations: [
    AppComponent,
    DiabetesListComponent,
    HeaderComponent,
    HomeComponent,
    MenuBarComponent,
    DiabetesComponent,
    SingleReadingComponent,
    SugarReadingFormComponent,
    AddressesComponent,
    AddressesListComponent,
    SingleAddressComponent,
    AddressFormComponent,
    AuthComponent,
    PageNotFoundComponent,
    HouseholdBillsComponent,
    HouseholdBillsListComponent,
    HouseholdBillsFormComponent,
    SingleHouseholdBillComponent,
    PensionsComponent,
    PensionsListComponent,
    PensionsFormComponent,
    SinglePensionComponent,
    PensionsFormReactComponent,
    HouseholdBillsFormReactComponent,
    AddressFormReactComponent,
    ModalDialogBoxComponent,
    ConfirmDialogBoxComponent,
    SugarReadingFormReactComponent,
  ],
  entryComponents: [ModalDialogBoxComponent,
    ConfirmDialogBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DiabetesService,
              AddressService,
              BillsService,
              PensionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
