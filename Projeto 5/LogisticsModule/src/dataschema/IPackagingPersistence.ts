import { PackagingId } from "../domain/packaging/packagingId";

export interface IPackagingPersistence {
    packagingId: PackagingId;
    xPosition: number;
    yPosition: number;
    zPosition: number;
    licensePlate: string;
  }