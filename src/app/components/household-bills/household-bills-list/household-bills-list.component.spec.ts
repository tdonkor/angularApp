import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdBillsListComponent } from './household-bills-list.component';

describe('HouseholdBillsListComponent', () => {
  let component: HouseholdBillsListComponent;
  let fixture: ComponentFixture<HouseholdBillsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdBillsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdBillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
