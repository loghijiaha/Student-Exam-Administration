import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserInquiriesComponent } from './view-user-inquiries.component';

describe('ViewUserInquiriesComponent', () => {
  let component: ViewUserInquiriesComponent;
  let fixture: ComponentFixture<ViewUserInquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserInquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
