import { TestBed, inject } from '@angular/core/testing';

import { OffreResService } from './offre-res.service';

describe('OffreResService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffreResService]
    });
  });

  it('should be created', inject([OffreResService], (service: OffreResService) => {
    expect(service).toBeTruthy();
  }));
});
