import { TestBed } from '@angular/core/testing';

import { UsersDetailsListService } from './users-details-list.service';

describe('UsersDetailsListService', () => {
  let service: UsersDetailsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDetailsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
