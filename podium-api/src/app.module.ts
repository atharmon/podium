import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DriverModule } from "./modules/driver/driver.module";
import { DriverController } from "./controllers/driver/driver.controller";
import { DriverService } from "./providers/driver/driver.service";
import { TypeOrmModule } from "@nestjs/typeorm";

const config = {};
@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [AppController, DriverController],
  providers: [AppService, DriverService],
})
export class AppModule {}
