import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
