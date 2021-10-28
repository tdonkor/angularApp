import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdBillsFormComponent } from './household-bills-form.component';

describe('HouseholdBillsFormComponent', () => {
  let component: HouseholdBillsFormComponent;
  let fixture: ComponentFixture<HouseholdBillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdBillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdBillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
