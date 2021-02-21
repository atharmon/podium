import { Body, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Controller } from "@nestjs/common";

import { BaseEntity, DeepPartial } from "typeorm";

import { BaseProvider } from "../../providers/base/base.service";

@Controller("base")
export abstract class BaseController<T extends BaseEntity> {
  constructor(private readonly baseProvider: BaseProvider<T>) {}

  @Post()
  create(@Body() entity: DeepPartial<T>) {
    return this.baseProvider.create(entity);
  }

  @Get()
  findAll() {
    return this.baseProvider.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.baseProvider.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updatedEntity: DeepPartial<T>) {
    return this.baseProvider.update(id, updatedEntity);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.baseProvider.remove(id);
  }
}
