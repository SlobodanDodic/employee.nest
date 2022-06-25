import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(employee: Employee): Promise<Employee> {
    const newEmployee = new this.employeeModel(employee);
    return newEmployee.save();
  }

  async readAll(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  async readById(id: string): Promise<Employee> {
    return await this.employeeModel.findById(id).exec();
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }

  async delete(id: string): Promise<any> {
    return await this.employeeModel.findByIdAndRemove(id);
  }
}
