import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {FilesModule} from "../files/files.module";
import {ImageMagicModule} from "../image-magic/image-magic.module";
import {KrakenModule} from "../kraken/kraken.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
      SequelizeModule.forFeature([Post]),
      FilesModule,
      ImageMagicModule,
      KrakenModule
  ]
})
export class PostsModule {}
