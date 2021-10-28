import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PensionsService} from '../../../../services/pensions-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pensions} from '../../../../models/pensions';
import {IPensions} from '../../../../Interfaces/Interfaces';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-pensions-form-react',
  templateUrl: './pensions-form-react.component.html',
  styleUrls: ['./pensions-form-react.component.scss']
})
export class PensionsFormReactComponent implements OnInit {

  pensionForm: FormGroup;
  updateFormDetails: any;
  numOfPensions: number;

  newPensions = new Pensions();
  update = false;
  constructor(private pensionsService: PensionsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.numOfPensions = this.pensionsService.getIDNum();

    // create the reactive form in typescript
    this.pensionForm = new FormGroup({
      Id: new FormControl(this.numOfPensions, Validators.required),
      Name: new FormControl(null, Validators.required),
      Description: new FormControl(null, Validators.required),
      Value: new FormControl(null, Validators.required),

    });



    this.updateFormDetails = this.route.params.subscribe(params => {
      // Populate the form if you want to update it

       this.pensionForm.patchValue({
         Id: params.Id,
         Name: params.Name,
         Description: params.Description,
         Value: params.Value
       });
       this.newPensions.id = params.Id;
       this.newPensions.name = params.Name;
       this.newPensions.description = params.Description;
       this.newPensions.value = params.Value;

       if (params.Id) {
         this.update = true;
       }  else {
         this.pensionForm.patchValue({
           Id: this.numOfPensions,
         });
       }
     });
  }

  onSubmit() {


this.newPensions.id = this.pensionForm.get('Id').value;
this.newPensions.name = this.pensionForm.get('Name').value;
this.newPensions.description = this.pensionForm.get('Description').value;
this.newPensions.value = this.pensionForm.get('Value').value;

if (this.update) {
      this.pensionsService.updatePension(this.newPensions)
        .subscribe((pen: IPensions) => this.newPensions = pen); // assign address readings to the Address property

    } else {

      this.pensionsService.postPensionReading(this.newPensions)
        .subscribe((readings: IPensions) => this.newPensions = readings); // assign diabetes readings to the diabetesReading property
    }

    // reset the form
this.pensionForm.reset();
this.update = false;
this.router.navigate(['/pensionsList'],  { queryParams:  filter, skipLocationChange: true});
  }
}
