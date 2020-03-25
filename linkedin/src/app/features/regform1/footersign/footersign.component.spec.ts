import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersignComponent } from './footersign.component';

describe('FootersignComponent', () => {
  let component: FootersignComponent;
  let fixture: ComponentFixture<FootersignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
