import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Planning } from '../dto/planning';

import { PlanningService } from './planning.service';

describe('PlanningService', () => {
  let service: PlanningService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlanningService]
    });
    service = TestBed.inject(PlanningService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

    service = new PlanningService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
