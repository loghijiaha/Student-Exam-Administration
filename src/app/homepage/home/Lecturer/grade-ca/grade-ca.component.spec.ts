import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCaComponent } from './grade-ca.component';

describe('GradeCaComponent', () => {
  let component: GradeCaComponent;
  let fixture: ComponentFixture<GradeCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
