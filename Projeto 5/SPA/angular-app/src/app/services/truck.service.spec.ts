import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TruckService } from './truck.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Truck } from '../dto/truck';

describe('TruckService', () => {
  let service: TruckService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;
  let newTruck: Truck;

  const fakeTrucks: Truck[] =
    [{ licensePlate: "22-22-NA", tare: 7500, loadCapacity: 4500, totalBatteryCapacity: 80, autonomyWithMaxLoad: 80, rechargeTime: 60 },
    { licensePlate: "43-HT-47", tare: 7000, loadCapacity: 5000, totalBatteryCapacity: 78, autonomyWithMaxLoad: 90, rechargeTime: 50 }
    ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TruckService]
    });
    service = TestBed.inject(TruckService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    newTruck = new Truck(
      "22-22-NA", // licensePlate
      7500,       // tare   
      4500,       // loadCapacity
      80,         // totalBatteryCapacity
      80,         // autonomyWithMaxLoad
      60          // rechargeTime
    );

    service = new TruckService(httpClientSpy);

  });


  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a truck with the correct License Plate', () => {
    expect(newTruck.licensePlate).toEqual('22-22-NA');
  });

  it('should create a truck with the correct Tare Weight', () => {
    expect(newTruck.tare).toEqual(7500);
  });

  it('should create a truck with the correct Load Capacity', () => {
    expect(newTruck.loadCapacity).toEqual(4500);
  });

  it('should create a truck with the correct Total Battery Capacity', () => {
    expect(newTruck.totalBatteryCapacity).toEqual(80);
  });

  it('should create a truck with the correct Autonomy', () => {
    expect(newTruck.autonomyWithMaxLoad).toEqual(80);
  });

  it('should create a truck with the correct Recharge Time', () => {
    expect(newTruck.rechargeTime).toEqual(60);
  });

  it('should create a truck', () => {


    httpClientSpy.post.and.returnValue(of(newTruck));

    service.postTruck(newTruck.licensePlate, newTruck.tare, newTruck.loadCapacity,
      newTruck.totalBatteryCapacity, newTruck.autonomyWithMaxLoad, newTruck.rechargeTime).subscribe({
        next: truck => {
          expect(truck.licensePlate).toBe(newTruck.licensePlate);
          expect(truck.tare).toBe(newTruck.tare);
          expect(truck.loadCapacity).toBe(newTruck.loadCapacity);
          expect(truck.totalBatteryCapacity).toBe(newTruck.totalBatteryCapacity);
          expect(truck.autonomyWithMaxLoad).toBe(newTruck.autonomyWithMaxLoad);
          expect(truck.rechargeTime).toBe(newTruck.rechargeTime);
        },
        error: fail,
      });

    /* // pathService should have made one request to POST path
    const req = httpTestingController.expectOne(service.url);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newTruck);

    // Expect server to return the path after POST
    const expectedResponse = new HttpResponse(
      { status: 201, statusText: 'Created', body: newTruck });
    req.event(expectedResponse); */
  });



});
