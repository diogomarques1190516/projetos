import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Warehouse } from '../dto/warehouse';

import { WarehouseService } from './warehouse.service';

describe('WarehouseService', () => {
  let service: WarehouseService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpTestingController: HttpTestingController;
  let newWarehouse: Warehouse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WarehouseService]
    });
    service = TestBed.inject(WarehouseService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    newWarehouse = new Warehouse(
      "W01",                                                // warehouseId
      "Maia Norte",                                         // designation   
      "Av Frederico Ulrich 2",                              // address
      123.12,                                               // lat
      15.02,                                                // lon
      250,                                                  // altitude
      4.5,                                                  // radius
      73.0,                                                 // lat
      4.0,                                                  // lon
      "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx",   // model
      false,                                                // ismainWarehouse
    );

    service = new WarehouseService(httpClientSpy);

  });


  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('should create a warehouse', () => {


    httpClientSpy.post.and.returnValue(of(newWarehouse));

    service.postWarehouse(newWarehouse.warehouseId,
      newWarehouse.designation,
      newWarehouse.address,
      newWarehouse.lat,
      newWarehouse.lng,
      newWarehouse.altitude,
      newWarehouse.radius,
      newWarehouse.rotation,
      newWarehouse.scale,
      newWarehouse.model,
    ).subscribe({
      next: warehouse => {
        expect(warehouse.warehouseId).toBe(newWarehouse.warehouseId);
        expect(warehouse.designation).toBe(newWarehouse.designation);
        expect(warehouse.address).toBe(newWarehouse.address);
        expect(warehouse.lat).toBe(newWarehouse.lat);
        expect(warehouse.lng).toBe(newWarehouse.lng);
        expect(warehouse.altitude).toBe(newWarehouse.altitude);
        expect(warehouse.radius).toBe(newWarehouse.radius);
        expect(warehouse.rotation).toBe(newWarehouse.rotation);
        expect(warehouse.scale).toBe(newWarehouse.scale);
        expect(warehouse.model).toBe(newWarehouse.model);
      },
      error: fail,
    });


  });


});
