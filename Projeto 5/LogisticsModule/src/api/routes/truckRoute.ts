import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import { Container } from 'typedi';
import ITruckController from '../../controllers/IControllers/ITruckController';

import config from "../../../config";

const route = Router();

export default (app: Router) => {
  app.use('/trucks', route);

  const ctrl = Container.get(config.controllers.truck.name) as ITruckController;


  route.post('',
    celebrate({
      body: Joi.object({
        tare: Joi.number()
          .required(),
        totalBatteryCapacity: Joi.number()
          .required(),
        rechargeTime: Joi.number()
          .required(),
        autonomyWithMaxLoad: Joi.number()
          .required(),
        loadCapacity: Joi.number()
          .required(),
        licensePlate: Joi.string()
          .required()
          .regex(
            /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/
          )

      })
    }),
    (req, res, next) => ctrl.createTruck(req, res, next));


  route.get('/:licensePlate',
    (req, res, next) => ctrl.getTruck(req, res, next));


  route.get('',
    (req, res, next) => ctrl.listTrucks(req, res, next));

  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string()
          .required(),
        tare: Joi.number()
          .required()
          .greater(0),
        totalBatteryCapacity: Joi.number()
          .required()
          .greater(0),
        rechargeTime: Joi.number()
          .required()
          .greater(0),
        autonomyWithMaxLoad: Joi.number()
          .required()
          .greater(0),
        loadCapacity: Joi.number()
          .required()
          .greater(0),
        licensePlate: Joi.string()
          .required()
          .regex(
            /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/
          )

      })
    }),
    (req, res, next) => ctrl.updateTruck(req, res, next));


  route.delete('/:id',
    (req, res, next) => ctrl.deleteTruck(req, res, next));
};