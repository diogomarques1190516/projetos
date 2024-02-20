import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface RouteExtraTimeProps {
  value: number;
}

export class RouteExtraTime extends ValueObject<RouteExtraTimeProps> {
  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: RouteExtraTimeProps) {
    super(props);
  }

  public static create (extraTime: number): RouteExtraTime {
    const guardResult = Guard.againstNullOrUndefined(extraTime, 'extraTime');
    if (!guardResult.succeeded) {
      return;
    } else {
      return (new RouteExtraTime({ value: extraTime }))
    }
  }
}