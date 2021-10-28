import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IDiabetes} from '../../../../Interfaces/Interfaces';
import {DiabetesService} from '../../../../services/diabetes.service';
import {Sugar} from '../../../../models/sugarlevel';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sugar-reading-form',
  templateUrl: './sugar-reading-form.component.html',
  styleUrls: ['./sugar-reading-form.component.scss']
})
export class SugarReadingFormComponent implements OnInit {
  // @ts-ignore
  @ViewChild('f') sugarLevelForm: NgForm;

    sugarReadings: number;
    newSugarReading = new Sugar();

  constructor(private diabetesService: DiabetesService,
              private router: Router) { }

  ngOnInit() {

    this.sugarReadings = this.diabetesService.getIDNum();

  }


  onSubmit() {
    this.newSugarReading.id =  this.sugarReadings; //  this.sugarLevelForm.value.userData.Id;
    this.newSugarReading.timeOfDay = this.sugarLevelForm.value.userData.timeOfDay;
    this.newSugarReading.reading = this.sugarLevelForm.value.userData.reading;
    this.newSugarReading.date = this.sugarLevelForm.value.userData.date;

    this.diabetesService.postDiabetesReading(this.newSugarReading)
      .subscribe((readings: IDiabetes) => this.newSugarReading = readings); // assign diabetes readings to the diabetesReading property

    // reset the form
    this.sugarLevelForm.reset();
    this.router.navigate(['/diabetes'],  { queryParams:  filter, skipLocationChange: true});
  }
}
