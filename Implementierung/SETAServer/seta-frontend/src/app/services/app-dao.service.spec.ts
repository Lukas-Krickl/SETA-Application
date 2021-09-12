import { TestBed } from '@angular/core/testing';

import { AppDaoService } from './app-dao.service';

describe('AppDaoService', () => {
  let service: AppDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
