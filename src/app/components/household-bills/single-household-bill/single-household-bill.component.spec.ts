import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHouseholdBillComponent } from './single-household-bill.component';

describe('SingleHouseholdBillComponent', () => {
  let component: SingleHouseholdBillComponent;
  let fixture: ComponentFixture<SingleHouseholdBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHouseholdBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHouseholdBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
