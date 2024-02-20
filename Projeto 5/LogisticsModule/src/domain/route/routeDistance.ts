import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface RouteDistanceProps {
  value: number;
}

export class RouteDistance extends ValueObject<RouteDistanceProps> {
  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: RouteDistanceProps) {
    super(props);
  }

  public static create (distance: number): RouteDistance {
    const guardResult = Guard.againstNullOrUndefined(distance, 'distance');
    if (!guardResult.succeeded) {
      return;
    } else {
      return (new RouteDistance({ value: distance }))
    }
  }
}