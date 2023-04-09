import { TestBed } from '@angular/core/testing';

import { ManagersDetailsListService } from './managers-details-list.service';

describe('ManagersDetailsListService', () => {
  let service: ManagersDetailsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagersDetailsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
