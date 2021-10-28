import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesListComponent } from './diabetes-list.component';

describe('DiabetesListComponent', () => {
  let component: DiabetesListComponent;
  let fixture: ComponentFixture<DiabetesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
