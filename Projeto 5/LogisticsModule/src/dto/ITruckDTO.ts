import { LicensePlate } from "../domain/truck/licensePlate";

export default interface ITruckDTO {
    id: string;
    licensePlate: string;
    tare: number;
    loadCapacity: number;
    totalBatteryCapacity: number;
    autonomyWithMaxLoad: number;
    rechargeTime: number;
}
  