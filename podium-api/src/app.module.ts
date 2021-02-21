import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BaseController } from './controllers/base/base.controller';
import { BaseService } from './providers/base/base.service';

@Module({
  imports: [],
  controllers: [AppController, BaseController],
  providers: [AppService, BaseService],
})
export class AppModule {}
