import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { FilesModule } from './files/files.module';
import { PostsModule } from './posts/posts.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import {Post} from "./posts/posts.model";
import { ConfigModule } from '@nestjs/config';

const defaultOptions = {
    dialect: 'mysql',
    port: 3306,
    username: 'task8-3_u',
    password: 'rgegr79serg4geRg',
    database: 'task8-3',
    synchronize: true,
}

@Module({
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
        host: 'mysql',
        port: 3306,
        username: 'task8-3_u',
        password: 'rgegr79serg4geRg',
        database: 'task8-3',
        models: [Post],
        autoLoadModels: true,
        synchronize: true,
      }),
      ServeStaticModule.forRoot({
          rootPath: path.resolve(__dirname, 'static'),
      }),
      FilesModule,
      PostsModule
    ],
})
export class AppModule {}
