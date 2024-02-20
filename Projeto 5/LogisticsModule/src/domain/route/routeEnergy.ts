import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface RouteEnergyProps {
  value: number;
}

export class RouteEnergy extends ValueObject<RouteEnergyProps> {
  get value (): number {
    return this.props.value;
  }
  
  private constructor (props: RouteEnergyProps) {
    super(props);
  }

  public static create (energy: number): RouteEnergy {
    const guardResult = Guard.againstNullOrUndefined(energy, 'energy');
    if (!guardResult.succeeded) {
      return;
    } else {
      return (new RouteEnergy({ value: energy }))
    }
  } 
}