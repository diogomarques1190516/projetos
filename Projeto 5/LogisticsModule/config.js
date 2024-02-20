import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10) || 3000,

  /**
   * That long string from mlab
   */
  databaseURL:
    process.env.MONGODB_URI || 'mongodb+srv://user123:user123@nodejs.iyuhdcx.mongodb.net/?retryWrites=true&w=majority', //if not working replace test with ?

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET || 'my sakdfho2390asjod$%jl)!sdjas0i secret',

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  controllers: {
    user: {
      name: 'UserController',
      path: '../controllers/userController',
    },
    role: {
      name: 'RoleController',
      path: '../controllers/roleController',
    },
    truck: {
      name: 'TruckController',
      path: '../controllers/truckController',
    },
    packaging: {
      name: 'PackagingController',
      path: '../controllers/packagingController',
    },
    route: {
      name: 'RouteController',
      path: '../controllers/routeController',
    },
  },

  repos: {
    role: {
      name: 'RoleRepo',
      path: '../repos/roleRepo',
    },
    user: {
      name: 'UserRepo',
      path: '../repos/userRepo',
    },
    truck: {
      name: 'TruckRepo',
      path: '../repos/truckRepo',
    },
    packaging: {
      name: 'PackagingRepo',
      path: '../repos/packagingRepo',
    },
    route: {
      name: 'RouteRepo',
      path: '../repos/routeRepo',
    },
  },

  services: {
    user: {
      name: 'UserService',
      path: '../services/userService',
    },
    role: {
      name: 'RoleService',
      path: '../services/roleService',
    },
    truck: {
      name: 'TruckService',
      path: '../services/truckService',
    },
    packaging: {
      name: 'PackagingService',
      path: '../services/packagingService',
    },
    route: {
      name: 'RouteService',
      path: '../services/routeService',
    },
  },
};
