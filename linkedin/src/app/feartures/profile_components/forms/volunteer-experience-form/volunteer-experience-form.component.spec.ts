import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerExperienceFormComponent } from './volunteer-experience-form.component';

describe('VolunteerExperienceFormComponent', () => {
  let component: VolunteerExperienceFormComponent;
  let fixture: ComponentFixture<VolunteerExperienceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerExperienceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
