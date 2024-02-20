import * as THREE from "../../three.js-master/build/three.module.js"
import { FBXLoader } from "../../three.js-master/examples/jsm/loaders/FBXLoader.js"

export default class WarehouseLoader {
  constructor(scene) {
    this.scene = scene
  }

  addWarehouse(position, scale, rotation, model) {
    const fbxLoader = new FBXLoader()
    fbxLoader.load(
      model,
      (object) => {
        object.scale.set(scale, scale, scale),
          object.position.set(position.x, position.y, position.z + 0.02)
        object.rotateX(Math.PI / 2)
        object.rotateY((Math.PI / 180) * rotation)

        object.traverse(function (node) {
          if (node.isMesh) node.castShadow = true
          node.receiveShadow = true
        })
        /*         object.castShadow = true
        object.receiveShadow = true */
        this.scene.add(object)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
