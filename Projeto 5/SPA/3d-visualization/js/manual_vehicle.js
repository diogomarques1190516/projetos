import * as THREE from "../../three.js-master/build/three.module.js";
import Speeds from "./speeds.js"
import { FBXLoader } from "../../three.js-master/examples/jsm/loaders/FBXLoader.js"


export default class ManualVehicle {
    constructor(parameters){
       
        for (const [key, value] of Object.entries(parameters)) {
            Object.defineProperty(this, key, { value: value, writable: true, configurable: true, enumerable: true });
        }
        
        console.log("this.begining.x");
        //const begining = this.warehouses[0];
        this.timer =0
        const ALTURA_PERSONAGEM = 0.3;
        const width = 0.6;  // ui: width
        const height = 0.3;  // ui: height
        const depth = ALTURA_PERSONAGEM;  // ui: depth
        const geometry = new THREE.BoxGeometry(width, height, depth);
        
        this.geometry = geometry;
        this.material = new THREE.MeshBasicMaterial({color: 0x2233FF, side: THREE.DoubleSide});

        this.speed = 0.03

        this.actualMovement=-1

        this.VELD = 0.48
        this.VELE = 0.48
        this.VELF = 0.48
        this.VELA = 0.48
        this.VELB= 0.48
        this.RAIOF = 0.1
        this.VELC = 0.48
        this.RAIOB = 0.1

        this.K_BERMA = 0.25

        let bindedinitializationMovement = initializationMovement.bind(this)


        const fbxLoader = new FBXLoader()
        let model = "./3dmodels/truck/source/scene.fbx"
        fbxLoader.load(
            model,
            (object) => {
                let scale = 0.06
                object.scale.set(scale, scale, scale)
                object.rotation.x=Math.PI/2
                object.rotation.y=Math.PI/2
                const group = new THREE.Group();
                group.add( object );
                this.vehicle=group
                this.vehicle.rotation.order="ZXY"  
                
                bindedinitializationMovement(this.warehouses[0],this.roads[0],this.warehouses[1])
                this.scene.add(this.vehicle)
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )

        
        //CODE
        this.speedArray = this.warehouses.map((obj,index,ware)=>{
            if(index+1==ware.length)
            return null
            if(index===0)
            return this.saveListOfSpeeds(ware[index],ware[index+1],this.roads[index],ware[index+1],this.roads[index])
            else
            return this.saveListOfSpeeds(ware[index],ware[index+1],this.roads[index],ware[index-1],this.roads[index-1])
        }).flat()

        function initializationMovement(warehouseStart,road,warehousePrevious){

            let rj = warehouseStart.radius
            let bj = rj*0.2
            
            let xj = warehouseStart.coord.x
            let yj = warehouseStart.coord.y
            let zj = warehouseStart.coord.z

            let wij = road.width

            let bij = this.K_BERMA * wij
            let alphaij = Math.atan2((warehouseStart.coord.y - warehousePrevious.coord.y),(warehouseStart.coord.x - warehousePrevious.coord.x))
        
            let hip = rj - bj + this.RAIOF
            let cattrans = wij/2-bij+this.RAIOF
            let vij = Math.acos(cattrans/hip)

            this.dir = ( alphaij-vij)
            this.xp = xj+(rj-bj)*Math.sin(this.dir)
            this.yp = yj-(rj-bj)*Math.cos(this.dir)
            this.zp = zj+ALTURA_PERSONAGEM/2



            this.vehicle.position.set(this.xp,this.yp,this.zp);
            this.vehicle.rotation.z=(this.dir)
            
        }

        }
        animateMovement(){
            
            console.log("Automatic1")
            console.log(this.timer)

            if(this.timer==0 && this.actualMovement+2>=this.speedArray.length)
             return null

            if(this.timer==0){ 
            this.actualMovement+=1
            this.timer=this.speedArray[this.actualMovement].n *10

            if(this.actualMovement>0){
                let previousSpeeds = this.speedArray[this.actualMovement-1]
                let st = previousSpeeds.stage
                if(st=="A"||st =="B"||st=="F" )
                this.dir+=previousSpeeds.vela/2
            }

            let actualSpeeds = this.speedArray[this.actualMovement]
            let st = actualSpeeds.stage
            if(st=="A"||st =="B"||st=="F" )
                this.dir-=actualSpeeds.vela/2

            }
            if(this.timer%10==0&& this.timer>=0){
                console.log("AAAAAAAAAAA")
                let speeds=this.speedArray[this.actualMovement]
                console.log(speeds)

                this.updatePosition(speeds.vela,speeds.velh,speeds.velv,speeds.angle)
            }
            this.timer -= 1

        }

        saveListOfSpeeds(warehouseStart,warehouseEnd,road,warehouseBefore,previousRoad){
        

        const VELD =this.VELD 
        const VELE =this.VELE 
        const VELF =this.VELF
        const VELA =this.VELA 
        const VELB =this.VELB 
        const RAIOF =this.RAIOF 
        const VELC =this.VELC 
        const RAIOB =this.RAIOB 
        const K_BERMA =this.K_BERMA 
        
            
        const K_LIGACAO=1.5;

        let xi = warehouseStart.coord.x
        let yi = warehouseStart.coord.y
        let zi = warehouseStart.coord.z

        let xj = warehouseEnd.coord.x
        let yj = warehouseEnd.coord.y
        let zj = warehouseEnd.coord.z

        let rj = warehouseEnd.radius
        let ri = warehouseStart.radius

        let si=K_LIGACAO*warehouseStart.radius;
        let sj=K_LIGACAO*warehouseEnd.radius;

        let wij = road.width
        let wki = previousRoad.width
        let bij= K_BERMA * wij
        let bki= K_BERMA * wki

        let bj = rj*0.1
        let bi = ri*0.1

        let pij = Math.sqrt(Math.pow((xj - xi),2) + Math.pow((yj - yi),2)) - si - sj; 
            
        let hij=zj-zi;
        let sij=Math.sqrt(Math.pow(pij,2)+Math.pow(hij,2));
        let inclinacao = Math.atan(hij/pij);

        //MOVIMIENTO D

        let d_n=Math.ceil(sij/VELD)
        let d_vela = 0
        let d_velh = pij/d_n
        let d_velv = hij/d_n

        //MOVIMIENTO E
        
        let e_hip = rj-bj+RAIOF
        let e_cattrans = wij/2-bij+RAIOF
        let e_catlong = Math.sqrt(e_hip*e_hip-e_cattrans*e_cattrans)
        let e_iij = sj-e_catlong

        let e_n = Math.ceil(e_iij/VELE)
        let e_vela=0
        let e_velh=e_iij/e_n
        let e_velv= 0

        //MOVIMIENTO C
       
        let c_hip = ri-bi+RAIOB
        let c_cattrans = wij/2-bij+RAIOB
        let c_catlong = Math.sqrt(c_hip*c_hip-c_cattrans*c_cattrans)
        let c_iij = si- c_catlong
        
        let c_n=Math.ceil(c_iij/VELC)
        let c_vela=0
        let c_velh =c_iij/c_n
        let c_velv=0

        //MOVIMIENTO F
        let f_hip = rj-bj+RAIOF
        let f_cattrans=wij/2-bij+RAIOF
        let f_vij=Math.acos(f_cattrans/f_hip)
        let f_cij=RAIOF*f_vij

        let f_n=Math.ceil(f_cij/VELF)
        let f_vela=-f_vij/f_n
        let f_velh=2*RAIOF*Math.sin(f_vij/f_n/2)
        let f_velv=0

        //MOVIMIENTO B
        ////.
        let b_hip = ri-bi+RAIOB
        let b_cattrans=wij/2-bij+RAIOB
        let b_vij=Math.acos(b_cattrans/b_hip)
        let b_cij=RAIOB*b_vij
        console.log(b_cij)
        let b_n=Math.ceil(b_cij/VELB)
        let b_vela=-b_vij/b_n
        let b_velh=2*RAIOB*Math.sin(b_vij/b_n/2)
        let b_velv=0

        //MOVIMIENTO A
        let alphaij = Math.atan2((warehouseEnd.coord.y - warehouseStart.coord.y),(warehouseEnd.coord.x - warehouseStart.coord.x))
       // if(alphaij<=0) alphaij+=2*Math.PI
        console.log(warehouseBefore.coord)
        console.log(warehouseStart.coord)
        console.log(warehouseEnd.coord)
        let alphaki = Math.atan2((warehouseStart.coord.y - warehouseBefore.coord.y),(warehouseStart.coord.x - warehouseBefore.coord.x));
            
        let a1_hip = ri-bi+RAIOF
        let a1_cattrans=wki/2-bki+RAIOF
        let a1_vki=Math.acos(a1_cattrans/a1_hip)
       
        let a2_hip = ri-bi+RAIOB
        let a2_cattrans=wij/2-bij+RAIOB
        let a2_vij=Math.acos(a2_cattrans/a2_hip)

        let a_phikij = alphaij-alphaki+a1_vki+a2_vij
       
        if(a_phikij<=0) a_phikij+=2*Math.PI
        if(a_phikij>2*Math.PI) a_phikij-=2*Math.PI
        let a_dkij=(ri-bi)*a_phikij

       
        let a_n=Math.ceil(a_dkij/VELA)

        let a_vela=a_phikij/a_n
        let a_velh=2*(ri-bi)*Math.sin(a_phikij/a_n/2)
        let a_velv=0


        return new Array(new Speeds(a_vela,a_velh,a_velv,a_n,"A",0),new Speeds(b_vela,b_velh,b_velv,b_n,"B",0),new Speeds(c_vela,c_velh,c_velv,c_n,"C",0),new Speeds(d_vela,d_velh,d_velv,d_n,"D",inclinacao),new Speeds(e_vela,e_velh,e_velv,e_n,"E",0),new Speeds(f_vela,f_velh,f_velv,f_n,"F",0))
        }

        updatePosition(vela,velh,velv,angle){
            this.dir = this.dir+vela
            this.xp=this.xp+velh*Math.cos(this.dir)
            this.yp=this.yp+velh*Math.sin(this.dir)
            this.zp=this.zp+velv

            this.vehicle.position.set(this.xp,this.yp,this.zp);            
            this.vehicle.rotation.z=this.dir
            this.vehicle.rotation.y=-angle
        }

        move(movement){
            var itCollides = false;
            var previousPosition = this.vehicle.position;
            this.vehicle.translateX(movement)

            //If we are in a slope -> change rotation

            //If we are colliding with something -> go back
            //Are we inside of a circle?
            var insideCircle = false    
            this.warehouses.forEach(element => {
                var distanceToCenter = Math.pow((element.coord.x - this.vehicle.position.x),2)+ Math.pow((element.coord.y - this.vehicle.position.y),2);
                console.log("Distance to center of warehouse: " + element.id + " is " + distanceToCenter)
                if(distanceToCenter <= (element.radius ** 2)){
                    insideCircle = true;
                    console.log("The truck is inside a circle");    
                }
            });

            //Are we inside of a warehouse exit road?
            var insideExit = false
            this.warehouses.forEach(element => {
                //Calculate if we are on the exit
            });

            //Are we inside of a road?
            var insideRoad = false
            this.roads.forEach(element => {
                //Calculate if we are on a road
            });

            itCollides = (insideCircle || insideExit || insideRoad)

            if(itCollides){
                this.vehicle.position.set(previousPosition)
            }
        }

        rotate(rotation){
            this.vehicle.rotation.z += rotation
        }

}