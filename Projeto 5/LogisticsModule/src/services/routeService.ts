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

@Service()
export default class RouteService implements IRouteService {
  constructor(
    @Inject(config.repos.route.name) private routeRepo: IRouteRepo
  ) { }


  public async getRoute(routeId: string): Promise<Result<IRouteDTO>> {
    try {
      const route = await this.routeRepo.findById(routeId);
      console.log(route);
      if (route === null) {
        return Result.fail<IRouteDTO>("Route not found");
      }
      else {
        const routeResult = RouteMap.toView(route) as IRouteDTO;
        return Result.ok<IRouteDTO>(routeResult)
      }
    } catch (e) {
      throw e;
    }
  }

  public async deleteRoute(routeId: string): Promise<Boolean> {
    try {
      const checkRouteID = await this.routeRepo.existsID(routeId);
      console.log(checkRouteID);
      if (checkRouteID == false) {
        return false;
      }
      else {
        const route = await this.routeRepo.removeByRouteIds(routeId);
        return true;
      }
    } catch (e) {
      throw e;
    }
  }

  public async createRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>> {
    try {

      const routeOrError = await Route.create(routeDTO);
      if (routeOrError.isFailure) {
        return Result.fail<IRouteDTO>(routeOrError.errorValue());
      }

      const routeResult = routeOrError.getValue();

      await this.routeRepo.save(routeResult);

      const routeDTOResult = RouteMap.toDTO(routeResult) as IRouteDTO;
      return Result.ok<IRouteDTO>(routeDTOResult)
    } catch (e) {
      throw e;
    }
  }

  public async updateRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>> {
    try {
      const routeFind = await this.routeRepo.findById(routeDTO.id);
      console.log(routeFind);
      if (routeFind === null) {
        return Result.fail<IRouteDTO>("Route not found updateRoute");
      }
      else {
        const rDdistance = RouteDistance.create(routeDTO.distance);
        //routeFind.distance = rDdistance;
        const rTtime = RouteDistance.create(routeDTO.time);
        //routeFind.time = rTtime;
        const rEXextra = RouteDistance.create(routeDTO.extraTime);
        //routeFind.extraTime = rEXextra;
        const rEenr = RouteDistance.create(routeDTO.energy);
        //routeFind.energy = rEenr;
        routeFind.originId = routeDTO.originId;
        routeFind.destinationId = routeDTO.destinationId;

        await this.routeRepo.save(routeFind);
        const routeDTOResult = RouteMap.toDTO(routeFind) as IRouteDTO;
        return Result.ok<IRouteDTO>(routeDTOResult)
      }
    } catch (e) {
      throw e;
    }
  }

  public async getAllRoutes(): Promise<Result<IRouteDTO[]>> {
    try {

      const routes = await this.routeRepo.findAll();
      if (routes === null) {
        return Result.fail<IRouteDTO[]>("No routes");
      }
      else {
        let routeArr2 = [];
        for (let i = 0; i < routes.length; i++) {
          routeArr2[i] = RouteMap.toView(routes[i]) as IRouteDTO;
        }
        return Result.ok<IRouteDTO[]>(routeArr2);
      }



    } catch (e) {
      throw e;
    }
  }


}