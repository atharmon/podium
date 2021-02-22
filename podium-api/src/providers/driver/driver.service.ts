import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { Driver } from "../../entities/all.entity";
import { BaseProvider } from "../base/base.service";

@Injectable()
export class DriverService extends BaseProvider<Driver> {
  constructor(@InjectRepository(Response) private repo: Repository<Driver>) {
    super(repo);
  }
}
