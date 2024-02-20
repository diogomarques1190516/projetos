import { Repo } from "../../core/infra/Repo";
import { Route } from "../../domain/route/route";
import { RouteId } from "../../domain/route/routeId";

export default interface IRouteRepo extends Repo<Route> {
  save(route: Route): Promise<Route>;
  findById(rolesIds: string): Promise<Route>;
  findByDomainId(packagingId: RouteId | string): Promise<Route>;
  removeByRouteIds(roles: string): Promise<Boolean>;
  findAll(): Promise<Route[]>;
}