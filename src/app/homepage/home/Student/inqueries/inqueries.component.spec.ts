import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueriesComponent } from './inqueries.component';

describe('InqueriesComponent', () => {
  let component: InqueriesComponent;
  let fixture: ComponentFixture<InqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
