import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarReadingFormComponent } from './sugar-reading-form.component';

describe('SugarReadingFormComponent', () => {
  let component: SugarReadingFormComponent;
  let fixture: ComponentFixture<SugarReadingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarReadingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarReadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
