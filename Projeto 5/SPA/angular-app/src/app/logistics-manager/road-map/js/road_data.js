
export default class RoadData{
    width;
    start;
    end;

    constructor(width,start,end
        // startX, startY, startZ, endX, endY, endZ
         ){
        this.width = width
        this.start = start
        this.end = end
       // this.start = new Coordinates(startX, startY, startZ)
        //this.end = new Coordinates(endX, endY, endZ)
    }
}