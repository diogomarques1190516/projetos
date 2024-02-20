import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Delivery } from '../dto/delivery';

import { DeliveryService } from './delivery.service';

describe('DeliveryService', () => {
  let service: DeliveryService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;
  let newDelivery: Delivery;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeliveryService]
    });
    service = TestBed.inject(DeliveryService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

    newDelivery = new Delivery(
      "2103/1",     // deliveryId
      "22-11-2022", // deliveryDate
      500,          // massOfDelivery
      "M01",        // warehouseId
      5,            // timeToPlaceDelivery
      5,            // timeToPickUpDelivery
    );

    service = new DeliveryService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new delivery', () => {

    httpClientSpy.post.and.returnValue(of(newDelivery));

    service.postDelivery(newDelivery.deliveryId, newDelivery.deliveryDate, newDelivery.massOfDelivery, newDelivery.warehouseId, newDelivery.timeToPlaceDelivery, newDelivery.timeToPickUpDelivery).subscribe(
      {
        next: delivery => {
          expect(delivery.deliveryId).toBe(newDelivery.deliveryId);
          expect(delivery.deliveryDate).toBe(newDelivery.deliveryDate);
          expect(delivery.massOfDelivery).toBe(newDelivery.massOfDelivery);
          expect(delivery.warehouseId).toBe(newDelivery.warehouseId);
          expect(delivery.timeToPlaceDelivery).toBe(newDelivery.timeToPlaceDelivery);
          expect(delivery.timeToPickUpDelivery).toBe(newDelivery.timeToPickUpDelivery);

        },
        error: fail,
      }
    );

  }
  );

});
