import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DriverModule } from "./modules/driver/driver.module";

const config = {};
@Module({
  imports: [TypeOrmModule.forRoot(config), DriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
