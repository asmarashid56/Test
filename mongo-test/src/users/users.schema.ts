import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ strict: false, versionKey: false })   // <-- strict: false allows flexible fields
export class Employee {
  @Prop()
  name: string;

  @Prop()
  age: number;

  // Optional field defined,  can add others 
  @Prop()
  role?: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
