import { Container } from 'typedi';

import { Mapper } from "../core/infra/Mapper";

import { IUserDTO } from "../dto/IUserDTO";

import { User } from "../domain/user";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { UserEmail } from "../domain/userEmail";
import { UserPassword } from "../domain/userPassword";

import RoleRepo from "../repos/roleRepo";
import { Document, Model } from 'mongoose';
import { ITruckPersistence } from '../dataschema/ITruckPersistence';

export class UserMap extends Mapper<User> {

  public static toDTO(user: User): IUserDTO {
    return {
      //id: user.id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      telephoneNr: user.telephoneNr,
      role: user.role,
      roleid: user.roleid
    } as IUserDTO;
  }

  public static toDomain(user: any | Model<ITruckPersistence & Document>): User {

    const truckOrError = User.create(
      user,
      new UniqueEntityID(user.id)
    );

    truckOrError.isFailure ? console.log(truckOrError.error) : '';

    return truckOrError.isSuccess ? truckOrError.getValue() : null;

    /* const userOrError = User.create({
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      telephoneNr: raw.telephoneNr,
      role: raw.role,
      roleid: raw.roleid
    }, new UniqueEntityID(raw.domainId))

    userOrError.isFailure ? console.log(userOrError.error) : '';

    return userOrError.isSuccess ? userOrError.getValue() : null; */
  }

  public static toPersistence(user: User): any {
    const a = {
      domainId: user.id.toString(),
      email: user.email,
      telephoneNr: user.telephoneNr,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      roleid: user.roleid
    }
    return a;
  }
}