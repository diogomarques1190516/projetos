import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface TruckRechargeTimeProps {
  value: number;
}

export class TruckRechargeTime extends ValueObject<TruckRechargeTimeProps> {

  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: TruckRechargeTimeProps) {
    super(props);
  }

  public static create (rechargeTime: number): Result<TruckRechargeTime> {
    const guardResult = Guard.againstNullOrUndefined(rechargeTime, 'rechargeTime');
    if (!guardResult.succeeded) {
      return Result.fail<TruckRechargeTime>(guardResult.message);
    } else {
      return Result.ok<TruckRechargeTime>(new TruckRechargeTime({ value: rechargeTime }))
    }
  }
}