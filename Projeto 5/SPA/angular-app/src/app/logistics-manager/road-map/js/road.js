import * as THREE from "./../../../../../../three.js-master/build/three.module.js";
import RoadElement from "./road_element.js";

/*
 * parameters = {
 *  begining: Vector3,
 *  end: Vector3,
 *
 *  width: Float,
 * radius1: Float,
 * radius2: Float,
 * }
 */

export default class Road extends THREE.Group {
  constructor(parameters) {
    super();

    for (const [key, value] of Object.entries(parameters)) {
      Object.defineProperty(this, key, {
        value: value,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }

    let xi = this.begining.x,
      yi = this.begining.y,
      zi = this.begining.z;
    let xj = this.end.x,
      yj = this.end.y,
      zj = this.end.z;

    const K_LIGACAO = 1.5;
    const largura = this.width;
    let alpha = Math.atan2(yj - yi, xj - xi);

    //BEGINING PART
    let si = K_LIGACAO * this.radius1;
    let startSlopeX = xi + si * Math.cos(alpha);
    let startSlopeY = yi + si * Math.sin(alpha);

    let roadElement1 = new RoadElement({
      begining: new THREE.Vector3(xi, yi, zi),
      end: new THREE.Vector3(startSlopeX, startSlopeY, zi),
      largura: largura,
      p: si,
      alpha: alpha
    });
    this.add(roadElement1);

    //END PART
    let sj = K_LIGACAO * this.radius2;
    let endSlopeX = xj - sj * Math.cos(alpha);
    let endSlopeY = yj - sj * Math.sin(alpha);

    let roadElement3 = new RoadElement({
      begining: new THREE.Vector3(endSlopeX, endSlopeY, zj),
      end: new THREE.Vector3(xj, yj, zj),
      largura: largura,
      p: sj,
      alpha: alpha
    });
    this.add(roadElement3);

    //SLOPE PART

    let pij = Math.sqrt(Math.pow(xj - xi, 2) + Math.pow(yj - yi, 2)) - si - sj;
    let roadElement2 = new RoadElement({
      begining: new THREE.Vector3(startSlopeX, startSlopeY, zi),
      end: new THREE.Vector3(endSlopeX, endSlopeY, zj),
      largura: largura,
      p: pij,
      alpha: alpha
    });
    this.add(roadElement2);
  }
}
