export class Delivery {
    deliveryId: string;
    deliveryDate: string;
    massOfDelivery: number;
    warehouseId: string;
    timeToPlaceDelivery: number;
    timeToPickUpDelivery: number;

    constructor(
        deliveryId: string,
        deliveryDate: string,
        massOfDelivery: number,
        warehouseId: string,
        timeToPlaceDelivery: number,
        timeToPickUpDelivery: number) {
        this.deliveryId = deliveryId;
        this.deliveryDate = deliveryDate;
        this.massOfDelivery = massOfDelivery;
        this.warehouseId = warehouseId;
        this.timeToPlaceDelivery = timeToPlaceDelivery;
        this.timeToPickUpDelivery = timeToPickUpDelivery;
    }
}