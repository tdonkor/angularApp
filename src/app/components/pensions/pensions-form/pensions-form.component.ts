import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IPensions} from '../../../../Interfaces/Interfaces';
import {Bills} from '../../../../models/bills';

import {ActivatedRoute} from '@angular/router';
import {Pensions} from '../../../../models/pensions';
import {PensionsService} from '../../../../services/pensions-service';


@Component({
  selector: 'app-pensions-form',
  templateUrl: './pensions-form.component.html',
  styleUrls: ['./pensions-form.component.scss']
})
export class PensionsFormComponent implements OnInit {

  // @ts-ignore
  @ViewChild('pen') PensionsForm: NgForm;


  newPensions = new Pensions();
  updateFormDetails: any; // information returned when wanting to update a form

  constructor(private pensionsService: PensionsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // check if the form population is an update
    this.updateFormDetails = this.route.params.subscribe(params => {
      // Populate the form if you want to update it
      this.newPensions.id = params.Id;
      this.newPensions.name = params.Name;
      this.newPensions.description = params.Description;
      this.newPensions.value = params.Value;
    });
  }

  onSubmit() {
    if (this.updateFormDetails !== undefined) {
      this.pensionsService.updatePension(this.newPensions)
        .subscribe((pen: IPensions) => this.newPensions = pen); // assign address readings to the Address property

    } else {
      this.newPensions.id = this.PensionsForm.value.userData.Id;
      this.newPensions.name = this.PensionsForm.value.userData.Name;
      this.newPensions.description = this.PensionsForm.value.userData.Description;
      this.newPensions.value = this.PensionsForm.value.userData.Value;

      this.pensionsService.postPensionReading(this.newPensions)
        .subscribe((readings: IPensions) => this.newPensions = readings); // assign diabetes readings to the diabetesReading property
    }

    // reset the form
    this.PensionsForm.reset();
  }

}
