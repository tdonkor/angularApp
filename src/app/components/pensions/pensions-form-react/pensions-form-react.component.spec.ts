import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionsFormReactComponent } from './pensions-form-react.component';

describe('PensionsFormReactComponent', () => {
  let component: PensionsFormReactComponent;
  let fixture: ComponentFixture<PensionsFormReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionsFormReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionsFormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
