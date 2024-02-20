import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import { Container } from 'typedi';
import IPackagingController from '../../controllers/IControllers/IPackagingController';

import config from "../../../config";

const route = Router();

export default (app: Router) => {
  app.use('/packagings', route);

  const ctrl = Container.get(config.controllers.packaging.name) as IPackagingController;


  route.get('/:id',
    (req, res, next) => ctrl.getPackaging(req, res, next));

  // List every packaging created by id
  route.get('',
    (req, res, next) => ctrl.listPackagings(req, res, next));

  route.post('/',
    celebrate({
      body: Joi.object({
        xPosition: Joi.number().required(),
        yPosition: Joi.number().required(),
        zPosition: Joi.number().required(),
        licensePlate: Joi.string().required().regex(
          /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/
        ),
      }),
    }),
    (req, res, next) => ctrl.createPackaging(req, res, next));

  route.put('/:id',
    celebrate({
      body: Joi.object({
        packagingId: Joi.string().required(),
        xPosition: Joi.number().required(),
        yPosition: Joi.number().required(),
        zPosition: Joi.number().required(),
        licensePlate: Joi.string().required().regex(
          /([A-Z]{2}-[0-9]{2}-[0-9]{2}|[0-9]{2}-[A-Z]{2}-[0-9]{2}|[0-9]{2}-[0-9]{2}-[A-Z]{2}|[A-Z]{2}-[0-9]{2}-[A-Z]{2})/
        ),
      }),
    }),
    (req, res, next) => ctrl.updatePackaging(req, res, next));

  route.delete('/:id',
    celebrate({
      body: Joi.object({
        packagingId: Joi.string().required(),
      }),
    }),
    (req, res, next) => ctrl.deletePackaging(req, res, next));
};