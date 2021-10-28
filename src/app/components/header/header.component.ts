import {Component, Input, OnInit} from '@angular/core';
import {HeaderService} from '../../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string;

  constructor() {
  }
  ngOnInit() {

  }


}
