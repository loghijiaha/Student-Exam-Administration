import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRepeatComponent } from './request-repeat.component';

describe('RequestRepeatComponent', () => {
  let component: RequestRepeatComponent;
  let fixture: ComponentFixture<RequestRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
