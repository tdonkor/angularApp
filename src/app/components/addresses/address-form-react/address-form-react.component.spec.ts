import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormReactComponent } from './address-form-react.component';

describe('AddressFormReactComponent', () => {
  let component: AddressFormReactComponent;
  let fixture: ComponentFixture<AddressFormReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFormReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
