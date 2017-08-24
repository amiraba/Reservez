import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMesReservComponent } from './client-mes-reserv.component';

describe('ClientMesReservComponent', () => {
  let component: ClientMesReservComponent;
  let fixture: ComponentFixture<ClientMesReservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMesReservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMesReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
