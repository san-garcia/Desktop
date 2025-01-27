import { TestBed } from '@angular/core/testing';

import { ArtistasServiceService } from './artistas-service.service';

describe('ArtistasServiceService', () => {
  let service: ArtistasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
