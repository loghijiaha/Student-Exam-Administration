import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewCourseComponent } from './register-new-course.component';

describe('RegisterNewCourseComponent', () => {
  let component: RegisterNewCourseComponent;
  let fixture: ComponentFixture<RegisterNewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
