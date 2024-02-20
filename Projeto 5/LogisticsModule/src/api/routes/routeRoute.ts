import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import { Container } from 'typedi';
import IRouteController from '../../controllers/IControllers/IRouteController';

import config from "../../../config";

const route = Router();

export default (app: Router) => {
  app.use('/routes', route);

  const ctrl = Container.get(config.controllers.route.name) as IRouteController;

  route.get('', (req, res, next) => ctrl.getAllRoutes(req, res, next));

  route.get('/', function (req, res) {
    res.json({ message: '' });
  });

  route.get('By id',
    celebrate({
      body: Joi.object({
        id: Joi.string().required()
      })
    }),
    (req, res, next) => ctrl.getRoute(req, res, next));


  route.post('',
    celebrate({
      body: Joi.object({
        distance: Joi.number().required(),
        time: Joi.number().required(),
        extraTime: Joi.number().required(),
        energy: Joi.number().required(),
        originId: Joi.string().required(),
        destinationId: Joi.string().required(),
        width: Joi.number().required().greater(0),
      })
    }),
    (req, res, next) => ctrl.createRoute(req, res, next));

  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        distance: Joi.number().required(),
        time: Joi.number().required(),
        extraTime: Joi.number().required(),
        energy: Joi.number().required(),
        originId: Joi.string().required(),
        destinationId: Joi.string().required(),
        width: Joi.number().required().greater(0),
      })
    }),
    (req, res, next) => ctrl.updateRoute(req, res, next));


  route.delete('',
    (req, res, next) => ctrl.deleteRoute(req, res, next));

};