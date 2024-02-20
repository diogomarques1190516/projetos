import { AggregateRoot } from "../../core/domain/AggregateRoot";
import { UniqueEntityID } from "../../core/domain/UniqueEntityID";

import { Result } from "../../core/logic/Result";
import { RouteId } from "./routeId";
import { RouteDistance } from "./routeDistance";
import { RouteTime } from "./routeTime";
import { RouteExtraTime } from "./routeExtraTime";
import { RouteEnergy } from "./routeEnergy";
import { Guard } from "../../core/logic/Guard";
import IRouteDTO from "../../dto/IRouteDTO";
import PackagingController from "../../controllers/packagingController";


interface RouteProps {
  distance: number;
  width: number;
  time: number;
  extraTime: number;
  energy: number;
  originId: string;
  destinationId: string;
}

export class Route extends AggregateRoot<RouteProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get routeId(): RouteId {
    return RouteId.caller(this.id)
  }

  get distance(): number {

    return this.props.distance;
  }

  get time(): number {
    return this.props.time;
  }

  get extraTime(): number {
    return this.props.extraTime;
  }

  get energy(): number {
    return this.props.energy;
  }

  get originId(): string {
    return this.props.originId;
  }

  get destinationId(): string {
    return this.props.destinationId;
  }


  set distance(value: number) {
    this.props.distance = value;

  }

  set time(value: number) {
    this.props.time = value;
  }

  set extraTime(value: number) {
    this.props.extraTime = value;
  }

  set energy(value: number) {
    this.props.energy = value;
  }

  set originId(value: string) {
    this.props.originId = value;
  }

  set destinationId(value: string) {
    this.props.destinationId = value;

  }

  get width(): number {
    return this.props.width;
  }

  set width(value: number) {
    this.props.width = value;
  }

  private constructor(props: RouteProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(routeDTO: IRouteDTO, id?: UniqueEntityID): Result<Route> {


    const distance = routeDTO.distance;
    const time = routeDTO.time;
    const extraTime = routeDTO.extraTime;
    const energy = routeDTO.energy;
    const originId = routeDTO.originId;
    const destinationId = routeDTO.destinationId;
    const width = routeDTO.width;


    const route = new Route({
      distance: distance,
      time: time,
      extraTime: extraTime,
      energy: energy,
      originId: originId,
      destinationId: destinationId,
      width: width
    },
      id);
    return Result.ok<Route>(route)

  }

}