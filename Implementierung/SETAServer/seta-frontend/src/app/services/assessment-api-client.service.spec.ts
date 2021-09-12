import { TestBed } from '@angular/core/testing';

import { AssessmentApiClientService } from './assessment-api-client.service';

describe('AssessmentApiClientService', () => {
  let service: AssessmentApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
