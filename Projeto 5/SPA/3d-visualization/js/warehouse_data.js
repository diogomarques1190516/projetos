
export default class WarehouseData{
    id;
    coord;
    radius;
    rotation;
    scale;
    model;

    constructor(id,coord,rad,rot,sca,mod) {
        this.id = id
        this.coord = coord
        this.radius = rad
        this.rotation = rot
        this.scale = sca
        this.model = mod
    }
}
