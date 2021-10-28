import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionsFormComponent } from './pensions-form.component';

describe('PensionsFormComponent', () => {
  let component: PensionsFormComponent;
  let fixture: ComponentFixture<PensionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
