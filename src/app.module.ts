import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {FilesModule} from './files/files.module';
import {PostsModule} from './posts/posts.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import {Post} from "./posts/posts.model";
import {ConfigModule} from '@nestjs/config';
import {ImageMagicModule} from './image-magic/image-magic.module';
import {ImageOptimisation} from "./image-magic/image-magic.model";

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
            dialect: 'mysql',
            username: 'task8-3_u',
            password: 'rgegr79serg4geRg',
            database: 'task8-3',
            models: [Post, ImageOptimisation],
            autoLoadModels: true,
            synchronize: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        FilesModule,
        PostsModule,
        ImageMagicModule
    ],
})
export class AppModule {
}
