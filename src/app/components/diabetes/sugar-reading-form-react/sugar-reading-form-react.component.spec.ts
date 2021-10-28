import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarReadingFormReactComponent } from './sugar-reading-form-react.component';

describe('SugerReadingFormReactComponent', () => {
  let component: SugarReadingFormReactComponent;
  let fixture: ComponentFixture<SugarReadingFormReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarReadingFormReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarReadingFormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
