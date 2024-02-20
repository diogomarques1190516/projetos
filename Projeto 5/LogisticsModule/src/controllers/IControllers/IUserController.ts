import { Request, Response, NextFunction } from 'express';

export default interface IUserController {
    createUser(req: Request, res: Response, next: NextFunction);
    getUsers(req: Request, res: Response, next: NextFunction);
}