import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPeakComponent } from './account-peak.component';

describe('AccountPeakComponent', () => {
  let component: AccountPeakComponent;
  let fixture: ComponentFixture<AccountPeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
