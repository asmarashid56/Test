import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async create(employee: Employee): Promise<Employee> {
    const newEmployee = new this.employeeModel(employee);
    return newEmployee.save();
  }
  async update(id: string, employee: Partial<Employee>): Promise<Employee> {
  const updated = await this.employeeModel.findByIdAndUpdate(id, employee, { new: true }).exec();
  if (!updated) {
    throw new Error(`Employee with id ${id} not found`);
  }
  return updated;
}

async delete(id: string): Promise<Employee> {
  const deleted = await this.employeeModel.findByIdAndDelete(id).exec();
  if (!deleted) {
    throw new Error(`Employee with id ${id} not found`);
  }
  return deleted;
}

}
