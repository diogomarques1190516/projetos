import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Packaging } from '../dto/packaging';
import { PackagingService } from './packaging.service';

describe('PackagingService', () => {
  let service: PackagingService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;
  let newPackaging: Packaging
  const fakePackagings: Packaging[] =
    [{ xPosition: 5, yPosition: 5, zPosition: 5, licensePlate: "22-22-NA" },
    { xPosition: 6, yPosition: 15, zPosition: 6, licensePlate: "22-22-EU" }
    ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PackagingService]
    });
    service = TestBed.inject(PackagingService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    newPackaging = new Packaging(
      5,            // xPosition
      5,            // yPosition   
      5,            // zPosition
      "22-22-NA",   // licensePlate
    );

    service = new PackagingService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new packaging', () => {

    httpClientSpy.post.and.returnValue(of(newPackaging));

    service.postPackaging(newPackaging.xPosition, newPackaging.yPosition, newPackaging.zPosition, newPackaging.licensePlate).subscribe(
      {
        next: packaging => {
          expect(packaging.xPosition).toBe(newPackaging.xPosition);
          expect(packaging.yPosition).toBe(newPackaging.yPosition);
          expect(packaging.zPosition).toBe(newPackaging.zPosition);
          expect(packaging.licensePlate).toBe(newPackaging.licensePlate);
        },
        error: fail,
      }
    );

  }
  );

});