import { TestBed } from '@angular/core/testing';

import { ModelConverterService } from './model-converter.service';

describe('ModelConverterService', () => {
  let service: ModelConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
