import * as THREE from "three";

export default class Coordinates {

    latitude;
    longitude;
    altitude;
  
    constructor(latitude,longitude,altitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.altitude = altitude;
    }
  
    convertToVector() {
        //TODO: conversion
        var x = (100 / 0.5162) * (this.latitude - 8.2451) - 50
        var y = (100 / (42.1115 - 40.8387) ) * (this.longitude - 40.8387) - 50
        var z = (50 / 800) * this.altitude
        console.log("Cordenada x:" + x)
        console.log("Cordenada y:" + y)
        console.log("Coordenada z:" + z)
        return new THREE.Vector3(x, y, z);
    }
  
  }