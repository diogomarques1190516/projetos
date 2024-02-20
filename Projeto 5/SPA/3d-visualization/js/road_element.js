import * as THREE from "../../three.js-master/build/three.module.js"
/*
 * parameters = {
 *  begining: Vector3,
 *  end: Vector3,
 *  largura: Float,
 *  p:Float,
 *  alpha: Float
 * }
 */

export default class RoadElement extends THREE.Mesh {
  constructor(parameters) {
    super()

    for (const [key, value] of Object.entries(parameters)) {
      Object.defineProperty(this, key, {
        value: value,
        writable: true,
        configurable: true,
        enumerable: true,
      })
    }
    console.log(this.begining.x)

    let begining = this.begining
    let end = this.end

    let centerX = (begining.x + end.x) / 2
    let centerY = (begining.y + end.y) / 2
    let centerZ = (begining.z + end.z) / 2

    let hij = end.z - begining.z
    let sij = Math.sqrt(Math.pow(this.p, 2) + Math.pow(hij, 2))
    console.log("x " + centerX)
    console.log("y " + centerY)
    this.position.set(centerX, centerY, centerZ)

    let inclinacao = Math.atan(hij / this.p)

    this.rotateZ(this.alpha)
    this.rotateY(-inclinacao)

    //const axesHelper = new THREE.AxesHelper( 5 );
    //this.add( axesHelper );

    this.geometry = new THREE.PlaneGeometry(sij, this.largura)
    var loader = new THREE.TextureLoader()

    var texture = loader.load(
      "img/road.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.offset.set(0, 0)
        texture.repeat.set(this.p / 2, 2)
      }.bind(this)
    )

    this.material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    })

    // Set the material of the object to receive shadows
    this.material.receiveShadow = true
    // Set the material of the object to cast shadows
    this.material.castShadow = true
  }
}
