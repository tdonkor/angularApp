import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresssesListComponent } from './addresses-list.component';

describe('AddresssesListComponent', () => {
  let component: AddresssesListComponent;
  let fixture: ComponentFixture<AddresssesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresssesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresssesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
