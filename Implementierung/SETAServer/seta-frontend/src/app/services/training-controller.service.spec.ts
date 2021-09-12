import { TestBed } from '@angular/core/testing';

import { TrainingControllerService } from './training-controller.service';

describe('TrainingControllerService', () => {
  let service: TrainingControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
