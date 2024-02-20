/// <reference types="cypress" />

import { Chance } from 'chance';
import { Input } from 'hammerjs';
const chance = new Chance();

describe('ElectricGO', () => {

  //Variable creation

  beforeEach(() => {
    cy.visit('http://localhost:4200/frontpage');
  })

  it('has a title and description', () => {
    cy.contains('EletricGO')
    cy.contains('Please Login to access more information');
  })

  it('log in correctly', () => {
    cy.contains('Log In').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:4200/login')
    })
    cy.contains('Choose a User');
    cy.contains('System Administrator');
    cy.contains('Warehouse Manager');
    cy.contains('Fleet Manager');
    cy.contains('Logistics Manager');
  })

  it('log in correctly warehouse manager', () => {
    cy.loginWarehouseManager();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:4200/profile/warehousemanager')
    })
    cy.contains('Warehouse');
    cy.contains('Delivery');
  })

  it('log in correctly fleet manager', () => {
    cy.loginFleetManager();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:4200/profile/fleetmanager')
    })
    cy.contains('Trucks');
  })

  it('log in correctly logistics manager', () => {
    cy.loginLogisticsManager();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:4200/profile/logisticsmanager')
    })
    cy.contains('Routes');
    cy.contains('Packagings');
    cy.contains('Road Map');
    cy.contains('Route Planning')
  })

  it('returns to front page when clicking title', () => {
    cy.loginWarehouseManager();
    cy.location().should((loc) => {
      expect(loc.href).to.not.eq('http://localhost:4200/frontpage')
    })
    cy.contains('EletricGO').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:4200/frontpage')
    })
  })

  it('shows create warehouse page correctly', () => {
    cy.loginWarehouseManager();
    cy.contains('Create a Warehouse').click({ force: true });
    cy.contains('Create Warehouse');
    cy.contains('Warehouse Identificator');
    cy.contains('Designation');
    cy.contains('Address');
    cy.contains('Latitude');
    cy.contains('Longitude');
    cy.contains('Altitude');
    cy.contains('Radius of Roundabout');
    cy.contains('Rotation of Warehouse (in degrees)');
    cy.contains('Scale of Warehouse');
    cy.contains('Warehouse Model');
    cy.get('input').should('have.length', 10);
  })

  it('shows list warehouses  page correctly', () => {
    cy.loginWarehouseManager();
    cy.contains('List the Warehouses').click({ force: true });
    cy.contains('List of Warehouses');
    cy.contains('Designation');
    cy.contains('Address');
    cy.contains('Latitude');
    cy.contains('Longitude');
    cy.contains('Altitude');
  })

  it('shows create delivery page correctly', () => {
    cy.loginWarehouseManager();
    cy.contains('Create a Delivery').click({ force: true });
    cy.get('input').should('have.length', 6);
    cy.contains('Create Delivery');
    cy.contains('Delivery Identificator');
    cy.contains('Delivery Date');
    cy.contains('Mass of Delivery (in kilos)');
    cy.contains('Warehouse Identificator');
    cy.contains('Time to Place Delivery (in minutes)');
    cy.contains('Time to Pick Up Delivery (in minutes)');
  })

  it('shows list deliveries  page correctly', () => {
    cy.loginWarehouseManager();
    cy.contains('List Deliveries').click({ force: true });
    cy.contains('List of Deliveries');
    cy.contains('Delivery Date');
    cy.contains('Mass of Delivery');
    cy.contains('Warehouse Identifier');
    cy.contains('Time To Place Delivery');
    cy.contains('Time To Pick Up Delivery');
  })

  it('shows create truck page correctly', () => {
    cy.loginFleetManager();
    cy.contains('Create a Truck').click({ force: true });
    cy.contains('Create Truck');
    cy.contains('License Plate');
    cy.contains('Tare');
    cy.contains('Total Battery Capacity');
    cy.contains('Recharge Time');
    cy.contains('Autonomy');
    cy.contains('Load Capacity');
    cy.get('input').should('have.length', 6);
  })

  it('shows list trucks  page correctly', () => {
    cy.loginFleetManager();
    cy.contains('List the Trucks').click({ force: true });
    cy.contains('List of Trucks');
    cy.contains('License Plate');
    cy.contains('Tare');
    cy.contains('Total Battery Capacity');
    cy.contains('Recharge Time');
    cy.contains('Autonomy');
    cy.contains('Load Capacity');
  })

  it('shows create route page correctly', () => {
    cy.loginLogisticsManager();
    cy.contains('Create Route').click({ force: true });
    cy.contains('Create Route');
    cy.contains('Distance');
    cy.contains('Time');
    cy.contains('Extra Time');
    cy.contains('Energy');
    cy.contains('Origin Id');
    cy.contains('Destination Id');
    cy.contains('Width');
    cy.get('input').should('have.length', 7);

  })

  it('shows list routes  page correctly', () => {
    cy.loginLogisticsManager();
    cy.contains('List Routes').click({ force: true });
    cy.contains('List of Routes');
    cy.contains('Distance');
    cy.contains('Time');
    cy.contains('Extra Time');
    cy.contains('Energy');
    cy.contains('Origin Id');
    cy.contains('Destination Id');
    cy.contains('Width');
  })

  it('shows create packaging page correctly', () => {
    cy.loginLogisticsManager();
    cy.contains('Create a Packaging').click({ force: true });
    cy.contains('Create Packaging');
    cy.contains('License Plate');
    cy.contains('X Position');
    cy.contains('Y Position');
    cy.contains('Z Position');
    cy.get('input').should('have.length', 4);
  })

  it('shows list packagings  page correctly', () => {
    cy.loginLogisticsManager();
    cy.contains('List the Packagings').click({ force: true });
    cy.contains('List of Packagings');
    cy.contains('License Plate');
    cy.contains('X Position');
    cy.contains('Y Position');
    cy.contains('Z Position');
  })

  it('shows route planning  page correctly', () => {
    cy.loginLogisticsManager();
    cy.contains('Route Planning').click({ force: true });
    cy.contains('Get Route Planning');
    cy.get('input').should('have.length', 1);
    cy.get('select').should('have.length', 1);
  })
})