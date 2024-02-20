import { AggregateRoot } from "../../core/domain/AggregateRoot";
import { UniqueEntityID } from "../../core/domain/UniqueEntityID";
import { Result } from "../../core/logic/Result";
import { PackagingId } from "./packagingId";

import IPackagingDTO from "../../dto/IPackagingDTO";
import { TruckId } from "../truck/truckId";

interface PackagingProps {
  xPosition: number;
  yPosition: number;
  zPosition: number;
  licensePlate: string;
}

export class Packaging extends AggregateRoot<PackagingProps> {

  get id (): UniqueEntityID {
    return this._id;
  }

  get packagingId (): PackagingId {
    return new PackagingId(this.packagingId.toValue());
  }
  
  get xPosition (): number {
    return this.props.xPosition;
  }

  get yPosition (): number {
    return this.props.yPosition;
  }

  get zPosition (): number {
    return this.props.zPosition;
  }

  set xPosition ( value: number) {
    this.props.xPosition = value;
  }

  set yPosition ( value: number) {
    this.props.yPosition = value;
  }

  set zPosition ( value: number) {
    this.props.zPosition = value;
  }

  get licensePlate (): string {
    return this.props.licensePlate;
  }

  set licensePlate (value: string) {
    this.props.licensePlate = value;
  }
  
  private constructor (props: PackagingProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (packagingDTO: IPackagingDTO, id?: UniqueEntityID): Result<Packaging> {
    
    const xPosition = packagingDTO.xPosition;
    const yPosition = packagingDTO.yPosition;
    const zPosition = packagingDTO.zPosition;
    const licensePlate = packagingDTO.licensePlate;

    if (xPosition > 0 && xPosition < 10 && yPosition > 0 && yPosition < 20 && zPosition > 0 && zPosition < 8 ) {
      const packaging = new Packaging({xPosition: xPosition, yPosition: yPosition, zPosition: zPosition, licensePlate}, id);
      return Result.ok<Packaging>( packaging )
    } else {
        return Result.fail<Packaging>('Must provide a valid position of the packaging!')
    }
  }
}