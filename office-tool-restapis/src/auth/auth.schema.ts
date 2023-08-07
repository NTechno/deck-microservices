/**
 * schema to save authenticatn data
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop()
  empId: String;

  @Prop()
  accessToken: string;

  @Prop({ default: true })
  inuse: string;

  @Prop()
  expierAt: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
