import { Request, Response, NextFunction } from 'express';

export default interface IRoleController  {
  createPackaging(req: Request, res: Response, next: NextFunction);
  updatePackaging(req: Request, res: Response, next: NextFunction);
  deletePackaging(req: Request, res: Response, next: NextFunction);
  getPackaging(req: Request, res: Response, next: NextFunction);
  listPackagings(req: Request, res: Response, next: NextFunction);
}