import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserver2restaurantComponent } from './reserver2restaurant.component';

describe('Reserver2restaurantComponent', () => {
  let component: Reserver2restaurantComponent;
  let fixture: ComponentFixture<Reserver2restaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reserver2restaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reserver2restaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
