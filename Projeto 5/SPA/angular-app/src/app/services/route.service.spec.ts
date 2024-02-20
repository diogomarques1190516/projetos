import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouteService } from './route.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Route } from '../dto/route';

describe('RouteService', () => {
  let service: RouteService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;
  let newRoute: Route;

  const fakeRoutes: Route[] =
    [{ distance: 5, time: 5, extraTime: 5, energy: 5, originId: "1", destinationId: "2", width: 2 },
    { distance: 5, time: 5, extraTime: 5, energy: 5, originId: "1", destinationId: "2", width: 2 }
    ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RouteService]
    });
    service = TestBed.inject(RouteService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

    newRoute = new Route(
      53, // distance
      122,       // time
      0,       // extraTime
      42,         // energy
      "M01",         // originId
      "M02",          // descriptionId
      5          // width
    );

    service = new RouteService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new route', () => {

    httpClientSpy.post.and.returnValue(of(newRoute));

    service.postRoutes(newRoute.distance, newRoute.time, newRoute.extraTime, newRoute.energy, newRoute.originId, newRoute.destinationId, newRoute.width).subscribe(
      {
        next: route => {
          expect(route.distance).toBe(newRoute.distance);
          expect(route.time).toBe(newRoute.time);
          expect(route.extraTime).toBe(newRoute.extraTime);
          expect(route.energy).toBe(newRoute.energy);
          expect(route.originId).toBe(newRoute.originId);
          expect(route.destinationId).toBe(newRoute.destinationId);
          expect(route.width).toBe(newRoute.width);

        },
        error: fail,
      }
    );

  }
  );

});