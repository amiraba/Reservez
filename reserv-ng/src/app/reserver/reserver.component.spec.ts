import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverComponent } from './reserver.component';

describe('ReserverComponent', () => {
  let component: ReserverComponent;
  let fixture: ComponentFixture<ReserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
