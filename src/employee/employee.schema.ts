import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee {
  // Personal info
  @Prop()
  name: string;

  @Prop()
  birthday: Date;

  @Prop()
  contract: Date;

  @Prop()
  jmbg: string;

  // Bank accounts
  @Prop()
  bankAccountOne: string;

  @Prop()
  bankAccountTwo: string;

  // Tests & Eyes check
  @Prop()
  eyes: Date;

  @Prop()
  safety: Date;

  @Prop()
  fire: Date;

  @Prop()
  firstAid: Date;

  // Job role & Skills
  @Prop()
  jobRole: string;

  @Prop([String])
  skills: string[];

  // Paycheck
  @Prop()
  paycheck: number;

  @Prop()
  bonus: number;

  // Benefits
  @Prop()
  benefitUser: string;

  @Prop()
  healthDate: Date;

  @Prop()
  fitpassDate: Date;

  @Prop()
  comment: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
