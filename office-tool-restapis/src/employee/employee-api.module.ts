import { Module } from '@nestjs/common';
import { EmployeeApiService } from './employee-api.service';
import { EmployeeApiController } from './employee-api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeeApiController],
  providers: [EmployeeApiService],
  exports: [EmployeeApiService],
})
export class EmployeeApiModule {}
