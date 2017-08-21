import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreResPerCategoryComponent } from './offre-res-per-category.component';

describe('OffreResPerCategoryComponent', () => {
  let component: OffreResPerCategoryComponent;
  let fixture: ComponentFixture<OffreResPerCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreResPerCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreResPerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
