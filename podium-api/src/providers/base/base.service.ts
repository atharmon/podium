import { Injectable } from "@nestjs/common";

import {
  BaseEntity,
  Repository,
  FindManyOptions,
  DeepPartial,
  FindOneOptions,
  FindConditions,
} from "typeorm";

@Injectable()
export abstract class BaseProvider<T extends BaseEntity> {
  constructor(public readonly respository: Repository<T>) {}

  public create(entity: DeepPartial<T>) {
    return this.respository.create(entity).save();
  }

  public findAll() {
    return this.respository.find();
  }

  public findOne(id: string) {
    const options: FindOneOptions<T> = {
      where: {
        id,
      },
    };
    return this.respository.findOne(options);
  }

  public findMany(options: FindManyOptions<T>) {
    return this.respository.find(options);
  }

  public update(id: string, updatedEntity: DeepPartial<T>) {
    return this.respository.update(id, updatedEntity);
  }

  public remove(id: string) {
    return this.respository.delete(id);
  }
}
