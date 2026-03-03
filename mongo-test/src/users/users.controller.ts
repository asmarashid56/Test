import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Employee } from './users.schema';

@Controller('employees')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createEmployee(@Body() employee: Employee): Promise<Employee> {
    return this.usersService.create(employee);
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() employee: Employee): Promise<Employee> {
    return this.usersService.update(id, employee);
  }

  @Patch(':id')
  async partialUpdateEmployee(@Param('id') id: string, @Body() employee: Partial<Employee>): Promise<Employee> {
    return this.usersService.update(id, employee);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: string): Promise<Employee> {
    return this.usersService.delete(id);
  }
}
