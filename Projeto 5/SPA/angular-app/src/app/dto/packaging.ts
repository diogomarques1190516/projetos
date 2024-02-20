export class Packaging {
    xPosition: number;
    yPosition: number;
    zPosition: number;
    licensePlate: string;

    constructor(xPosition: number,
        yPosition: number,
        zPosition: number,
        licensePlate: string) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.zPosition = zPosition;
        this.licensePlate = licensePlate;
    }

}