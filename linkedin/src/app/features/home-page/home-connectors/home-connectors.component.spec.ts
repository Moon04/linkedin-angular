import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConnectorsComponent } from './home-connectors.component';

describe('HomeConnectorsComponent', () => {
  let component: HomeConnectorsComponent;
  let fixture: ComponentFixture<HomeConnectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConnectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
