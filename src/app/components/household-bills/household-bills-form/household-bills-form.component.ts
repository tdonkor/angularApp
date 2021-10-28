import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DiabetesService} from '../../../../services/diabetes.service';
import {BillsService} from '../../../../services/bills.service';
import {Address} from '../../../../models/address';
import {ActivatedRoute} from '@angular/router';
import {IBills} from '../../../../Interfaces/Interfaces';
import {Bills} from '../../../../models/bills';


@Component({
  selector: 'app-household-bills-form',
  templateUrl: './household-bills-form.component.html',
  styleUrls: ['./household-bills-form.component.scss']
})
export class HouseholdBillsFormComponent implements OnInit {

  // @ts-ignore
  @ViewChild('bf') householdBillsForm: NgForm;

  billReading: IBills;
  newHouseHoldBills = new Bills();
  update?: any;
  updateFormDetails?: any; // information returned when wanting to update a form




  constructor(private billsService: BillsService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    // check if the form population is an update
    this.updateFormDetails = this.route.params.subscribe(params => {
      // Populate the form if you want to update it

      this.update = this.newHouseHoldBills.id = params.Id;
      this.newHouseHoldBills.name = params.Name;
      this.newHouseHoldBills.value = params.Value;
      console.log('ngOnInit this.update: ' +  this.update);
    });
  }

  onSubmit() {
    if (this.update !== undefined) {
      console.log('onsubmit update check: ' +  this.update);
      this.billsService.updateBill(this.newHouseHoldBills)
        .subscribe((bil: IBills) => this.newHouseHoldBills = bil); // assign address readings to the Address property

    } else {
      console.log('onsubmit submit check: ' +  this.update);
      this.newHouseHoldBills.id = this.householdBillsForm.value.userData.Id;
      this.newHouseHoldBills.name = this.householdBillsForm.value.userData.Name;
      this.newHouseHoldBills.value = this.householdBillsForm.value.userData.Value;

      this.billsService.postBillReading(this.newHouseHoldBills)
        .subscribe((readings: IBills) => this.newHouseHoldBills = readings); // assign diabetes readings to the diabetesReading property
    }

    // reset the form
    this.householdBillsForm.reset();
  }
}
