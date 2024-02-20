import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface TruckLoadCapacityProps {
  value: number;
}

export class TruckLoadCapacity extends ValueObject<TruckLoadCapacityProps> {

  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: TruckLoadCapacityProps) {
    super(props);
  }

  public static create (loadCapacity: number): Result<TruckLoadCapacity> {
    const guardResult = Guard.againstNullOrUndefined(loadCapacity, 'loadCapacity');
    if (!guardResult.succeeded) {
      return Result.fail<TruckLoadCapacity>(guardResult.message);
    } else {
      return Result.ok<TruckLoadCapacity>(new TruckLoadCapacity({ value: loadCapacity }))
    }
  }
}