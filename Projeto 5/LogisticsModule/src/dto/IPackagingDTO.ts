import { PackagingId } from "../domain/packaging/packagingId";

export default interface IPackagingDTO {
    packagingId: string;
    xPosition: number;
    yPosition: number;
    zPosition: number;
    licensePlate: string;
  }