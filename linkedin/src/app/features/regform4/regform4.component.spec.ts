import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regform4Component } from './regform4.component';

describe('Regform4Component', () => {
  let component: Regform4Component;
  let fixture: ComponentFixture<Regform4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regform4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
