import Coordinates from "./coordinates.js"
import RoadData from "./road_data.js"
import WarehouseData from "./warehouse_data.js"
//import { RoadData } from "./data.js";

export default class MapApi {
  //warehouses;
  //roads;

  constructor() {}

  loadWarehouses(callback) {
    let request = new XMLHttpRequest()
    request.withCredentials = false
    
    const json ='[{"id":"K01","designation":"kd","address":"hous 12, Port 123-2345","lat":8.4841,"lng":41.3821,"altitude":300,"radius":3,"rotation":36,"scale":3,"model":"./3dmodels/WarehouseModel/withDirt/Warehouse.fbx","isMainWarehouse":false},{"id":"M05","designation":"kd","address":"hous 12, Port 123-2345","lat":8.4441,"lng":41.4821,"altitude":200,"radius":2,"rotation":6,"scale":2,"model":"./3dmodels/WarehouseModel/withDirt/Warehouse.fbx","isMainWarehouse":false},{"id":"M04","designation":"k","address":"hous 12, Port 123-2345","lat":8.4841,"lng":41.4721,"altitude":1,"radius":1,"rotation":73.0,"scale":1,"model":"./3dmodels/WarehouseModel/withDirt/Warehouse.fbx","isMainWarehouse":false}]'
    //const json = '[{"id": "M01","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.2451, "lng": 40.9321, "altitude": 250, "radius": 2.5, "rotation": 73.0,  "scale": 2.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M02","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.6410, "lng": 41.0072, "altitude": 550, "radius": 1.5, "rotation": 27.0,  "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M03","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.7613, "lng": 42.1115, "altitude": 200, "radius": 2.0, "rotation": 12.0,  "scale": 1.5, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M04","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.6210, "lng": 41.2279, "altitude": 700, "radius": 1.5, "rotation": 15.0,  "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M05","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.6963, "lng": 41.1844, "altitude": 350, "radius": 5.0, "rotation": 0.0,   "scale": 3.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M06","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.4770, "lng": 40.8387, "altitude": 750, "radius": 1.5, "rotation": 45.0,  "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },  {"id": "M07","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.3304, "lng": 41.2052, "altitude": 0,   "radius": 1.0, "rotation": 45.0,  "scale": 0.5, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M08","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.6291, "lng": 41.1579, "altitude": 600, "radius": 1.5, "rotation": 0.0,   "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M09","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.7609, "lng": 41.3804, "altitude": 400, "radius": 3.0, "rotation": 270.0, "scale": 2.3, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M10","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.5483, "lng": 40.9268, "altitude": 100, "radius": 2.5, "rotation": 0.0,   "scale": 2.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M11","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.4738, "lng": 41.3431, "altitude": 650, "radius": 1.5, "rotation": 0.0,   "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M12","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.4907, "lng": 40.9005, "altitude": 300, "radius": 2.0, "rotation": 120.0, "scale": 1.5, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M13","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.5600, "lng": 41.3391, "altitude": 450, "radius": 2.0, "rotation": 0.0,   "scale": 1.5, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M14","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.3956, "lng": 40.8430, "altitude": 50, "radius":  1.5, "rotation": 0.0,   "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M15","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.4983, "lng": 41.1887, "altitude": 800, "radius": 1.0, "rotation": 135.0, "scale": 0.5, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M16","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.7479, "lng": 41.3517, "altitude": 150, "radius": 1.5, "rotation": 0.0,   "scale": 1.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  },{"id": "M17","designation": "test1","address": "hous 12, Port 123-2345","lat": 8.6118, "lng": 41.1239, "altitude": 500, "radius": 2.5, "rotation": 0.0,   "scale": 2.0, "model": "./3dmodels/WarehouseModel/withDirt/Warehouse.fbx"  }]';

    let list = JSON.parse(json)

        console.log(list)
        callback(
          list.map((obj) => {
            //We reduce the altitude so the slope are not so inclined
            let coords = new Coordinates(obj.lat, obj.lng, obj.altitude * 0.3)
            let coord = coords.convertToVector()
            return new WarehouseData(
              obj.id,
              coord,
              obj.radius,
              obj.rotation,
              obj.scale,
              obj.model
            )
          }))

  }
  loadRoads(warehouses, callback) {

    let json = '[{	 "distance": 53,	"time": 122,	   "extraTime": 0,		"energy": 42,	 "originId": "M04",	   "destinationId": "M05",	  "width": 5},{	 "distance": 53,	"time": 122,	   "extraTime": 0,		"energy": 42,	 "originId": "M05",	   "destinationId": "M06",	  "width": 7}]'
        //let json = '[{	 "distance": 53,	"time": 122,	   "extraTime": 0,		"energy": 42,	 "originId": "M01",	   "destinationId": "M02",	  "width": 5},{	 "distance": 44,	"time": 116,	   "extraTime": 0,		"energy": 35,	 "originId": "M01",	   "destinationId": "M07",	  "width": 4},{	 "distance": 92,	"time": 185,	   "extraTime": 53,		"energy": 74,	 "originId": "M01",	   "destinationId": "M09",	  "width": 7},{	 "distance": 29,	"time": 76,	   "extraTime": 0,		"energy": 23,	 "originId": "M01",	   "destinationId": "M12",	  "width": 4},{	 "distance": 22,	"time": 59,	   "extraTime": 0,		"energy": 18,	 "originId": "M01",	   "destinationId": "M14",	  "width": 6},{	 "distance": 28,	"time": 55,	   "extraTime": 0,		"energy": 22,	 "originId": "M02",	   "destinationId": "M03",	  "width": 6},{	 "distance": 73,	"time": 126,	   "extraTime": 33,		"energy": 58,	 "originId": "M11",	   "destinationId": "M14",	  "width": 4},{	 "distance": 43,	"time": 78,	   "extraTime": 0,		"energy": 34,	 "originId": "M02",	   "destinationId": "M14",	  "width": 6},{	 "distance": 34,	"time": 69,	   "extraTime": 0,		"energy": 27,	 "originId": "M02",	   "destinationId": "M06",	  "width": 6},{	 "distance": 19,	"time": 46,	   "extraTime": 0,		"energy": 15,	 "originId": "M03",	   "destinationId": "M04",	  "width": 5},{	 "distance": 46,	"time": 74,	   "extraTime": 0,		"energy": 37,	 "originId": "M03",	   "destinationId": "M06",	  "width": 4},{	 "distance": 43,	"time": 78,	   "extraTime": 0,		"energy": 34,	 "originId": "M04",	   "destinationId": "M10",	  "width": 6},{	 "distance": 60,	"time": 111,	   "extraTime": 0,		"energy": 48,	 "originId": "M04",	   "destinationId": "M14",	  "width": 4},{	 "distance": 75,	"time": 132,	   "extraTime": 35,		"energy": 60,	 "originId": "M06",	   "destinationId": "M16",	  "width": 4},{	 "distance": 30,	"time": 48,	   "extraTime": 0,		"energy": 24,	 "originId": "M05",	   "destinationId": "M09",	  "width": 15},{	 "distance": 37,	"time": 69,	   "extraTime": 0,		"energy": 30,	 "originId": "M05",	   "destinationId": "M10",	  "width": 15},{	 "distance": 73,	"time": 126,	   "extraTime": 33,		"energy": 58,	 "originId": "M06",	   "destinationId": "M13",	  "width": 6},{	 "distance": 28,	"time": 74,	   "extraTime": 0,		"energy": 22,	 "originId": "M07",	   "destinationId": "M11",	  "width": 4},{	 "distance": 20,	"time": 29,	   "extraTime": 0,		"energy": 16,	 "originId": "M07",	   "destinationId": "M15",	  "width": 3},{	 "distance": 50,	"time": 97,	   "extraTime": 0,		"energy": 40,	 "originId": "M08",	   "destinationId": "M14",	  "width": 7},{	 "distance": 42,	"time": 82,	   "extraTime": 0,		"energy": 34,	 "originId": "M08",	   "destinationId": "M12",	  "width": 4},{	 "distance": 64,	"time": 109,	   "extraTime": 24,		"energy": 51,	 "originId": "M09",	   "destinationId": "M10",	  "width": 4},{	 "distance": 34,	"time": 67,	   "extraTime": 0,		"energy": 27,	 "originId": "M11",	   "destinationId": "M17",	  "width": 3},{	 "distance": 34,	"time": 59,	   "extraTime": 0,		"energy": 27,	 "originId": "M11",	   "destinationId": "M16",	  "width": 5},{	 "distance": 66,	"time": 120,	   "extraTime": 0,		"energy": 53,	 "originId": "M12",	   "destinationId": "M13",	  "width": 3},{	 "distance": 21,	"time": 67,	   "extraTime": 0,		"energy": 17,	 "originId": "M13",	   "destinationId": "M15",	  "width": 5},{	 "distance": 30,	"time": 65,	   "extraTime": 0,		"energy": 24,	 "originId": "M16",	   "destinationId": "M17",	  "width": 5}]'
 
    let list = JSON.parse(json)

        console.log(list)
        let listt = list.map((obj) => {
          let orig = warehouses.find((el) => el.id == obj.originId)
          let dest = warehouses.find((el) => el.id == obj.destinationId)

          return new RoadData(obj.width / 10, orig, dest)
        })
        console.log(listt)
        callback(listt,warehouses)

   
  }

  loadBestRoute(warehouses,routes,callback){

    let json = '{ "cities": [{"address": null,"alt": 1.0,"cityId": "M04","destination": "Porto","lat": 2.0,"lng": 9.0 }, {"address": null,"alt": 1.0,"cityId": "M05","destination": "Villa Nova","lat": 2.0,"lng": 9.0},{"address": null,"alt": 1.0,"cityId": "M06","destination": "V","lat": 2.0,"lng": 9.0}],"necessaryTime": 73.96668533034715}'
    
    let list = JSON.parse(json).cities
    
      let newWarehouses = list.map((obj) => {
        
        return warehouses.find((el) => el.id == obj.cityId)
      })

      let newRoads = newWarehouses.map((obj,index) => {
        if(index+1==newWarehouses.length){
          return null
        }else{
          return routes.find((el) => ((el.start.id == obj.id && el.end.id == newWarehouses[index+1].id)||(el.end.id == obj.id && el.start.id == newWarehouses[index+1].id)))
        }
      }).filter((obj) =>obj !== null)


      callback(newWarehouses,newRoads)
  }
}
