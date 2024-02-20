import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface TruckAutonomyWithMaxLoadProps {
  value: number;
}

export class TruckAutonomyWithMaxLoad extends ValueObject<TruckAutonomyWithMaxLoadProps> {

  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: TruckAutonomyWithMaxLoadProps) {
    super(props);
  }

  public static create (autonomyWithMaxLoad: number): Result<TruckAutonomyWithMaxLoad> {
    const guardResult = Guard.againstNullOrUndefined(autonomyWithMaxLoad, 'autonomyWithMaxLoad');
    if (!guardResult.succeeded) {
      return Result.fail<TruckAutonomyWithMaxLoad>(guardResult.message);
    } else {
      return Result.ok<TruckAutonomyWithMaxLoad>(new TruckAutonomyWithMaxLoad({ value: autonomyWithMaxLoad }))
    }
  }
}