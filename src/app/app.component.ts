import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDiabetes} from '../Interfaces/Interfaces';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'WebApi';

  // @Output() title: EventEmitter<string>;
  constructor(private router: Router, private titleService: Title,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.route.firstChild;
        if (child.snapshot.data.title) {
          return child.snapshot.data.title;
        }
        return appTitle;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle(ttl);
      // this.title.emit(ttl);
      this.title = ttl;

    });

  }



}
