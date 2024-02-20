export class Warehouse {
    warehouseId: string;
    designation: string;
    address: string;
    lat: number;
    lng: number;
    altitude: number;
    radius: number;
    rotation: number;
    scale: number;
    model: string;
    isMainWarehouse: boolean;

    constructor(warehouseId: string,
        designation: string,
        address: string,
        lat: number,
        lng: number,
        altitude: number,
        radius: number,
        rotation: number,
        scale: number,
        model: string,
        isMainWarehouse: boolean) {
        this.warehouseId = warehouseId;
        this.designation = designation;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.altitude = altitude;
        this.radius = radius;
        this.rotation = rotation;
        this.scale = scale;
        this.model = model;
        this.isMainWarehouse = isMainWarehouse;
    }

}