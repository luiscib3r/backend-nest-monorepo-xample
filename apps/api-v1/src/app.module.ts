import { Module } from '@nestjs/common';

import { DtoModule } from '@company/lib-dto ';
import { ConfigModule } from '@nestjs/config';
import { DataSourceConfig } from './config/data.source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';

console.log('App.module-process.env.HASH_SALT', process.env.HASH_SALT);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    DtoModule,
    UsersModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
