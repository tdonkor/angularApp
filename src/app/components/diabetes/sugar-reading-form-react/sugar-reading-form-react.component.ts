import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Sugar} from '../../../../models/sugarlevel';
import {DiabetesService} from '../../../../services/diabetes.service';
import {Router} from '@angular/router';
import {IDiabetes, IPensions} from '../../../../Interfaces/Interfaces';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-sugar-reading-form-react',
  templateUrl: './sugar-reading-form-react.component.html',
  styleUrls: ['./sugar-reading-form-react.component.scss']
})
export class SugarReadingFormReactComponent implements OnInit {

  readingForm: FormGroup;
  sugarReadings: number;
  newSugarReading = new Sugar();

  update = false;


  constructor(private diabetesService: DiabetesService,
              private router: Router) { }

  ngOnInit() {

    this.sugarReadings = this.diabetesService.getIDNum();

    // formGroup tells angular about the overall form
    // formControl tells angular about the individual fields

    // create our overall form structure
    this.readingForm = new FormGroup({

      Id: new FormControl(this.sugarReadings, [
        Validators.required,
      ]),

      Reading: new FormControl('0', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6)
      ]),

      Date: new FormControl('', [
        Validators.required,

      ]),
      TimeOfDay: new FormControl('', [
        Validators.required,

      ])
    });
  }

  onSubmit() {

    this.newSugarReading.id =  this.readingForm.get('Id').value;
    this.newSugarReading.reading = this.readingForm.get('Reading').value;;
    this.newSugarReading.date = this.readingForm.get('Date').value;;
    this.newSugarReading.timeOfDay = this.readingForm.get('TimeOfDay').value;;

    this.diabetesService.postDiabetesReading(this.newSugarReading)
      .subscribe((readings: IDiabetes) => this.newSugarReading = readings); // assign diabetes readings to the diabetesReading property

    // reset the form
    this.readingForm.reset();
    this.router.navigate(['/diabetes'],  { queryParams:  filter, skipLocationChange: true});


    this.newSugarReading.id = this.readingForm.get('Id').value;
    this.newSugarReading.reading = this.readingForm.get('Reading').value;
    this.newSugarReading.date = this.readingForm.get('Date').value;
    this.newSugarReading.timeOfDay = this.readingForm.get('TimeOfDay').value;

    this.diabetesService.postDiabetesReading(this.newSugarReading)
        .subscribe((readings: IDiabetes) => this.newSugarReading = readings); // assign diabetes readings to the diabetesReading property

    // reset the form

    this.readingForm.reset();
    this.update = false;
    this.router.navigate(['/diabetes'],  { queryParams:  filter, skipLocationChange: true});

  }
  onResetClick() {

  }

}
