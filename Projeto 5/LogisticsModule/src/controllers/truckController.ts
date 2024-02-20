import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";

import ITruckController from "./IControllers/ITruckController";
import ITruckService from '../services/IServices/ITruckService';
import ITruckDTO from '../dto/ITruckDTO';

import { Result } from "../core/logic/Result";
import { BaseController } from '../core/infra/BaseController';


@Service()
export default class TruckController extends BaseController implements ITruckController {

  protected executeImpl(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  constructor(
    @Inject(config.services.truck.name) private truckServiceInstance: ITruckService
  ) {
    super();
  }


  public async createTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = await this.truckServiceInstance.createTruck(req.body as ITruckDTO) as Result<ITruckDTO>;

      if (truckOrError.isFailure) {
        return res.status(402).send();
      }

      const truckDTO = truckOrError.getValue();
      return res.json(truckDTO).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async listTrucks(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = await this.truckServiceInstance.listTrucks() as Result<ITruckDTO[]>;

      if (truckOrError.isFailure) {
        return res.status(400).send();
      }

      const truckDTO = truckOrError.getValue();
      return res.status(200).json(truckDTO);
    }
    catch (e) {
      return next(e);
    }
  }

  public async getTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = await this.truckServiceInstance.getTruck(req.params.licensePlate);


      if (truckOrError.isFailure) {
        return res.status(402).send();
      }

      const truckDTO = truckOrError.getValue();
      return res.json(truckDTO).status(200);
    }
    catch (e) {
      return next(e);
    }
  }



  public async updateTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = await this.truckServiceInstance.updateTruck(req.body as ITruckDTO) as Result<ITruckDTO>;

      if (truckOrError.isFailure) {
        return res.status(400).send();
      }

      const truckDTO = truckOrError.getValue();
      return res.status(200).json(truckDTO);
    }
    catch (e) {
      return next(e);
    }
  };

  public async deleteTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = await this.truckServiceInstance.deleteTruck(req.params.id as ITruckDTO) as Result<Boolean>;

      if (truckOrError.isFailure) {
        return res.status(404).send("Truck " + req.params.id + " not found");
      } else {
        return res.status(200).send("Truck " + req.params.id + " deleted");
      }
    }

    catch (e) {
      return next(e);
    }
  };

}