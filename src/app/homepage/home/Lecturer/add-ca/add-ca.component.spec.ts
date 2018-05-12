import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaComponent } from './add-ca.component';

describe('AddCaComponent', () => {
  let component: AddCaComponent;
  let fixture: ComponentFixture<AddCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
