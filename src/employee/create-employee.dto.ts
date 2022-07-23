import {
  IsString,
  IsDateString,
  IsArray,
  Length,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateEmployeeDto {
  // Personal info

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsDateString()
  readonly birthday: Date;

  @IsDateString()
  readonly contract: Date;

  @Length(13, 13, {
    message: 'JMBG must have exactly 13 digits. ',
  })
  readonly jmbg: string;

  // Bank accounts

  @Length(18, 18, {
    message: 'First bank account number must have exactly 18 digits. ',
  })
  readonly bankAccountOne: string;

  @Length(18, 18, {
    message: 'Second bank account number must have exactly 18 digits. ',
  })
  readonly bankAccountTwo: string;

  // Tests & Eyes check

  @IsDateString()
  readonly eyes: Date;

  @IsDateString()
  readonly safety: Date;

  @IsDateString()
  readonly fire: Date;

  @IsDateString()
  readonly firstAid: Date;

  // Job role & Skills

  @IsString()
  readonly jobRole: string;

  @IsArray()
  readonly skills: string[];

  // Paycheck

  @IsNumberString()
  readonly payTotal: number;

  @IsNumberString()
  readonly payAccount: number;

  // Benefits

  @IsString()
  readonly benefitUser: string;

  @IsDateString()
  readonly healthDate: Date;

  @IsDateString()
  readonly fitpassDate: Date;

  @IsArray()
  readonly comment: string[];
}
