import { LicensePlate } from "../domain/truck/licensePlate";
import { TruckId } from "../domain/truck/truckId";

export interface ITruckPersistence {
    domainId: number;
    licensePlate: string;
    tare: number;
    loadCapacity: number;
    totalBatteryCapacity: number;
    autonomyWithMaxLoad: number;
    rechargeTime: number;
}