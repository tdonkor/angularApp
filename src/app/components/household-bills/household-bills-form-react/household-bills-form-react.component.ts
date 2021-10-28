import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {IBills, IPensions} from '../../../../Interfaces/Interfaces';
import {Bills} from '../../../../models/bills';
import {BillsService} from '../../../../services/bills.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-household-bills-form-react',
  templateUrl: './household-bills-form-react.component.html',
  styleUrls: ['./household-bills-form-react.component.scss']
})
export class HouseholdBillsFormReactComponent implements OnInit {

  // @ts-ignore


  householdBillsForm: FormGroup;
  updateFormDetails: any;
  update = false;
  newHouseHoldBills = new Bills();
  numOfBills: number;


  constructor(private billsService: BillsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.numOfBills = this.billsService.getIDNum();
    // create the reactive form in typescript
    this.householdBillsForm = new FormGroup({
      Id: new FormControl(this.numOfBills, Validators.required),
      Name: new FormControl(null, Validators.required),
      Value: new FormControl(null, Validators.required),

    });

    this.updateFormDetails = this.route.params.subscribe(params => {
      // Populate the form if you want to update it

      this.householdBillsForm.patchValue({
        Id: params.Id,
        Name: params.Name,
        Value: params.Value
      });
      this.newHouseHoldBills.id = params.Id;
      this.newHouseHoldBills.name = params.Name;
      this.newHouseHoldBills.value = params.Value;

      if (params.Id) {
        this.update = true;
      }  else {
        this.householdBillsForm.patchValue({
          Id: this.numOfBills,
        });
      }
    });

  }

  onSubmit() {
    this.newHouseHoldBills.id = this.householdBillsForm.get('Id').value;
    this.newHouseHoldBills.name = this.householdBillsForm.get('Name').value;
    this.newHouseHoldBills.value = this.householdBillsForm.get('Value').value;

    if (this.update) {
      this.billsService.updateBill(this.newHouseHoldBills)
        .subscribe((bil: IBills) => this.newHouseHoldBills = bil);

    } else {
      this.billsService.postBillReading(this.newHouseHoldBills)
        .subscribe((readings: IBills) => this.newHouseHoldBills = readings);
    }

    // reset the form
    this.householdBillsForm.reset();
    this.update = false;
    this.router.navigate(['/billsList'],  { queryParams:  filter, skipLocationChange: true});
  }
}

