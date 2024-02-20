import { Service, Inject } from 'typedi';

import ITruckRepo from "../services/IRepos/ITruckRepo";
import { Truck } from "../domain/truck/truck";
import { TruckId } from "../domain/truck/truckId";
import { TruckMap } from "../mappers/TruckMap";

import { Document, FilterQuery, Model } from 'mongoose';
import { ITruckPersistence } from '../dataschema/ITruckPersistence';

@Service()
export default class TruckRepo implements ITruckRepo {
  private models: any;

  constructor(
    @Inject('truckSchema') private truckSchema: Model<ITruckPersistence & Document>,
  ) { }
  exists(t: Truck): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  existsID(t: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }


  private createBaseQuery(): any {
    return {
      where: {},
    }
  }

  /*   public async exists(truckId: TruckId | string): Promise<boolean> {
      
      const idX = truckId instanceof TruckId ? (<TruckId>truckId).toValue() : truckId;
  
      const query = { domainId: idX}; 
      const truckDocument = await this.truckSchema.findOne( query as FilterQuery<ITruckPersistence & Document>);
  
      return !!truckDocument === true;
    } */

  public async save(truck: Truck): Promise<Truck> {
    const query = { domainId: truck.id.toString() };

    const truckDocument = await this.truckSchema.findOne(query);
    try {
      if (truckDocument === null) {
        const rawTruck: any = TruckMap.toPersistence(truck);

        const truckCreated = await this.truckSchema.create(rawTruck);
        return TruckMap.toDomain(truckCreated);
      } else {

        truckDocument.tare = truck.tare;
        truckDocument.licensePlate = truck.licensePlate;
        truckDocument.loadCapacity = truck.loadCapacity;
        truckDocument.autonomyWithMaxLoad = truck.autonomyWithMaxLoad;
        truckDocument.totalBatteryCapacity = truck.totalBatteryCapacity;
        truckDocument.rechargeTime = truck.rechargeTime;

        await truckDocument.save();


        return truck;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findAll(): Promise<Truck[]> {
    const truckDocument = await this.truckSchema.find({});

    try {
      if (truckDocument == null) {
        return null;
      }
      else {
        let truckArray = [];

        for (let i = 0; i < truckDocument.length; i++) {

          truckArray[i] = TruckMap.toDomain(truckDocument[i]);

        }
        console.log(truckDocument);
        return truckArray;
      }

    }
    catch (e) {
      throw e;
    }
    //return truckDocument !== null ? truckDocument.map((trucks) => TruckMap.toDomain(trucks)): null  
  }

  public async findByLicensePlate(licenseplate: string): Promise<Truck> {
    const query = { licensePlate: licenseplate };
    const truckRecord = await this.truckSchema.findOne(query as FilterQuery<ITruckPersistence & Document>);

    if (truckRecord != null) {
      return TruckMap.toDomain(truckRecord);
    }
    else
      return null;
  }

  public async findByDomainId(truckId: TruckId | string): Promise<Truck> {
    const query = { domainId: truckId };
    const truckRecord = await this.truckSchema.findOne(query as FilterQuery<ITruckPersistence & Document>);

    if (truckRecord != null) {
      return TruckMap.toDomain(truckRecord);
    }
    else
      return null;
  }

  public async delete(truckId: TruckId | string): Promise<boolean> {

    const idX = truckId instanceof TruckId ? (<TruckId>truckId).toValue() : truckId;

    const query = { domainId: idX };
    const truckDocument = await this.truckSchema.deleteOne(query as FilterQuery<ITruckPersistence & Document>);

    return !!truckDocument === true;
  }

}