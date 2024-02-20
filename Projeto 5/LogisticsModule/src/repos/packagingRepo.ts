import { Service, Inject } from 'typedi';

import IPackagingRepo from "../services/IRepos/IPackagingRepo";
import { Packaging } from "../domain/packaging/packaging";
import { PackagingId } from "../domain/packaging/packagingId";
import { PackagingMap } from "../mappers/PackagingMap";

import { Document, FilterQuery, Model } from 'mongoose';
import { IPackagingPersistence } from '../dataschema/IPackagingPersistence';

@Service()
export default class PackagingRepo implements IPackagingRepo {
  private models: any;

  constructor(
    @Inject('packagingSchema') private packagingSchema: Model<IPackagingPersistence & Document>,
  ) { }

  private createBaseQuery(): any {
    return {
      where: {},
    }
  }

  public async exists(packaging: Packaging): Promise<boolean> {

    const idX = packaging.id instanceof PackagingId ? (<PackagingId>packaging.id).toValue() : packaging.id;

    const query = { domainId: idX };
    const packagingDocument = await this.packagingSchema.findOne(query as FilterQuery<IPackagingPersistence & Document>);

    return !!packagingDocument === true;
  }

  public async save(packaging: Packaging): Promise<Packaging> {
    const query = { domainId: packaging.id.toString() };

    const packagingDocument = await this.packagingSchema.findOne(query);

    try {
      if (packagingDocument === null) {
        const rawPackaging: any = PackagingMap.toPersistence(packaging);

        const packagingCreated = await this.packagingSchema.create(rawPackaging);
        return PackagingMap.toDomain(packagingCreated);
      } else {
        packagingDocument.xPosition = packaging.xPosition;
        packagingDocument.yPosition = packaging.yPosition;
        packagingDocument.zPosition = packaging.zPosition;
        packagingDocument.licensePlate = packaging.licensePlate;
        await packagingDocument.save();

        return packaging;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findByDomainId(packagingId: PackagingId | string): Promise<Packaging> {

    const query = { domainId: packagingId };
    const packagingRecord = await this.packagingSchema.findOne(query as FilterQuery<IPackagingPersistence & Document>);

    if (packagingRecord != null) {
      return PackagingMap.toDomain(packagingRecord);
    }
    else
      return null;
  }

  public async delete(packagingId: PackagingId | string): Promise<boolean> {

    const idX = packagingId instanceof PackagingId ? (<PackagingId>packagingId).toValue() : packagingId;

    const query = { domainId: idX };
    const packagingDocument = await this.packagingSchema.deleteOne(query as FilterQuery<IPackagingPersistence & Document>);

    return !!packagingDocument === true;
  }

  public async findAll(): Promise<Packaging[]> {
    const packagingDocument = await this.packagingSchema.find({});

    try {
      if (packagingDocument == null) {
        return null;
      }
      else {
        let packagingArray = [];

        for (let i = 0; i < packagingDocument.length; i++) {

          packagingArray[i] = PackagingMap.toDomain(packagingDocument[i]);

        }
        return packagingArray;
      }

    }
    catch (e) {
      throw e;
    }
  }

  /*public async findById (packagingId: PackagingId | string): Promise<Packaging> {

    const idX = packagingId instanceof PackagingId ? (<PackagingId>packagingId).toValue() : packagingId;

    const query = { domainId: idX }; 
    const packagingRecord = await this.packagingSchema.findOne( query as FilterQuery<IPackagingPersistence & Document> );

    if( packagingRecord != null) {
      return PackagingMap.toDomain(packagingRecord);
    }
    else
      return null;
  }*/
}