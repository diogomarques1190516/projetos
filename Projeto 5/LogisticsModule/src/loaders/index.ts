import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';

import config from '../../config';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const userSchema = {
    // compare with the approach followed in repos and services
    name: 'userSchema',
    schema: '../persistence/schemas/userSchema',
  };

  const roleSchema = {
    // compare with the approach followed in repos and services
    name: 'roleSchema',
    schema: '../persistence/schemas/roleSchema',
  };

  const truckSchema = {
    // compare with the approach followed in repos and services
    name: 'truckSchema',
    schema: '../persistence/schemas/truckSchema',
  };

  const packagingSchema = {
    // compare with the approach followed in repos and services
    name: 'packagingSchema',
    schema: '../persistence/schemas/packagingSchema',
  };

  const routeSchema = {
    // compare with the approach followed in repos and services
    name: 'routeSchema',
    schema: '../persistence/schemas/routeSchema',
  };

  const userController = {
    name: config.controllers.user.name,
    path: config.controllers.user.path
  }

  const roleController = {
    name: config.controllers.role.name,
    path: config.controllers.role.path
  }

  const truckController = {
    name: config.controllers.truck.name,
    path: config.controllers.truck.path
  }

  const packagingController = {
    name: config.controllers.packaging.name,
    path: config.controllers.packaging.path
  }

  const routeController = {
    name: config.controllers.route.name,
    path: config.controllers.route.path
  }

  const roleRepo = {
    name: config.repos.role.name,
    path: config.repos.role.path
  }

  const userRepo = {
    name: config.repos.user.name,
    path: config.repos.user.path
  }

  const truckRepo = {
    name: config.repos.truck.name,
    path: config.repos.truck.path
  }

  const packagingRepo = {
    name: config.repos.packaging.name,
    path: config.repos.packaging.path
  }

  const routeRepo = {
    name: config.repos.route.name,
    path: config.repos.route.path
  }

  const userService = {
    name: config.services.user.name,
    path: config.services.user.path
  }

  const roleService = {
    name: config.services.role.name,
    path: config.services.role.path
  }

  const truckService = {
    name: config.services.truck.name,
    path: config.services.truck.path
  }

  const packagingService = {
    name: config.services.packaging.name,
    path: config.services.packaging.path
  }

  const routeService = {
    name: config.services.route.name,
    path: config.services.route.path
  }

  dependencyInjectorLoader({
    mongoConnection,
    schemas: [
      userSchema,
      roleSchema,
      truckSchema,
      packagingSchema,
      routeSchema
    ],
    controllers: [
      userController,
      roleController,
      truckController,
      packagingController,
      routeController
    ],
    repos: [
      roleRepo,
      userRepo,
      truckRepo,
      packagingRepo,
      routeRepo
    ],
    services: [
      userService,
      roleService,
      truckService,
      packagingService,
      routeService
    ]
  });
  Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
