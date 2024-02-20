import { Repo } from "../../core/infra/Repo";
import { Packaging } from "../../domain/packaging/packaging";
import { PackagingId } from "../../domain/packaging/packagingId";

export default interface IPackagingRepo extends Repo<Packaging> {
  save(packaging: Packaging): Promise<Packaging>;
  delete (packagingId: PackagingId): Promise<boolean>;
  //update(packaging: Packaging): Promise<Packaging>;
  findByDomainId (packagingId: PackagingId | string): Promise<Packaging>;
  findAll (): Promise<Packaging[]>;
  //findById (packagingId: PackagingId[]): Promise<Packaging[]>;
  //saveCollection (packagings: Packaging[]): Promise<Packaging[]>;
  //removeByPackagingIds (packagings: PackagingId[]): Promise<any>
}