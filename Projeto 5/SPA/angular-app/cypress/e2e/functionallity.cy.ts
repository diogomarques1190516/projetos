/// <reference types="cypress" />

import { Chance } from 'chance';
import { add } from 'cypress/types/lodash';
import { Input } from 'hammerjs';
import { DisplayContainerComponent } from 'igniteui-angular/lib/directives/for-of/display.container';
const chance = new Chance();


describe('ElectricGOFunctionallity', () => {

  const serverUrl='https://spalapr5.azurewebsites.net'

  

  //WAREHOUSE DATA
  const warehouseId = chance.string({ length: 3, casing: 'upper', alpha: true, numeric: true });
  const warehouseId2 = chance.string({ length: 3, casing: 'upper', alpha: true, numeric: true });
  const designation = chance.state({ full: true });
  const address = chance.address();
  const latitude = chance.altitude({ max: 90 });
  const longitude = chance.altitude({ max: 180 });
  const altitude = chance.altitude({ max: 400 });
  const radius = chance.natural({ min: 2, max: 6 });
  const rotation = chance.floating({ min: 0, max: 360 });;
  const scale = radius - 0.4;
  const model = './3dmodels/WarehouseModel/withDirt/Warehouse.fbx';

  //DELIVERY DATA
  const deliveryId = chance.string({ length: 6, casing: 'upper', alpha: true, numeric: true });
  const deliveryDate = '15-12-2022';
  const massOfDelivery = chance.natural({ min: 100, max: 500 });
  const timeToPlaceDelivery = chance.natural({ min: 5, max: 40 });
  const timeToPickUpDelivery = chance.natural({ min: 5, max: 40 });

  //TRUCK DATA
  const licensePlate = '11-13-NN';
  const tare = chance.natural({ min: 5000, max: 8000 });
  const totalBatteryCapacity = chance.natural({ min: 60, max: 180 });
  const rechargeTime = chance.natural({ min: 30, max: 60 });
  const autonomyWithMaxLoad = chance.natural({ min: 60, max: 180 });
  const loadCapacity = chance.natural({ min: 1000, max: 7000 });

  //ROUTE DATA
  const distance = chance.natural({ min: 10, max: 100 });
  const time = distance * 1.2;
  const extraTime = chance.natural({ min: 0, max: 5 });
  const energy = distance * 0.8;
  const width = chance.floating({ min: 1, max: 5 });

  //PACKAGING DATA
  const xPosition = chance.floating({ min: 1, max: 5 });
  const yPosition = chance.floating({ min: 1, max: 5 });
  const zPosition = chance.floating({ min: 1, max: 5 });

  beforeEach(() => {
    cy.visit(`${serverUrl}/frontpage`);
  })
/*
     it('creates warehouse correctly', () => {
      cy.loginWarehouseManager();
      cy.contains('Create a Warehouse').click({force:true});
      cy.get('input[name=warehouseId]').type(warehouseId);
      cy.get('input[name=designation]').type(designation);
      cy.get('input[name=address]').type(address);
      cy.get('input[name=latitude]').type(latitude.toString());
      cy.get('input[name=longitude]').type(longitude.toString());
      cy.get('input[name=altitude]').type(altitude.toString());
      cy.get('input[name=radius]').type(radius.toString());
      cy.get('input[name=rotation]').type(rotation.toString());
      cy.get('input[name=scale]').type(scale.toString());
      cy.get('input[name=warehouseModel]').type(model);
      cy.get('button').click();
      cy.wait(2000);
      cy.contains('Warehouse created with success');
    })
  
    it('creates warehouse with error', () => {
      cy.loginWarehouseManager();
      cy.contains('Create a Warehouse').click({force:true});
      cy.get('input[name=warehouseId]').type(warehouseId);
      cy.get('button').click();
      cy.contains('Error creating the Warehouse');
    })
  

    
    it('list warehouses correctly', () => {
      cy.loginWarehouseManager();
      cy.contains('List the Warehouses').click({force:true});
      cy.contains(designation);
      cy.contains(address);
      cy.contains(latitude);
      cy.contains(longitude);
      cy.contains(altitude);
    })
   
    it('creates delivery correctly', () => {
      cy.loginWarehouseManager();
      cy.contains('Create a Delivery').click({force:true});
      cy.get('input[name=deliveryId]').type(deliveryId);
      cy.get('input[name=deliveryDate]').type(deliveryDate);
      cy.get('input[name=massOfDelivery]').type(massOfDelivery.toString());
      cy.get('input[name=warehouseId]').type(warehouseId);
      cy.get('input[name=timeToPlaceDelivery]').type(timeToPlaceDelivery.toString());
      cy.get('input[name=timeToPickUpDelivery]').type(timeToPickUpDelivery.toString());
      cy.get('button').click();
      cy.wait(2000);
      cy.contains('Delivery created with success');
    })
  
    it('creates delivery with error', () => {
      cy.loginWarehouseManager();
      cy.contains('Create a Delivery').click({force:true});
      cy.get('input[name=deliveryId]').type(deliveryId);
      cy.get('button').click();
      cy.contains('Error creating the Delivery');    
    })
  */
    it('list deliveries correctly', () => {
      cy.loginWarehouseManager();
      cy.contains('List Deliveries').click({force:true});
      cy.contains(deliveryDate);
      cy.contains(massOfDelivery);
      cy.contains(warehouseId);
      cy.contains(timeToPickUpDelivery);
      cy.contains(timeToPlaceDelivery);
    })
  /*
    it('creates truck correctly', () => {
      cy.loginFleetManager();
      cy.contains('Create a Truck').click({force:true});
      cy.get('input[name=licensePlate]').type(licensePlate);
      cy.get('input[name=tare]').type(tare.toString());
      cy.get('input[name=totalBatteryCapacity]').type(totalBatteryCapacity.toString());
      cy.get('input[name=rechargeTime]').type(rechargeTime.toString());
      cy.get('input[name=autonomyWithMaxLoad]').type(autonomyWithMaxLoad.toString());
      cy.get('input[name=loadCapacity]').type(loadCapacity.toString());
      cy.get('button').click();
      cy.wait(2000);
      cy.contains('Truck created with success');
    })
  
    it('creates truck with error', () => {
      cy.loginFleetManager();
      cy.contains('Create a Truck').click({force:true});
      cy.get('input[name=licensePlate]').type(licensePlate);
      cy.get('button').click();
      cy.contains('Error creating the Truck');
    })
  
    it('list trucks correctly', () => {
      cy.loginFleetManager();
      cy.contains('List the Trucks').click({force:true});
      cy.contains(licensePlate);
      cy.contains(tare);
      cy.contains(loadCapacity);
      cy.contains(rechargeTime);
      cy.contains(autonomyWithMaxLoad);
      cy.contains(totalBatteryCapacity);
    })
  
    it('creates route correctly', () => {
      cy.loginLogisticsManager();
      cy.contains('Create Route').click({force:true});
      cy.get('input[name=distance]').type(distance.toString());
      cy.get('input[name=time]').type(time.toString());
      cy.get('input[name=extraTime]').type(extraTime.toString());
      cy.get('input[name=energy]').type(energy.toString());
      cy.get('input[name=originId]').type(warehouseId);
      cy.get('input[name=destinationId]').type(warehouseId2);
      cy.get('input[name=width]').type(width.toString());
      cy.get('button').click();
      cy.wait(2000);
      cy.contains('Route created with success');
    })
  
    it('creates route with error', () => {
      cy.loginLogisticsManager();
      cy.contains('Create Route').click({force:true});
      cy.get('input[name=distance]').type(distance.toString());
      cy.get('button').click();
      cy.contains('Error creating the Route');
    })
  
    it('list routes correctly', () => {
      cy.loginLogisticsManager();
      cy.contains('List Routes').click({force:true});
      cy.contains(distance);
      cy.contains(time);
      cy.contains(extraTime);
      cy.contains(energy);
      cy.contains(warehouseId);
      cy.contains(warehouseId2);
      cy.contains(width);
    })
  
    it('creates packaging correctly', () => {
      cy.loginLogisticsManager();
      cy.contains('Create a Packaging').click({force:true});
      cy.get('input[name=licensePlate]').type(licensePlate);
      cy.get('input[name=xPosition]').type(xPosition.toString());
      cy.get('input[name=yPosition]').type(yPosition.toString());
      cy.get('input[name=zPosition]').type(zPosition.toString());
      cy.get('button').click();
      cy.wait(2000);
      cy.contains('Packaging created with success');
    })
  
    it('creates packaging with error', () => {
      cy.loginLogisticsManager();
      cy.contains('Create a Packaging').click({force:true});
      cy.get('input[name=licensePlate]').type(licensePlate);
      cy.get('button').click();
      cy.contains('Error creating the Packaging');
    })
  
    it('list packagings correctly', () => {
      cy.loginLogisticsManager();
      cy.contains('List the Packagings').click({force:true});
      cy.contains(licensePlate);
      cy.contains(xPosition);
      cy.contains(yPosition);
      cy.contains(zPosition);
    }) */

  it('It goes to frontpage if you are not logged and accessing create warehouse', () => {
    cy.visit(`${serverUrl}/profile/warehousemanager/createwarehouse`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing list warehouse', () => {
    cy.visit(`${serverUrl}/profile/warehousemanager/listwarehouse`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing inhibit warehouse', () => {
    cy.visit(`${serverUrl}/profile/warehousemanager/inhibitwarehouse`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing create delivery', () => {
    cy.visit(`${serverUrl}/profile/warehousemanager/createdeliveries`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing list deliveries', () => {
    cy.visit(`${serverUrl}/profile/warehousemanager/listdeliveries`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing create account', () => {
    cy.visit(`${serverUrl}/profile/systemadmin/createaccount`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing canceling account', () => {
    cy.visit(`${serverUrl}/profile/systemadmin/cancelaccount`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing create truck', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/createtruck`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing list truck', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/createtruck`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing create truck', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/listtrucks`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing inhibit truck', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/inhibittruck`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing create route', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/createroute`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing list routes', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/listroutes`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing create packaging', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/createpackaging`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing list packagings', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/listpackagings`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing road map', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/roadmap`);
    cy.shouldRedirect()
  })

  it('It goes to frontpage if you are not logged and accessing Route Planning for one truck', () => {
    cy.visit(`${serverUrl}/profile/logisticsmanager/routeplanningone`);
    cy.shouldRedirect()
  })


})