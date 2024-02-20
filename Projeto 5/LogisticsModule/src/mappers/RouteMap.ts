import { Mapper } from "../core/infra/Mapper";

import { Document, Model } from 'mongoose';
import { IRoutePersistence } from '../dataschema/IRoutePersistence';

import IRouteDTO from "../dto/IRouteDTO";
import { Route } from "../domain/route/route";

import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { IRoute } from "express";
import { result } from "lodash";

export class RouteMap extends Mapper<Route> {


  public static toDTO(route: Route): IRouteDTO {
    return {
      id: route.id.toString(),
      distance: route.distance,
      time: route.time,
      extraTime: route.extraTime,
      energy: route.energy,
      originId: route.originId,
      destinationId: route.destinationId,
      width: route.width,
    } as IRouteDTO;
  }

  public static toDomain(route: any | Model<IRoutePersistence & Document>): Route {
    const routeOrError = Route.create(
      route,
      new UniqueEntityID(route.domainId)
    );
    routeOrError.isFailure ? console.log(routeOrError.error) : '';

    return routeOrError.isSuccess ? routeOrError.getValue() : null;
  }

  public static toPersistence(route: Route): any {
    return {
      domainId: route.id.toString(),
      distance: route.distance,
      time: route.time,
      extraTime: route.extraTime,
      energy: route.energy,
      originId: route.originId,
      destinationId: route.destinationId,
      width: route.width,
    }
  }

  public static toView(route: Route): any {
    return {
      domainId: route.id.toString(),
      distance: route.distance,
      time: route.time,
      extraTime: route.extraTime,
      energy: route.energy,
      originId: route.originId,
      destinationId: route.destinationId,
      width: route.width,
    }
  }
}