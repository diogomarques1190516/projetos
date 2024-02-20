import { Service, Inject } from 'typedi';
import config from "../../config";
import ITruckDTO from '../dto/ITruckDTO';
import { Truck } from "../domain/truck/truck";
import ITruckRepo from '../services/IRepos/ITruckRepo';
import ITruckService from './IServices/ITruckService';
import { Result } from "../core/logic/Result";
import { TruckMap } from '../mappers/TruckMap';
import { TruckId } from '../domain/truck/truckId';
import { LicensePlate } from '../domain/truck/licensePlate';

@Service()
export default class TruckService implements ITruckService {

  constructor(
    @Inject(config.repos.truck.name) private truckRepo: ITruckRepo
  ) { }

  deleteTruck(truckDTO: ITruckDTO): Promise<Result<Boolean>> {
    throw new Error('Method not implemented.');
  }



  public async getTruck(licensePlate: LicensePlate): Promise<Result<ITruckDTO>> {
    try {
      const truck = await this.truckRepo.findByLicensePlate(licensePlate);

      if (truck === null) {
        return Result.fail<ITruckDTO>("Truck not found");
      }
      else {
        const truckDTOResult = TruckMap.toDTO(truck) as ITruckDTO;
        return Result.ok<ITruckDTO>(truckDTOResult)
      }
    } catch (e) {
      throw e;
    }
  }


  public async createTruck(truckDTO: ITruckDTO): Promise<Result<ITruckDTO>> {
    try {

      const truckOrError = await Truck.create(truckDTO);

      if (truckOrError.isFailure) {
        return Result.fail<ITruckDTO>(truckOrError.errorValue());
      }

      const truckResult = truckOrError.getValue();

      await this.truckRepo.save(truckResult);

      const truckDTOResult = TruckMap.toDTO(truckResult) as ITruckDTO;
      return Result.ok<ITruckDTO>(truckDTOResult)
    } catch (e) {
      throw e;
    }
  }

  public async listTrucks(): Promise<Result<ITruckDTO[]>> {

    try {

      const trucksList = await this.truckRepo.findAll();

      if (trucksList == null) {
        return Result.fail<ITruckDTO[]>("There are no trucks created.");
      }
      else {
        let truckArray = [];

        for (let i = 0; i < trucksList.length; i++) {

          truckArray[i] = TruckMap.toDTO(trucksList[i]);

        }
        return Result.ok<ITruckDTO[]>(truckArray);
      }


      /* const res = trucksList.map((trucksList) => TruckMap.toDTO(trucksList) as ITruckDTO);
      return Result.ok<ITruckDTO[]>(res); */
      /* trucksList.forEach((truck) => {
        values.push(TruckMap.toDTO(truck));
      }); */
    } catch (e) {
      throw e;
    }

  }

  public async updateTruck(truckDTO: ITruckDTO): Promise<Result<ITruckDTO>> {
    try {
      const truck = await this.truckRepo.findByDomainId(truckDTO.id);

      if (truck === null) {
        return Result.fail<ITruckDTO>("Truck not found");
      }
      else {
        truck.licensePlate = truckDTO.licensePlate;
        truck.tare = truckDTO.tare;
        truck.loadCapacity = truckDTO.loadCapacity;
        truck.autonomyWithMaxLoad = truckDTO.autonomyWithMaxLoad;
        truck.rechargeTime = truckDTO.rechargeTime;
        truck.totalBatteryCapacity = truckDTO.totalBatteryCapacity;
        await this.truckRepo.save(truck);

        const truckDTOResult = TruckMap.toDTO(truck) as ITruckDTO;
        return Result.ok<ITruckDTO>(truckDTOResult)
      }
    } catch (e) {
      throw e;
    }
  }

  /*   public async deleteTruck(truckDTO: ITruckDTO): Promise<Result<Boolean>> {
      try {
        const truck = await this.truckRepo.exists(truckDTO.id);
  
        if (truck.valueOf() == false) {
          return Result.fail<Boolean>("Truck " + truck + " not found" );
        }
        else {
          await this.truckRepo.delete(truck);
          return Result.ok<Boolean>(true);
  
        }
      } catch (e) {
        throw e;
      }
    } */


}
