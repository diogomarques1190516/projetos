import { Service, Inject } from 'typedi';
import config from "../../config";
import IPackagingDTO from '../dto/IPackagingDTO';
import { Packaging } from "../domain/packaging/packaging";
import IPackagingRepo from '../services/IRepos/IPackagingRepo';
import IPackagingService from './IServices/IPackagingService';
import { Result } from "../core/logic/Result";
import { PackagingMap } from "../mappers/PackagingMap";
import { PackagingId } from "../domain/packaging/packagingId";

@Service()
export default class PackagingService implements IPackagingService {
  constructor(
      @Inject(config.repos.packaging.name) private packagingRepo : IPackagingRepo
  ) {}

  public async getPackaging( packagingId: PackagingId): Promise<Result<IPackagingDTO>> {
    try {
      const packaging = await this.packagingRepo.findByDomainId(packagingId);

      if (packaging === null) {
        return Result.fail<IPackagingDTO>("Packaging not found");
      }
      else {
        const packagingDTOResult = PackagingMap.toDTO( packaging ) as IPackagingDTO;
        return Result.ok<IPackagingDTO>( packagingDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }


  public async createPackaging(packagingDTO: IPackagingDTO): Promise<Result<IPackagingDTO>> {
    
    try {

      const packagingOrError = await Packaging.create( packagingDTO );
      
      if (packagingOrError.isFailure) {
        return Result.fail<IPackagingDTO>(packagingOrError.errorValue());
      }
      const packagingResult = packagingOrError.getValue();

      await this.packagingRepo.save(packagingResult);
      
      const packagingDTOResult = PackagingMap.toDTO( packagingResult ) as IPackagingDTO;
      
      return Result.ok<IPackagingDTO>( packagingDTOResult )
    } catch (e) {
      throw e;
    }
  }

  public async updatePackaging(packagingDTO: IPackagingDTO): Promise<Result<IPackagingDTO>> {
    try {
      const packaging = await this.packagingRepo.findByDomainId(packagingDTO.packagingId);

      if (packaging === null) {
        return Result.fail<IPackagingDTO>("Packaging not found");
      }
      else {
        packaging.xPosition = packagingDTO.xPosition;
        packaging.yPosition = packagingDTO.yPosition;
        packaging.zPosition = packagingDTO.zPosition;
        packaging.licensePlate = packagingDTO.licensePlate;
        await this.packagingRepo.save(packaging);

        const packagingDTOResult = PackagingMap.toDTO( packaging ) as IPackagingDTO;
        return Result.ok<IPackagingDTO>( packagingDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }

  public async deletePackaging(packagingDTO: IPackagingDTO): Promise<Result<IPackagingDTO>> {
    try {
      const packaging = await this.packagingRepo.findByDomainId(packagingDTO.packagingId);

      if (packaging === null) {
        return Result.fail<IPackagingDTO>("Packaging not found");
      }
      else {
        await this.packagingRepo.delete(packaging.packagingId) == null ? false:true;

        }
    } catch (e) {
      throw e;
    }
  }

  public async listPackagings(): Promise<Result<IPackagingDTO[]>> {

    try {

      const packagingsList = await this.packagingRepo.findAll();

      if( packagingsList == null){
        return Result.fail<IPackagingDTO[]>("There are no packagings created.");
      }
      else
      {
        let packagingArray = [];

        for(let i = 0; i < packagingsList.length; i++){

          packagingArray[i] = PackagingMap.toDTO(packagingsList[i]);

        }
        return Result.ok<IPackagingDTO[]>(packagingArray);
      }

    } catch (e) {
      throw e;
    }

  } 
}
