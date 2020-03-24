import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstsCardComponent } from './intersts-card.component';

describe('InterstsCardComponent', () => {
  let component: InterstsCardComponent;
  let fixture: ComponentFixture<InterstsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterstsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
