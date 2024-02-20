export class Route {
    distance: number;
    time: number;
    extraTime: number;
    energy: number;
    originId: string;
    destinationId: string;
    width: number;

    constructor(distance: number,
        time: number,
        extraTime: number,
        energy: number,
        originId: string,
        destinationId: string,
        width: number) {
        this.distance = distance;
        this.time = time;
        this.extraTime = extraTime;
        this.energy = energy;
        this.originId = originId;
        this.destinationId = destinationId;
        this.width = width;
    }
}