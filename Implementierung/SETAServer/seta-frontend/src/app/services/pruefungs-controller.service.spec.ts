import { TestBed } from '@angular/core/testing';

import { PruefungsControllerService } from './pruefungs-controller.service';

describe('PruefungsControllerService', () => {
  let service: PruefungsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruefungsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
