import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";


import { Result } from "../core/logic/Result";
import { BaseController } from '../core/infra/BaseController';
import IUserController from './IControllers/IUserController';
import { IUserDTO } from '../dto/IUserDTO';
import IUserService from '../services/IServices/IUserService';

@Service()
export default class UserController extends BaseController implements IUserController {

    protected executeImpl(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    constructor(
        @Inject(config.services.user.name) private userServiceInstance: IUserService
    ) {
        super();
    }
    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("1")
            const userOrError = await this.userServiceInstance.createUser(req.body as IUserDTO) as Result<IUserDTO>;
            console.log("service-end")
            if (userOrError.isFailure) {
                return res.status(402).send();
            }

            const userDTO = userOrError.getValue();
            return res.json(userDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }

    public async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const userOrError = await this.userServiceInstance.getUsers() as Result<IUserDTO[]>;

            if (userOrError.isFailure) {
                return res.status(400).send();
            }

            const userDTO = userOrError.getValue();
            return res.status(200).json(userDTO);
        }
        catch (e) {
            return next(e);
        }
    }


}