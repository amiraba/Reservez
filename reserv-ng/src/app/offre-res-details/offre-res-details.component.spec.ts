import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreResDetailsComponent } from './offre-res-details.component';

describe('OffreResDetailsComponent', () => {
  let component: OffreResDetailsComponent;
  let fixture: ComponentFixture<OffreResDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreResDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreResDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
