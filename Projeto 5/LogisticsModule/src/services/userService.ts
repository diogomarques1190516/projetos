import { Service, Inject } from 'typedi';
import config from "../../config";
import IRouteDTO from '../dto/IRouteDTO';

import { Route } from "../domain/route/route";
import IRouteRepo from '../services/IRepos/IRouteRepo';
import IRouteService from './IServices/IRouteService';
import { Result } from "../core/logic/Result";
import { RouteMap } from "../mappers/RouteMap";
import { RouteDistance } from "../domain/route/routeDistance";
import { RouteTime } from "../domain/route/routeTime";
import { RouteExtraTime } from "../domain/route/routeExtraTime";
import { RouteEnergy } from "../domain/route/routeEnergy";
import { response } from 'express';
import IUserService from './IServices/IUserService';
import { IUserDTO } from '../dto/IUserDTO';
import IUserRepo from './IRepos/IUserRepo';
import { UserMap } from '../mappers/UserMap';
import { User } from '../domain/user';

@Service()
export default class UserService implements IUserService {
  constructor(
    @Inject(config.repos.user.name) private userRepo: IUserRepo
  ) { }



  public async createUser(userDTO: IUserDTO): Promise<Result<IUserDTO>> {
    try {
      const userOrError = await User.create(userDTO);
      if (userOrError.isFailure) {
        return Result.fail<IUserDTO>(userOrError.errorValue());

      }
      const userResult = userOrError.getValue();

      await this.userRepo.save(userResult);

      const userDTOResult = UserMap.toDTO(userResult) as IUserDTO;
      return Result.ok<IUserDTO>(userDTOResult)
    } catch (e) {
      throw e;
    }
  }

  public async getUsers(): Promise<Result<IUserDTO[]>> {

    try {

      const usersList = await this.userRepo.findAll();

      if (usersList == null) {
        return Result.fail<IUserDTO[]>("There are no users created.");
      }
      else {
        let truckArray = [];

        for (let i = 0; i < usersList.length; i++) {

          truckArray[i] = UserMap.toDTO(usersList[i]);

        }
        return Result.ok<IUserDTO[]>(truckArray);
      }

    } catch (e) {
      throw e;
    }

  }

}