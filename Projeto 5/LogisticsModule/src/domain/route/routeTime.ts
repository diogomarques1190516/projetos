import { ValueObject } from "../../core/domain/ValueObject";
import { Guard } from "../../core/logic/Guard";

interface RouteTimeProps {
  value: number;
}

export class RouteTime extends ValueObject<RouteTimeProps> {
  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: RouteTimeProps) {
    super(props);
  }

  public static create (time: number): RouteTime {
    const guardResult = Guard.againstNullOrUndefined(time, 'time');
    if (!guardResult.succeeded) {
      return ;
    } else {
      return (new RouteTime({ value: time }))
    }
  } 
}