import { Result } from "../../core/logic/Result";
import IRouteDTO from "../../dto/IRouteDTO";

export default interface IRouteService  {
  createRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>>;
  updateRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>>;
  getRoute (routeId: string): Promise<Result<IRouteDTO>>;
  getAllRoutes (): Promise<Result<IRouteDTO[]>>;
  deleteRoute(routeId: string): Promise<Boolean>;
}