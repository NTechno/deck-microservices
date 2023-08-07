import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchemaTypes } from 'mongoose';
import { EmployeeApiService } from './employee-api.service';
import { CreateEmployeeApiDto } from './dto/create-employee-api.dto';
import { UpdateEmployeeApiDto } from './dto/update-employee-api.dto';

@Controller('employee')
export class EmployeeApiController {
  constructor(private readonly employeeApiService: EmployeeApiService) {
    console.log('initialise emplyee api');
  }

  @Post()
  create(@Body() createEmployeeApiDto: CreateEmployeeApiDto) {
    console.log('create employee controller', createEmployeeApiDto);
    return this.employeeApiService.create(createEmployeeApiDto);
  }

  @Get()
  findAll() {
    return this.employeeApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('into details', id);
    return this.employeeApiService.findOne('id', id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeApiDto: UpdateEmployeeApiDto,
  ) {
    return this.employeeApiService.update(id, updateEmployeeApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeApiService.remove(+id);
  }
}
