import { ValueObject } from "../../core/domain/ValueObject";
import { Result } from "../../core/logic/Result";
import { Guard } from "../../core/logic/Guard";

interface LicensePlateProps {
  value: string;
}

export class LicensePlate extends ValueObject<LicensePlateProps> {

  get value(): string {
    return this.props.value;
  }

  private constructor(props: LicensePlateProps) {
    super(props);
  }

  public static create(licensePlate: string): Result<LicensePlate> {

    let regex: RegExp = /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/;
    
    if (!regex.test(licensePlate)) {

      return Result.fail<LicensePlate>("That not a valid IMT License Place (AA-00-00) or (00-AA-00) or (00-00-AA) or (AA-00-AA)");

    } else {

      return Result.ok<LicensePlate>(new LicensePlate({ value: licensePlate }))

    }
  }
}