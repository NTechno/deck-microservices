import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeApiDto } from './create-employee-api.dto';

export class UpdateEmployeeApiDto extends PartialType(CreateEmployeeApiDto) {}
