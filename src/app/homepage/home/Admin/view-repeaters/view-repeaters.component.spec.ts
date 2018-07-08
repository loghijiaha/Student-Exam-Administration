import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepeatersComponent } from './view-repeaters.component';

describe('ViewRepeatersComponent', () => {
  let component: ViewRepeatersComponent;
  let fixture: ComponentFixture<ViewRepeatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRepeatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepeatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
