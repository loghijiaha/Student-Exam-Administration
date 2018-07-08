import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUnSubModuleComponent } from './sub-un-sub-module.component';

describe('SubUnSubModuleComponent', () => {
  let component: SubUnSubModuleComponent;
  let fixture: ComponentFixture<SubUnSubModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubUnSubModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUnSubModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
