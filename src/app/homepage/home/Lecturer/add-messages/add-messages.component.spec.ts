import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessagesComponent } from './add-messages.component';

describe('AddMessagesComponent', () => {
  let component: AddMessagesComponent;
  let fixture: ComponentFixture<AddMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
