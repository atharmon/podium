import { Controller } from "@nestjs/common";

import { Driver } from "src/entities/all.entity";
import { DriverService } from "src/providers/driver/driver.service";
import { BaseController } from "../base/base.controller";

@Controller("driver")
export class DriverController extends BaseController<Driver> {
  constructor(private service: DriverService) {
    super(service);
  }
}
