import { City } from "./city";
import { Trip } from "./trip";

export class Planning {
    trips: Array<Trip>;
    totalTime: number;

    constructor(trips: Array<Trip>, totalTime: number) {
        this.trips = trips;
        this.totalTime = totalTime;
    }


}