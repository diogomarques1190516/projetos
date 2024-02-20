import { RouteDistance } from "../domain/route/routeDistance";

export default interface IRouteDTO {
  id: string;
  distance: number;
  time: number;
  extraTime: number;
  energy: number;
  originId: string;
  destinationId: string;
  width: number;
}