import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, SchemaTypes } from 'mongoose';
import { CreateEmployeeApiDto } from './dto/create-employee-api.dto';
import { UpdateEmployeeApiDto } from './dto/update-employee-api.dto';
import { Employee } from './employee.schema';

@Injectable()
export class EmployeeApiService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}

  create(createEmployeeApiDto: CreateEmployeeApiDto) {
    console.log('This action adds a new employeeApi');
    const saveEmp = new this.employeeModel(createEmployeeApiDto);
    return saveEmp.save();
  }

  findAll() {
    console.log(`This action returns all employeeApi`);
    return this.employeeModel.find();
  }

  findOne(identifier:string, id: string) {
    console.log(`This action returns a #${id} employeeApi`, identifier, {
      [identifier]: id,
    });
    if (identifier !== 'email') {
      let dd = new mongoose.Types.ObjectId(id);
      return this.employeeModel.find({ [identifier]: dd });
    }
    return this.employeeModel.find({ [identifier]: id });
  }

  update(id: string, updateEmployeeApiDto: UpdateEmployeeApiDto) {
    console.log(`This action updates a #${id} employeeApi`);
    let dd = new mongoose.Types.ObjectId(id);
    return this.employeeModel.updateOne(dd, updateEmployeeApiDto);
  }

  remove(id: number) {
    return `This action removes a #${id} employeeApi`;
  }
}
