import { Module } from '@nestjs/common';
import { ImageMagicService } from './image-magic.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {ImageOptimisation} from "./image-magic.model";

@Module({
  providers: [ImageMagicService],
  exports: [ImageMagicService],
  imports: [
    SequelizeModule.forFeature([ImageOptimisation])
  ]
})
export class ImageMagicModule {}
