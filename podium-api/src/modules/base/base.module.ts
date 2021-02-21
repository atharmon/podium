import { Module } from "@nestjs/common";

import { BaseController } from "../../controllers/base/base.controller";
import { BaseProvider } from "../../providers/base/base.service";

@Module({
  imports: [],
  exports: [BaseController, BaseProvider],
  controllers: [BaseController],
  providers: [BaseProvider],
})
export class BaseModule {}
