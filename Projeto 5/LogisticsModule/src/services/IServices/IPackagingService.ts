import { Result } from "../../core/logic/Result";
import { PackagingId } from "../../domain/packaging/packagingId";
import IPackagingDTO from "../../dto/IPackagingDTO";

export default interface IPackagingService  {
  createPackaging(packagingDTO: IPackagingDTO): Promise<Result<IPackagingDTO>>;
  updatePackaging(packagingDTO: IPackagingDTO): Promise<Result<IPackagingDTO>>;
  listPackagings(): Promise<Result<IPackagingDTO[]>>;
  deletePackaging(packagingId: IPackagingDTO): Promise<Result<IPackagingDTO>>;
  getPackaging (packagingId: PackagingId): Promise<Result<IPackagingDTO>>;
}

//getPackaging (packagingId: string): Promise<Result<IPackagingDTO>>;
//delete (packagingId: string): Promise<boolean>;