import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfooterComponent } from './lfooter.component';

describe('LfooterComponent', () => {
  let component: LfooterComponent;
  let fixture: ComponentFixture<LfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LfooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
