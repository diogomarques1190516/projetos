import { Result } from "../../core/logic/Result";
import { LicensePlate } from "../../domain/truck/licensePlate";
import { TruckId } from "../../domain/truck/truckId";
import ITruckDTO from "../../dto/ITruckDTO";

export default interface ITruckService {
  listTrucks(): Promise<Result<ITruckDTO[]>>;
  deleteTruck(truckDTO: ITruckDTO): Promise<Result<Boolean>>;
  createTruck(truckDTO: ITruckDTO): Promise<Result<ITruckDTO>>;
  updateTruck(truckDTO: ITruckDTO): Promise<Result<ITruckDTO>>;

  getTruck(licensePlate: LicensePlate): Promise<Result<ITruckDTO>>;
}
