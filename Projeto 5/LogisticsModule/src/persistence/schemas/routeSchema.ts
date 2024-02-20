import { IRoutePersistence } from '../../dataschema/IRoutePersistence';
import mongoose from 'mongoose';

const Route = new mongoose.Schema(
  {
    domainId: {
      type: String,
      unique: true
    },

    distance: {
      type: Number,
      index: true
    },

    width: {
      type: Number,
      index: true
    },


    time: {
      type: Number,
      index: true
    },

    extraTime: {
      type: Number,
      index: true
    },

    energy: {
      type: Number,
      index: true
    },

    originId: {
      type: String,
      index: true,
    },

    destinationId: {
      type: String,
      index: true,
    },

  },
  { timestamps: true },
);

export default mongoose.model<IRoutePersistence & mongoose.Document>('Route', Route);