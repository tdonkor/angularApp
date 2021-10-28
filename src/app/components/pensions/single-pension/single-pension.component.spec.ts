import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePensionComponent } from './single-pension.component';

describe('SinglePensionComponent', () => {
  let component: SinglePensionComponent;
  let fixture: ComponentFixture<SinglePensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
