import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewLecturerComponent } from './register-new-lecturer.component';

describe('RegisterNewLecturerComponent', () => {
  let component: RegisterNewLecturerComponent;
  let fixture: ComponentFixture<RegisterNewLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
