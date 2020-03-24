import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlogoComponent } from './navlogo.component';

describe('NavlogoComponent', () => {
  let component: NavlogoComponent;
  let fixture: ComponentFixture<NavlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
