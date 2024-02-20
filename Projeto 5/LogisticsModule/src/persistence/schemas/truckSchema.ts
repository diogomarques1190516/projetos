import { ITruckPersistence } from '../../dataschema/ITruckPersistence';
import mongoose from 'mongoose';
import { TruckId } from '../../domain/truck/truckId';
import { LicensePlate } from '../../domain/truck/licensePlate';

const TruckSchema = new mongoose.Schema(
  {
    domainId: {
      type: String,
      unique: true
    },
    licensePlate: {
      type: String,
      unique: true
    },

    tare: {
      type: Number,
      index: true
    },

    loadCapacity: {
      type: Number,
      index: true
    },

    totalBatteryCapacity: {
      type: Number,
      index: true
    },

    autonomyWithMaxLoad: {
      type: Number,
      index: true
    },

    rechargeTime: {
      type: Number,
      index: true
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model<ITruckPersistence & mongoose.Document>('Truck', TruckSchema);


