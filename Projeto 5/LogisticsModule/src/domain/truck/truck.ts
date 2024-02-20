import { AggregateRoot } from "../../core/domain/AggregateRoot";
import { UniqueEntityID } from "../../core/domain/UniqueEntityID";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";
import { IntegerType } from "mongodb";
import {LicensePlate} from "./licensePlate";
import { TruckId } from "./truckId";
import ITruckDTO from "../../dto/ITruckDTO";


interface TruckProps {
  licensePlate: string;
  tare: number;
  loadCapacity: number;
  totalBatteryCapacity: number;
  autonomyWithMaxLoad: number;
  rechargeTime: number;
}

export class Truck extends AggregateRoot<TruckProps> {
  
  get id (): UniqueEntityID {
    return this._id;
  }

  get truckId (): TruckId {
    return new TruckId(this.id.toValue());
  }

  get tare (): number {
    return this.props.tare;
  }

  get loadCapacity (): number {
    return this.props.loadCapacity;
  }

  get licensePlate (): string {
    return this.props.licensePlate;
  }

  get totalBatteryCapacity (): number {
    return this.props.totalBatteryCapacity;
  }

  get autonomyWithMaxLoad (): number {
    return this.props.autonomyWithMaxLoad;
  }

  get rechargeTime (): number {
    return this.props.rechargeTime;
  }

  set tare (value: number) {
    this.props.tare = value;
  }

  set licensePlate (value: string) {
    this.props.licensePlate = value;
  }

  set loadCapacity (value: number) {
    this.props.loadCapacity = value;
  }

  set totalBatteryCapacity (value: number) {
    this.props.totalBatteryCapacity = value;
  }

  set autonomyWithMaxLoad (value: number) {
    this.props.autonomyWithMaxLoad = value;
  }
  
  set rechargeTime (value: number) {
    this.props.rechargeTime = value;
  }

  private constructor (props: TruckProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (truckDTO: ITruckDTO, id?: UniqueEntityID): Result<Truck> {

    const licensePlate = truckDTO.licensePlate;
    const loadCapacity = truckDTO.loadCapacity;
    const tare = truckDTO.tare;
    const autonomyWithMaxLoad = truckDTO.autonomyWithMaxLoad;
    const totalBatteryCapacity = truckDTO.totalBatteryCapacity;
    const rechargeTime = truckDTO.rechargeTime;

  
      const truck = new Truck({ 
                                licensePlate: licensePlate,
                                tare : tare,
                                totalBatteryCapacity : totalBatteryCapacity,
                                rechargeTime : rechargeTime,
                                autonomyWithMaxLoad : autonomyWithMaxLoad,
                                loadCapacity: loadCapacity
                               }, 
                               id);
      return Result.ok<Truck>( truck )
    
  }
}
