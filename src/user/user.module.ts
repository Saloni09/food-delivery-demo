import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
//import { UserSchema } from './user.type';
import { User, UserSchema } from './user.entity';
import { UsersService } from './user.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [UsersResolver, UsersService]
})
export class UserModule {}
