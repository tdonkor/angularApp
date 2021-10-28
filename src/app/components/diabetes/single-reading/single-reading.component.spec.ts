import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReadingComponent } from './single-reading.component';

describe('SingleReadingComponent', () => {
  let component: SingleReadingComponent;
  let fixture: ComponentFixture<SingleReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
