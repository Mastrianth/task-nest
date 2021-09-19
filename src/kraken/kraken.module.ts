import { Module } from '@nestjs/common';
import { KrakenService } from './kraken.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {ImageOptimisation} from "../image-magic/image-magic.model";

@Module({
  providers: [KrakenService],
  exports: [KrakenService],
  imports: [
    SequelizeModule.forFeature([ImageOptimisation])
  ]
})
export class KrakenModule {}
