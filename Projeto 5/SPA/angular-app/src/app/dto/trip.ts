import { City } from "./city";

export class Trip {
    cities: City[];
    truck:string;
    necessaryTime: number;

    constructor(cities: City[],
        necessaryTime:number,
        truck:string) {
        this.cities = cities;
        this.truck = truck;
        this.necessaryTime = necessaryTime;
    }

}