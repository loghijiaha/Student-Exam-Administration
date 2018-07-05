import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewStudentComponent } from './register-new-student.component';

describe('RegisterNewStudentComponent', () => {
  let component: RegisterNewStudentComponent;
  let fixture: ComponentFixture<RegisterNewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
