import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'task8-3_u',
        password: 'rgegr79serg4geRg',
        database: 'task8-3',
        models: [],
        autoLoadModels: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
