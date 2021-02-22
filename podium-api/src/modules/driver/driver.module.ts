import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { DriverController } from "../../controllers/driver/driver.controller";
import { DriverService } from "../../providers/driver/driver.service";
import { Driver } from "../../entities/all.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}
