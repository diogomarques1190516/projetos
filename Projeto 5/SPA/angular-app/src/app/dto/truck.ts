export class Truck {
    licensePlate: string;
    tare: number;
    loadCapacity: number;
    totalBatteryCapacity: number;
    autonomyWithMaxLoad: number;
    rechargeTime: number;

    constructor(licensePlate: string, tare: number,
        loadCapacity: number, totalBatteryCapacity: number,
        autonomyWithMaxLoad: number, rechargeTime
            : number) {
        this.licensePlate = licensePlate;
        this.tare = tare;
        this.loadCapacity = loadCapacity;
        this.totalBatteryCapacity = totalBatteryCapacity;
        this.autonomyWithMaxLoad = autonomyWithMaxLoad;
        this.rechargeTime = rechargeTime;
    }


}