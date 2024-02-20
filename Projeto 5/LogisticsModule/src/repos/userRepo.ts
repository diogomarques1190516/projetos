import { Service, Inject } from 'typedi';

import { Document, Model } from 'mongoose';
import { IUserPersistence } from '../dataschema/IUserPersistence';

import IUserRepo from "../services/IRepos/IUserRepo";
import { User } from "../domain/user";
import { UserId } from "../domain/userId";
import { UserEmail } from "../domain/userEmail";
import { UserMap } from "../mappers/UserMap";

@Service()
export default class UserRepo implements IUserRepo {
  private models: any;

  constructor(
    @Inject('userSchema') private userSchema: Model<IUserPersistence & Document>,
    @Inject('logger') private logger
  ) { }
  existsID(t: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  private createBaseQuery(): any {
    return {
      where: {},
    }
  }

  public async exists(userId: UserId | string): Promise<boolean> {

    const idX = userId instanceof UserId ? (<UserId>userId).id.toValue() : userId;

    const query = { domainId: idX };
    const userDocument = await this.userSchema.findOne(query);

    return !!userDocument === true;
  }

  public async save(user: User): Promise<User> {
    const query = { domainId: user.id.toString() };

    const userDocument = await this.userSchema.findOne(query);

    try {
      if (userDocument === null) {

        const rawUser: any = UserMap.toPersistence(user);

        const userCreated = await this.userSchema.create(rawUser);

        return UserMap.toDomain(userCreated);
      } else {

        userDocument.firstName = user.firstName;
        userDocument.lastName = user.lastName;
        userDocument.email = user.email;
        userDocument.telephoneNr = user.telephoneNr;
        userDocument.role = user.role;

        await userDocument.save();

        return user;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findAll(): Promise<User[]> {
    const userDocument = await this.userSchema.find({});

    try {
      if (userDocument == null) {
        return null;
      }
      else {
        let userArray = [];

        for (let i = 0; i < userDocument.length; i++) {

          userArray[i] = UserMap.toDomain(userDocument[i]);

        }
        console.log(userArray);
        return userArray;
      }

    }
    catch (e) {
      throw e;
    }
  }


  public async findByEmail(email: UserEmail | string): Promise<User> {
    const query = { email: email.toString() };
    const userRecord = await this.userSchema.findOne(query);

    if (userRecord != null) {
      return UserMap.toDomain(userRecord);
    }
    else
      return null;
  }

  public async findById(userId: UserId | string): Promise<User> {

    const idX = userId instanceof UserId ? (<UserId>userId).id.toValue() : userId;

    const query = { domainId: idX };
    const userRecord = await this.userSchema.findOne(query);

    if (userRecord != null) {
      return UserMap.toDomain(userRecord);
    }
    else
      return null;
  }
}