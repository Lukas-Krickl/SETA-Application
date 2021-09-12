import { TestBed } from '@angular/core/testing';

import { UserMgtService } from './user-mgt.service';

describe('UserMgtService', () => {
  let service: UserMgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
