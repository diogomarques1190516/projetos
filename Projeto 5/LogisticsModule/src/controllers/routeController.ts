import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";

import IRouteController from "./IControllers/IRouteController";
import IRouteService from '../services/IServices/IRouteService';
import IRouteDTO from '../dto/IRouteDTO';

import { Result } from "../core/logic/Result";
import { Console } from 'console';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

@Service()
export default class RouteController implements IRouteController {
  constructor(
    @Inject(config.services.route.name) private routeServiceInstance: IRouteService
  ) { }



  public async createRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const routeOrError = await this.routeServiceInstance.createRoute(req.body as IRouteDTO) as Result<IRouteDTO>;

      if (routeOrError.isFailure) {
        return res.status(402).send();
      }

      const routeDTO = routeOrError.getValue();
      return res.json(routeDTO).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async updateRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const routeOrError = await this.routeServiceInstance.updateRoute(req.body as IRouteDTO) as Result<IRouteDTO>;

      if (routeOrError.isFailure) {
        return res.status(404).send();
      }
      const routeDTO = routeOrError.getValue();
      return res.json(routeDTO).status(201);
    } catch (e) {
      return next(e);
    }

  }

  public async getRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const routeOrError = await this.routeServiceInstance.getRoute(id) as Result<IRouteDTO>

      if (routeOrError.isFailure) {
        return res.status(402).send();
      }
      const iRouteDTOOrError = routeOrError.getValue();
      return res.json(iRouteDTOOrError).status(201);
    }
    catch (e) {
      return next(e);
    }
  }

  public async deleteRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const routeOrError = await this.routeServiceInstance.deleteRoute(id)

      if (routeOrError == true) {
        res.json({ message: "Route " + req.params.id + " delete" });
        return res.status(201).send();
      }
      res.json({ message: "Route " + req.params.id + " not found" });
      return res.status(401).send();
    }
    catch (e) {
      return next(e);
    }
  }

  public async getAllRoutes(req: Request, res: Response, next: NextFunction) {
    try {


      const routesOrError = await this.routeServiceInstance.getAllRoutes() as Result<IRouteDTO[]>;

      if (routesOrError.isFailure) {
        return res.status(402).send();
      }
      const routesDTO = routesOrError.getValue();
      return res.json(routesDTO).status(201);
    }
    catch (e) {
      return next(e);
    }
  }

}