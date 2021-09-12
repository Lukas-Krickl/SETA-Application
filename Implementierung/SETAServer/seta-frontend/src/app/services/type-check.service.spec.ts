import { TestBed } from '@angular/core/testing';

import { TypeCheckService } from './type-check.service';

describe('TypeCheckService', () => {
  let service: TypeCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
