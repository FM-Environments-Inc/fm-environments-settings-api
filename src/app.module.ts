import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from './database/database.module';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    DatabaseModule,
    EnvironmentModule,
  ],
  providers: [],
})
export class AppModule {}
