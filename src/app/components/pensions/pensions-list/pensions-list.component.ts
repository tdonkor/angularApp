import {Component, Input, OnInit} from '@angular/core';
import {IPensions} from '../../../../Interfaces/Interfaces';
import {PensionsService} from '../../../../services/pensions-service';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pensions-list',
  templateUrl: './pensions-list.component.html',
  styleUrls: ['./pensions-list.component.scss']
})
export class PensionsListComponent implements OnInit {

  // passed from another component
  @Input() pensionsList: IPensions[];
  pensionTotal: number;
  nunOfPensions = 0;
  dateTime = new Date();

  constructor(private pensionService: PensionsService, private router: Router) { }

  ngOnInit() {
  }

  // Calculates the Total which we display
  calculatePensionsTotal(pensionsArr: IPensions[]) {
    this.pensionTotal = 0;  // set the total to  0
    // loop through  pen  and add to the total.
    pensionsArr.forEach((pen: IPensions) => {
      this.pensionTotal += pen.value;
    });
  }

  calculateNumOfBills(num: number) {
    this.nunOfPensions = num;
    this.pensionService.setIdNumber(num);
  }

  addNewReading(){
    this.router.navigate(['/readingReact'],  { queryParams:  filter, skipLocationChange: true});
  }

}
