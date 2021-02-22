import { Module } from "@nestjs/common";

import { BaseModule } from "../base/base.module";
import { DriverController } from "../../controllers/driver/driver.controller";
import { DriverService } from "../../providers/driver/driver.service";

@Module({
  controllers: [DriverController],
  exports: [],
  imports: [BaseModule],
  providers: [DriverService],
})
export class DriverModule {}
