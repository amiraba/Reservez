import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserver2hotelComponent } from './reserver2hotel.component';

describe('Reserver2hotelComponent', () => {
  let component: Reserver2hotelComponent;
  let fixture: ComponentFixture<Reserver2hotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reserver2hotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reserver2hotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
