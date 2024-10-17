import { TestBed } from '@angular/core/testing';

import { FaenaService } from './faena.service';

describe('FaenaService', () => {
  let service: FaenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
