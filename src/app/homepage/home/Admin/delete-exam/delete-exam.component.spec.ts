import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExamComponent } from './delete-exam.component';

describe('DeleteExamComponent', () => {
  let component: DeleteExamComponent;
  let fixture: ComponentFixture<DeleteExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//fewfewfewffew
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
