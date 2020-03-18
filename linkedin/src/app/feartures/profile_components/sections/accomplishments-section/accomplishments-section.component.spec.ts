import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentsSectionComponent } from './accomplishments-section.component';

describe('AccomplishmentsSectionComponent', () => {
  let component: AccomplishmentsSectionComponent;
  let fixture: ComponentFixture<AccomplishmentsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomplishmentsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishmentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
