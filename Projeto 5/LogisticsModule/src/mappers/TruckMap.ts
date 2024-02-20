import { Mapper } from "../core/infra/Mapper";

import { Document, Model } from 'mongoose';
import { ITruckPersistence } from '../dataschema/ITruckPersistence';

import ITruckDTO from "../dto/ITruckDTO";
import { Truck } from "../domain/truck/truck";

import { UniqueEntityID } from "../core/domain/UniqueEntityID";

export class TruckMap extends Mapper<Truck> {

  public static toDTO(truck: Truck): ITruckDTO {
    return {
      id: truck.id.toString(),
      licensePlate: truck.licensePlate,
      tare: truck.tare,
      loadCapacity: truck.loadCapacity,
      totalBatteryCapacity: truck.totalBatteryCapacity,
      autonomyWithMaxLoad: truck.autonomyWithMaxLoad,
      rechargeTime: truck.rechargeTime,
    } as ITruckDTO;
  }

  public static toDomain(truck: any | Model<ITruckPersistence & Document>): Truck {
    const truckOrError = Truck.create(
      truck,
      new UniqueEntityID(truck.domainId)
    );

    truckOrError.isFailure ? console.log(truckOrError.error) : '';

    return truckOrError.isSuccess ? truckOrError.getValue() : null;
  }

  public static toPersistence(truck: Truck): any {
    return {
      domainId: truck.truckId.toString,
      licensePlate: truck.licensePlate,
      tare: truck.tare.toString(),
      loadCapacity: truck.loadCapacity.toString(),
      totalBatteryCapacity: truck.totalBatteryCapacity.toString(),
      autonomyWithMaxLoad: truck.autonomyWithMaxLoad.toString(),
      rechargeTime: truck.rechargeTime.toString(),
    }
  }
}