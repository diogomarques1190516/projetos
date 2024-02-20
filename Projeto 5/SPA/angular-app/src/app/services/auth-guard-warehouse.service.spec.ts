import { TestBed } from '@angular/core/testing';

import { AuthGuardWarehouseService } from './auth-guard-warehouse.service';

describe('AuthGuardWarehouseService', () => {
  let service: AuthGuardWarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardWarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
