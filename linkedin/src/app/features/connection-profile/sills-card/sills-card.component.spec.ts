import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillsCardComponent } from './sills-card.component';

describe('SillsCardComponent', () => {
  let component: SillsCardComponent;
  let fixture: ComponentFixture<SillsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
