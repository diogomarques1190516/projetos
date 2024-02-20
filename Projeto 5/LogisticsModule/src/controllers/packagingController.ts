import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";

import IPackagingController from "./IControllers/IPackagingController";
import IPackagingService from '../services/IServices/IPackagingService';
import IPackagingDTO from '../dto/IPackagingDTO';

import { Result } from "../core/logic/Result";
import { BaseController } from '../core/infra/BaseController';

@Service()
export default class PackagingController extends BaseController implements IPackagingController /* TODO: extends ../core/infra/BaseController */ {
 
  protected executeImpl(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  
  constructor(
      @Inject(config.services.packaging.name) private packagingServiceInstance : IPackagingService
  ) {
    super();
  }

  public async createPackaging(req: Request, res: Response, next: NextFunction) {
    try {
      const packagingOrError = await this.packagingServiceInstance.createPackaging(req.body as IPackagingDTO) as Result<IPackagingDTO>;
        
      if (packagingOrError.isFailure) {
        return res.status(402).send();
      }

      const packagingDTO = packagingOrError.getValue();
      return res.json( packagingDTO ).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async updatePackaging(req: Request, res: Response, next: NextFunction) {
    try {
      const packagingOrError = await this.packagingServiceInstance.updatePackaging(req.body as IPackagingDTO) as Result<IPackagingDTO>;

      if (packagingOrError.isFailure) {
        return res.status(404).send();
      }

      const packagingDTO = packagingOrError.getValue();
      return res.status(201).json( packagingDTO );
    }
    catch (e) {
      return next(e);
    };
  }

  public async deletePackaging(req: Request, res: Response, next: NextFunction) {
    try {
        const trueOrError = await this.packagingServiceInstance.deletePackaging(req.parms.id);
        
        if (!trueOrError) {
            return res.status(402).send();
          }
          return res.json( req.params.id ).status(201);
        }
        catch (e) {
          return next(e);
        }
      };

  public async getPackaging(req: Request, res: Response, next: NextFunction) {
    try {
        const packagingOrError = await this.packagingServiceInstance.getPackaging(req.params.id);
          
        if (packagingOrError.isFailure) {
          return res.status(402).send();
        }
  
        const packagingDTO = packagingOrError.getValue();
        return res.json( packagingDTO ).status(201);
      }
      catch (e) {
        return next(e);
      }
    };

    public async listPackagings(req: Request, res: Response, next: NextFunction) {
      try {
        const packagingOrError = await this.packagingServiceInstance.listPackagings() as Result<IPackagingDTO[]>;
  
        if (packagingOrError.isFailure) {
          return res.status(400).send();
        }
  
        const packagingDTO = packagingOrError.getValue();
        return res.status(200).json( packagingDTO );
      }
      catch (e) {
        return next(e);
      }
    }
  
}
