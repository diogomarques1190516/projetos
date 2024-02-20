import { Router } from 'express';
import { Container } from 'typedi';
import { celebrate, Joi } from 'celebrate';

import config from "../../../config";
import IUserController from '../../controllers/IControllers/IUserController';

const route = Router();

export default (app: Router) => {
  app.use('/User', route);

  const ctrl = Container.get(config.controllers.user.name) as IUserController;

  route.post('',
    celebrate({
      body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        telephoneNr: Joi.string().required(),
        email: Joi.string().required(),
        role: Joi.string().required(),
        roleid: Joi.number().required()
      })
    }),
    (req, res, next) => ctrl.createUser(req, res, next));


  route.get('',
    (req, res, next) => ctrl.getUsers(req, res, next));


};
