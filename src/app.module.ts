import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodbConfig from './config/mongodb.config';
import { join } from 'path';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: true
    // }),
    // MongooseModule.forRoot('mongodb+srv://sapient064:VMWare%402020@cluster-sap-restaurant.bsirfia.mongodb.net/'),
    ConfigModule.forRoot({
      load: [mongodbConfig],
      isGlobal: true
   }),
   GraphQLModule.forRootAsync<ApolloDriverConfig>({
     driver: ApolloDriver,
     inject: [ConfigService],
     useFactory: async (configService: ConfigService) => ({
       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
       installSubscriptionHandlers: true,
       sortSchema: true,
       playground: true,
       debug: configService.get<boolean>("DEBUG"),
       uploads: false,
     }),
   }),
   MongooseModule.forRootAsync({
     inject: [ConfigService],
     useFactory: async (configService: ConfigService) => ({
       uri: configService.get('MONGO_URI')
     })
   }),
    UserModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
