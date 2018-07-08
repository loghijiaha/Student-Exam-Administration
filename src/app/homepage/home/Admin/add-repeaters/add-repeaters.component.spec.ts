import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepeatersComponent } from './add-repeaters.component';

describe('AddRepeatersComponent', () => {
  let component: AddRepeatersComponent;
  let fixture: ComponentFixture<AddRepeatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRepeatersComponent ]
    })
    .compileComponents();
  }));
//wefwdeewe
  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepeatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
