import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofilepicComponent } from './addprofilepic.component';

describe('AddprofilepicComponent', () => {
  let component: AddprofilepicComponent;
  let fixture: ComponentFixture<AddprofilepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprofilepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
