import { Repo } from "../../core/infra/Repo";
import { LicensePlate } from "../../domain/truck/licensePlate";
import { Truck } from "../../domain/truck/truck";
import { TruckId } from "../../domain/truck/truckId";

export default interface ITruckRepo extends Repo<Truck> {
  save(truck: Truck): Promise<Truck>;
  findByDomainId(truckId: TruckId | string): Promise<Truck>;
  findByLicensePlate(licensePlate: LicensePlate | string): Promise<Truck>;
  delete(truckId: TruckId): Promise<boolean>;
  findAll(): Promise<Truck[]>;


  //findByIds (rolesIds: RoleId[]): Promise<Role[]>;
  //saveCollection (roles: Role[]): Promise<Role[]>;
  //removeByRoleIds (roles: RoleId[]): Promise<any>
}