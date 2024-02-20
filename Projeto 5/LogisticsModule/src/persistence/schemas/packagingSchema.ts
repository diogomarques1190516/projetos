import { IPackagingPersistence } from '../../dataschema/IPackagingPersistence';
import mongoose from 'mongoose';

var PackagingSchema = new mongoose.Schema(
  {
    domainId: { type: String, unique: true },
    xPosition: { type: Number },
    yPosition: { type: Number },
    zPosition: { type: Number },
    licensePlate: { type: String}
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IPackagingPersistence & mongoose.Document>('Packaging', PackagingSchema);
