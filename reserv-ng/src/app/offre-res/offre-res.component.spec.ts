import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreResComponent } from './offre-res.component';

describe('OffreResComponent', () => {
  let component: OffreResComponent;
  let fixture: ComponentFixture<OffreResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
