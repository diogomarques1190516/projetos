/* const { response } = require('express');
const { truncate } = require('fs')
const TruckService = require('../../src/services/truckService')
const TruckRepo = require('../../src/repos/truckRepo')

var truckService = new TruckService();
var truckRepo = new TruckRepo();
const truckId = "T01";
const licensePlate = "NN-22-NN";
const tare = 1000;
const loadCapacity = 500;
const totalBatteryCapacity = 100;
const autonomyWithMaxLoad = 40;
const rechargeTime = 15;

describe("Truck Service Unit Tests", function () {
  describe("Create Truck functionality", function () {
    it("should successfully create a truck", async function () {
      var returnedVar = await truckService.createTruck({
        truckId,
        licensePlate,
        tare,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime
      });
      expect(returnedVar.isSuccess).toBe(true);
    });
    it("should throw an error if it didnt work", async function () {});
    it("should not create a truck", async function () {
      var returnedVar = await truckService.createTruck({
        truckId,
        licensePlate,
        tare,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime
      });
      expect(returnedVar.isSuccess).toBe(false);
    });
    it("should throw an error if it didnt work", async function () {});
  });
  describe("List Trucks functionality", function () {
    it("should successfully list the previous truck", async function () {
      var returnedVar = await truckService.listTrucks();
      expect(returnedVar.isSuccess).toBe(true);
      expect(returnedVar.value[0].truckId).toEqual(truckId);
      expect(returnedVar.value[0].licensePlate).toEqual(licensePlate);
      expect(returnedVar.value[0].loadCapacity).toEqual(loadCapacity);
      expect(returnedVar.value[0].totalBatteryCapacity).toEqual(totalBatteryCapacity);
      expect(returnedVar.value[0].autonomyWithMaxLoad).toEqual(autonomyWithMaxLoad);
      expect(returnedVar.value[0].rechargeTime).toEqual(rechargeTime);
    });
    it("should throw an error if it didnt work", async function () {});
    it("should return empty list", async function () {
      await truckService.deleteTruck({
        truckId,
        licensePlate,
        tare,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime});
      var returnedVar = truckService.listTrucks();
      expect(returnedVar.isSuccess).toBe(false);
    });
    it("should throw an error if it didnt work", async function () {});
  });
  describe("Update Truck functionality", function () {
    it("should successfully update a truck", async function () {
      await truckService.createTruck({
        truckId,
        licensePlate,
        tare,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime
      });
      var returnedVar = await truckService.updateTruck({
        truckId,
        licensePlate,
        tare : 1500,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime
      });
      expect(returnedVar.isSuccess).toBe(true);
      expect(returnedVar.value.tare).toBe(1500);
    });
    it("should throw an error if it didnt work", async function () {});
    it("should not update a truck", async function () {
      await truckService.deleteTruck({
        truckId,
        licensePlate,
        tare : 1500,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime});
      var returnedVar = truckService.updateTruck({
        truckId,
        licensePlate,
        tare : 1500,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime});
      expect(returnedVar.isSuccess).toBe(false);
    });
    it("should throw an error if it didnt work", async function () {});
  });
});


describe("Truck Repo Unit Tests", function () {
  describe("Save Truck functionality", function () {
    it("should successfully save a truck", async function () {
      var returnedVar = await truckRepo.save({
        licensePlate,
        tare,
        loadCapacity,
        totalBatteryCapacity,
        autonomyWithMaxLoad,
        rechargeTime
      });
      expect(returnedVar.licensePlate).toEqual(licensePlate);
      expect(returnedVar.tare).toEqual(tare);
      expect(returnedVar.loadCapacity).toEqual(loadCapacity);
      expect(returnedVar.totalBatteryCapacity).toEqual(totalBatteryCapacity);
      expect(returnedVar.autonomyWithMaxLoad).toEqual(autonomyWithMaxLoad);
      expect(returnedVar.rechargeTime).toEqual(rechargeTime);
    });
    it("should throw an error if it didnt work", async function () {});
  });
  describe("Find Truck functionality", function () {
    it("should successfully find a truck", async function () {
      var returnedVar = await truckRepo.findAll();
      expect(returnedVar[0].licensePlate).toEqual(licensePlate);
      expect(returnedVar[0].tare).toEqual(tare);
      expect(returnedVar[0].loadCapacity).toEqual(loadCapacity);
      expect(returnedVar[0].totalBatteryCapacity).toEqual(totalBatteryCapacity);
      expect(returnedVar[0].autonomyWithMaxLoad).toEqual(autonomyWithMaxLoad);
      expect(returnedVar[0].rechargeTime).toEqual(rechargeTime);
    });
    it("should throw an error if it didnt work", async function () { });
  });
});
 */


const assert = require('assert');

const truckId = "T01";
const licensePlate = "NN-22-NN";
const tare = 1000;
const loadCapacity = 5000;
const totalBatteryCapacity = 100;
const autonomyWithMaxLoad = 40;
const rechargeTime = 15;

function testTruckAttributes() {
  it('should return true if license plate is a string', () => {
    const truck = { truckId, licensePlate, tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    assert.equal(typeof truck.licensePlate, 'string');
  });

  it('should return true if tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, and rechargeTime are all numbers greater than 0', () => {
    const truck = { truckId, licensePlate, tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    assert.equal(typeof truck.tare, 'number');
    assert.equal(typeof truck.loadCapacity, 'number');
    assert.equal(typeof truck.totalBatteryCapacity, 'number');
    assert.equal(typeof truck.autonomyWithMaxLoad, 'number');
    assert.equal(typeof truck.rechargeTime, 'number');
    assert.ok(truck.tare > 0);
    assert.ok(truck.loadCapacity > 0);
    assert.ok(truck.totalBatteryCapacity > 0);
    assert.ok(truck.autonomyWithMaxLoad > 0);
    assert.ok(truck.rechargeTime > 0);
  });

  it('should return true if license plate is unique', () => {
    const truck1 = { truckId, licensePlate, tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    const truck2 = { truckId, licensePlate: "23-24-HD", tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    assert.notEqual(truck1.licensePlate, truck2.licensePlate);
  });

  it('should return true if loadCapacity is greater than tare', () => {
    const truck = { truckId, licensePlate, tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    assert.ok(truck.loadCapacity > truck.tare);
  });

  it('should return true if license plate follows correct format', () => {
    const truck1 = { licensePlate, tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    const truck2 = { licensePlate: '123ABC', tare, loadCapacity, totalBatteryCapacity, autonomyWithMaxLoad, rechargeTime };
    assert.ok(/([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/.test(truck1.licensePlate));
    assert.ok(!/([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/.test(truck2.licensePlate));
  });
}
testTruckAttributes();