import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { EmployeeApiModule } from 'src/employee/employee-api.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './project.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Project.name , schema:ProjectSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
