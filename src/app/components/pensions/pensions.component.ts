import { Component, OnInit } from '@angular/core';
import {IBills, IPensions} from '../../../Interfaces/Interfaces';
import {PensionsService} from '../../../services/pensions-service';


@Component({
  selector: 'app-pensions',
  templateUrl: './pensions.component.html',
  styleUrls: ['./pensions.component.scss']
})
export class PensionsComponent implements OnInit {

  pensionsReadings: IPensions[];
  constructor(private pensionsService: PensionsService) { }

  ngOnInit() {
    this.pensionsService.getPensionsReadings()
      .subscribe((readings: IPensions[]) => this.pensionsReadings = readings);
  }

}
