export class City {
    address: string;
    alt: number;
    cityId: string;
    destination: string;
    lat: number;
    lng: number;

    constructor(address: string,
        alt: number,
        cityId: string,
        destination: string,
        lat: number,
        lng: number,) {
        this.address = address;
        this.alt = alt;
        this.cityId = cityId;
        this.destination = destination;
        this.lat = lat;
        this.lng = lng;

    }

}