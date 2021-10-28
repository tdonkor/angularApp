import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdBillsFormReactComponent } from './household-bills-form-react.component';

describe('HouseholdBillsFormReactComponent', () => {
  let component: HouseholdBillsFormReactComponent;
  let fixture: ComponentFixture<HouseholdBillsFormReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdBillsFormReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdBillsFormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
