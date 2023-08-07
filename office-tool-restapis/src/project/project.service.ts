import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    console.log('This action adds a new project');
    let dd = new this.projectModel(createProjectDto);
    return dd.save();
  }

  findAll() {
    console.log(`This action returns all project`);
    return this.projectModel.find();
  }

  findOne(id: string) {
    let dd = new mongoose.Types.ObjectId(id);
    return this.projectModel.findById(dd);
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    let dd = new mongoose.Types.ObjectId(id);
    return this.projectModel.updateOne(dd, updateProjectDto);
  }

  remove(id: number) {
    console.log('into remove!!!');
  }
}
