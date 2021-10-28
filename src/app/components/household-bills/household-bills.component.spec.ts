import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdBillsComponent } from './household-bills.component';

describe('HouseholdBillsComponent', () => {
  let component: HouseholdBillsComponent;
  let fixture: ComponentFixture<HouseholdBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
