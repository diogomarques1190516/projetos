import { TestBed } from '@angular/core/testing';

import { AuthGuardLogisticsService } from './auth-guard-logistics.service';

describe('AuthGuardLogisticsService', () => {
  let service: AuthGuardLogisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLogisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
