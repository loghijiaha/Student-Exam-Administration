import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastpapersComponent } from './pastpapers.component';

describe('PastpapersComponent', () => {
  let component: PastpapersComponent;
  let fixture: ComponentFixture<PastpapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastpapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastpapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
