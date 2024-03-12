import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class User extends Document {

  @Field(() => ID)
  _id: string;
  
  @Prop()
  @Field()
  username: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  @Field()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);