import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConnectorsCardsComponent } from './home-connectors-cards.component';

describe('HomeConnectorsCardsComponent', () => {
  let component: HomeConnectorsCardsComponent;
  let fixture: ComponentFixture<HomeConnectorsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConnectorsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConnectorsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
