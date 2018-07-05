import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPastpaperComponent } from './add-pastpaper.component';

describe('AddPastpaperComponent', () => {
  let component: AddPastpaperComponent;
  let fixture: ComponentFixture<AddPastpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPastpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPastpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
