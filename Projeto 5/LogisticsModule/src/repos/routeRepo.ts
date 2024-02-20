import { Service, Inject } from 'typedi';

import IRouteRepo from "../services/IRepos/IRouteRepo";
import { Route } from "../domain/route/route";
import { RouteId } from "../domain/route/routeId";
import { RouteMap } from "../mappers/RouteMap";

import { Document, FilterQuery, Model } from 'mongoose';
import { IRoutePersistence } from '../dataschema/IRoutePersistence';
import { UniqueEntityID } from '../core/domain/UniqueEntityID';

@Service()
export default class RouteRepo implements IRouteRepo {
  private models: any;

  constructor(
    @Inject('routeSchema') private routeSchema: Model<IRoutePersistence & Document>,
  ) { }
  removeByRouteIds(roles: string): Promise<Boolean> {
    throw new Error('Method not implemented.');
  }
  findById(rolesIds: string): Promise<Route> {
    throw new Error('Method not implemented.');
  }



  private createBaseQuery(): any {
    return {
      where: {},
    }
  }

  public async exists(route: Route): Promise<boolean> {

    const idX = route.id instanceof RouteId ? (<RouteId>route).id.toValue() : route.id;


    const query = { domainId: idX };
    const routeDocument = await this.routeSchema.findOne(query as FilterQuery<IRoutePersistence & Document>);

    return !!routeDocument === true;
  }


  public async existsID(routeId: RouteId | string): Promise<boolean> {

    const idX = routeId instanceof RouteId ? (<RouteId>routeId).id.toValue() : routeId;

    const query = { domainId: idX };
    const userDocument = await this.routeSchema.findOne(query);

    return !!userDocument === true;
  }


  public async save(route: Route): Promise<Route> {

    const query = { domainId: route.id.toString() };

    const routeDocument = await this.routeSchema.findOne(query);

    try {
      if (routeDocument === null) {
        const rawRoute: any = RouteMap.toPersistence(route);

        const routeCreated = await this.routeSchema.create(rawRoute);
        return RouteMap.toDomain(routeCreated);
      } else {
        routeDocument.distance = route.distance;
        routeDocument.time = route.time;
        routeDocument.extraTime = route.extraTime;
        routeDocument.energy = route.energy;
        routeDocument.originId = route.originId;
        routeDocument.destinationId = route.destinationId;
        routeDocument.width = route.width;
        await routeDocument.save();

        return route;
      }
    } catch (err) {
      throw err;
    }
  }

  /*public async findById(routeId: string): Promise<Route> {
    const query = { domainId: routeId };
    const routeRecord = await this.routeSchema.findOne(query as FilterQuery<IRoutePersistence & Document>).lean();
    if (routeRecord != null) {
      return RouteMap.toDomain(routeRecord);
    }
    else
      return null;
  }*/




  public async findAll(): Promise<Route[]> {

    const routeDoc = await this.routeSchema.find({});
    try {
      if (routeDoc === null) {
        return null;
      } else {
        let routeArr = [];
        for (let i = 0; i < routeDoc.length; i++) {
          routeArr[i] = RouteMap.toDomain(routeDoc[i]);

        }
        console.log(routeDoc);
        return routeArr;

      }

    } catch (e) {
      throw e;

    }
  }

  public async findByDomainId(routeId: RouteId | string): Promise<Route> {

    const query = { domainId: routeId };
    const routeRecord = await this.routeSchema.findOne(query as FilterQuery<IRoutePersistence & Document>);

    if (routeRecord != null) {
      return RouteMap.toDomain(routeRecord);
    }
    else
      return null;
  }

  /*public async removeByRouteIds(routeId: string): Promise<Boolean> {
    const query= this.findById(routeId);
>>>>>>> 49e23b855f9746b6313c7f70fddb61cfbe57c081
    const routeRecord = await this.routeSchema.findOneAndDelete(query as FilterQuery<IRoutePersistence & Document>);
    if (routeRecord != null) {
      return true;
    }
    else
      return false;
  }*/
}