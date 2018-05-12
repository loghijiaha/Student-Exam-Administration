import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorrectionRequestComponent } from './recorrection-request.component';

describe('RecorrectionRequestComponent', () => {
  let component: RecorrectionRequestComponent;
  let fixture: ComponentFixture<RecorrectionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorrectionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorrectionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
