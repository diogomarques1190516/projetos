import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import { UserId } from "./userId";
import { UserEmail } from "./userEmail";
import { Role } from "../domain/role";
import { UserPassword } from "./userPassword";
import { Guard } from "../core/logic/Guard";
import { IUserDTO } from "../dto/IUserDTO";


interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  telephoneNr: string;
  role: string;
  roleid: number;
}

export class User extends AggregateRoot<UserProps> {

  get id(): UniqueEntityID {
    return this._id;
  }

  get userId(): UserId {
    return UserId.caller(this.id)
  }

  get email(): string {
    return this.props.email;
  }

  get firstName(): string {
    return this.props.firstName
  }

  get lastName(): string {
    return this.props.lastName;
  }

  get telephoneNr(): string {
    return this.props.telephoneNr;
  }

  get role(): string {
    return this.props.role;
  }

  get roleid(): number {
    return this.props.roleid;
  }

  set role(value: string) {
    this.props.role = value;
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(userDTO: IUserDTO, id?: UniqueEntityID): Result<User> {

    const firstName = userDTO.firstName
    const lastName = userDTO.lastName
    const email = userDTO.email;
    const role = userDTO.role;
    const telephoneNr = userDTO.telephoneNr;
    const roleid = userDTO.roleid;

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      telephoneNr: telephoneNr,
      roleid: roleid,
    },
      id);
    return Result.ok<User>(user)
  }
}