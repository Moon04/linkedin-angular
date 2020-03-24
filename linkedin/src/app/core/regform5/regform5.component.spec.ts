import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regform5Component } from './regform5.component';

describe('Regform5Component', () => {
  let component: Regform5Component;
  let fixture: ComponentFixture<Regform5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regform5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regform5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
